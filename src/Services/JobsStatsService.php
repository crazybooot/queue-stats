<?php

namespace Crazybooot\JobsStats\Services;

use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Crazybooot\JobsStats\Interfaces\JobsStatsInterface;
use Crazybooot\JobsStats\Models\Attempt;
use Crazybooot\JobsStats\Models\Job;
use Illuminate\Queue\Jobs\BeanstalkdJob;
use Illuminate\Queue\Jobs\DatabaseJob;
use Illuminate\Queue\Jobs\RedisJob;

/**
 * Class JobsStatsService
 *
 * @package Crazybooot\JobsStats\Services
 */
class JobsStatsService
{
    /**
     * @param JobProcessing $event
     */
    public static function handleQueueBeforeEvent(JobProcessing $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $originalJob = static::getOriginalJobObject($event);
            $jobsStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();
            $attempt = $event->job->attempts();

            $jobsStatsJob->update([
                'connection' => $event->connectionName,
                'queue'      => $event->job->getQueue(),
            ]);

            $previousAttemptFinishedAt = null;

            if ($attempt > 1) {
                $previousAttemptFinishedAt = $jobsStatsJob
                    ->attempts()
                    ->where('attempt_number', $attempt - 1)
                    ->value('finished_at');
            } else {
                $previousAttemptFinishedAt = $jobsStatsJob->getAttribute('queued_at');
            }

            $now = microtime(true);

            $jobsStatsJob->attempts()->create([
                'attempt_number'   => $attempt,
                'status'           => Attempt::STATUS_STARTED,
                'started_at'       => $now,
                'waiting_duration' => $now - (float) $previousAttemptFinishedAt,
            ]);
        }
    }

    /**
     * @param JobProcessed $event
     */
    public static function handleQueueAfterEvent(JobProcessed $event)
    {
        if (static::isSupportedQueueDriver($event) && static::isStatsEnabled($event)) {
            $now = microtime(true);
            $originalJob = static::getOriginalJobObject($event);

            $jobsStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $jobsStatsJob->update([
                'status' => Job::STATUS_SUCCESS,
            ]);

            $jobsStatsJobTry = $jobsStatsJob->attempts()
                ->where('status', Attempt::STATUS_STARTED)
                ->latest()
                ->first();

            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'            => Attempt::STATUS_COMPLETED,
                    'finished_at'       => $now,
                    'handling_duration' => $now - $jobsStatsJobTry->getAttribute('started_at'),
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
            $jobsStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $jobsStatsJob->update([
                'status' => Job::STATUS_FAILED,
            ]);

            $jobsStatsJobTry = $jobsStatsJob
                ->attempts()
                ->where('status', Attempt::STATUS_STARTED)
                ->latest()
                ->first();

            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => Attempt::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $jobsStatsJobTry->getAttribute('started_at'),
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
            $now = microtime(true);
            $originalJob = static::getOriginalJobObject($event);
            $jobsStatsJob = Job::where('uuid', $originalJob->getUuid())->latest()->first();

            $jobsStatsJobTry = $jobsStatsJob
                ->attempts()
                ->where('attempt_number', $event->job->attempts())
                ->latest()
                ->first();

            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => Attempt::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $jobsStatsJobTry->getAttribute('started_at'),
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
        return in_array(JobsStatsInterface::class, class_implements($event->job->payload()['data']['commandName']), true);
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