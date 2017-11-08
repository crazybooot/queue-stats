<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Services;

use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Crazybooot\QueueStats\Interfaces\QueueStatsInterface;
use Crazybooot\QueueStats\Models\Attempt;
use Crazybooot\QueueStats\Models\Job;
use Illuminate\Queue\Jobs\BeanstalkdJob;
use Illuminate\Queue\Jobs\DatabaseJob;
use Illuminate\Queue\Jobs\RedisJob;
use DB;

use function config, microtime, json_encode, collect, class_implements, in_array, unserialize;
use const true, null;

/**
 * Class QueueStatsService
 *
 * @package Crazybooot\QueueStats\Services
 */
class QueueStatsService
{
    /**
     * @param JobProcessing $event
     */
    public static function handleQueueBeforeEvent(JobProcessing $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $originalJob = static::getOriginalJobObject($event);
            $queueStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();
            $attempt = $event->job->attempts();

            $queueStatsJob->update([
                'connection' => $event->connectionName,
                'queue'      => $event->job->getQueue(),
            ]);

            $previousAttemptFinishedAt = null;

            if ($attempt > 1) {
                $previousAttemptFinishedAt = $queueStatsJob
                    ->attempts()
                    ->where('attempt_number', $attempt - 1)
                    ->value('finished_at');
            } else {
                $previousAttemptFinishedAt = $queueStatsJob->getAttribute('queued_at');
            }

            $now = microtime(true);

            $queueStatsJob->attempts()->create([
                'attempt_number'   => $attempt,
                'status'           => Attempt::STATUS_STARTED,
                'started_at'       => $now,
                'waiting_duration' => $now - (float) $previousAttemptFinishedAt,
            ]);

            if (config('queue-stats.queries')) {
                DB::flushQueryLog();
                DB::enableQueryLog();
            }
        }
    }

    /**
     * @param JobProcessed $event
     */
    public static function handleQueueAfterEvent(JobProcessed $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $queries = null;
            if (config('queue-stats.queries')) {
                DB::disableQueryLog();
                $queries = collect(DB::getQueryLog());
            }

            $now = microtime(true);
            $originalJob = static::getOriginalJobObject($event);

            $queueStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $queueStatsJob->update([
                'status' => Job::STATUS_SUCCESS,
            ]);

            $queueStatsAttempt = $queueStatsJob->attempts()
                ->where('status', Attempt::STATUS_STARTED)
                ->latest()
                ->first();

            if (null !== $queueStatsAttempt) {
                $queueStatsAttempt->update([
                    'status'            => Attempt::STATUS_COMPLETED,
                    'finished_at'       => $now,
                    'handling_duration' => $now - $queueStatsAttempt->getAttribute('started_at'),
                    'queries_count'     => null !== $queries ? $queries->count() : null,
                    'queries_duration'  => null !== $queries ? $queries->sum('time') : null,
                ]);
            }
        }
    }

    /**
     * @param JobFailed $event
     */
    public static function handleQueueFailingEvent(JobFailed $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $now = microtime(true);
            $originalJob = static::getOriginalJobObject($event);
            $queueStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $queueStatsJob->update([
                'status' => Job::STATUS_FAILED,
            ]);

            $queueStatsAttempt = $queueStatsJob
                ->attempts()
                ->where('status', Attempt::STATUS_STARTED)
                ->latest()
                ->first();

            if (null !== $queueStatsAttempt) {
                $queueStatsAttempt->update([
                    'status'               => Attempt::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $queueStatsAttempt->getAttribute('started_at'),
                ]);
            }
        }
    }

    /**
     * @param JobExceptionOccurred $event
     */
    public static function handleQueueExceptionOccurredEvent(JobExceptionOccurred $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $queries = null;
            if (config('queue-stats.queries')) {
                DB::disableQueryLog();
                $queries = collect(DB::getQueryLog());
            }

            $now = microtime(true);
            $originalJob = static::getOriginalJobObject($event);
            $queueStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $queueStatsAttempt = $queueStatsJob
                ->attempts()
                ->where('attempt_number', $event->job->attempts())
                ->latest()
                ->first();

            if (null !== $queueStatsAttempt) {
                $queueStatsAttempt->update([
                    'status'               => Attempt::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $queueStatsAttempt->getAttribute('started_at'),
                    'queries_count'        => null !== $queries ? $queries->count() : null,
                    'queries_duration'     => null !== $queries ? $queries->sum('time') : null,
                ]);
            }
        }
    }

    /**
     * @param $event
     *
     * @return mixed
     */
    protected static function getOriginalJobObject($event)
    {
        $jobData = $event->job->payload();

        return unserialize($jobData['data']['command'], ['allowed_classes' => [$jobData['data']['commandName']]]);
    }

    /**
     * @param $event
     *
     * @return bool
     */
    protected static function isStatsEnabled($event)
    {
        return in_array(QueueStatsInterface::class, class_implements($event->job->payload()['data']['commandName']), true);
    }

    /**
     * @param $event
     *
     * @return bool
     */
    protected static function isSupportedQueueDriver($event)
    {
        $job = $event->job;

        //@todo test with another queue drivers
        return $job instanceof BeanstalkdJob || $job instanceof DatabaseJob || $job instanceof RedisJob;
    }
}