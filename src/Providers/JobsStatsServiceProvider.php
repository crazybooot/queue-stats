<?php

namespace Crazybooot\JobsStats\Providers;

use Crazybooot\JobsStats\Models\Attempt;
use Crazybooot\JobsStats\Models\Job;
use Crazybooot\JobsStats\Traits\JobsStatsTrait;
use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Queue\Jobs\BeanstalkdJob;
use Illuminate\Queue\Jobs\DatabaseJob;
use Illuminate\Support\ServiceProvider;
use Queue;

/**
 * Class JobsStatsServiceProvider
 *
 * @package Crazybooot\JobsStats\Providers
 */
class JobsStatsServiceProvider extends ServiceProvider
{
    /**
     *
     */
    public function boot()
    {
        Queue::before(function (JobProcessing $event) {
            if ($this->isSupportedQueueDriver($event) && $this->isStatsEnabled($event)) {
                $originalJob = $this->getOriginalJobObject($event);
                $jobsStatsJob = Job::where('uuid', $originalJob->uuid)->latest()->first();
                $attempt = $event->job->attempts();

                $jobsStatsJob->update([
                    'attempts_count' => $attempt,
                    'connection'     => $event->connectionName,
                    'queue'          => $event->job->getQueue(),
                ]);

                $previousAttemptFinishedAt = null;

                if ($attempt > 1) {
                    $previousAttemptFinishedAt = $jobsStatsJob->attempts()->where('attempt_number', $attempt - 1)->value('finished_at');
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
        });

        Queue::after(function (JobProcessed $event) {
            if ($this->isSupportedQueueDriver($event) && $this->isStatsEnabled($event)) {
                $now = microtime(true);
                $originalJob = $this->getOriginalJobObject($event);

                $jobsStatsJob = Job::where('uuid', $originalJob->uuid)->latest()->first();
                $jobsStatsJob->update([
                    'status' => Job::STATUS_SUCCESS,
                ]);
                $jobsStatsJobTry = $jobsStatsJob->attempts()->where('status', Attempt::STATUS_STARTED)->latest()->first();

                if (null !== $jobsStatsJobTry) {
                    $jobsStatsJobTry->update([
                        'status'            => Attempt::STATUS_COMPLETED,
                        'finished_at'       => $now,
                        'handling_duration' => $now - $jobsStatsJobTry->getAttribute('started_at'),
                    ]);
                }
            }
        });

        Queue::failing(function (JobFailed $event) {
            if ($this->isSupportedQueueDriver($event) && $this->isStatsEnabled($event)) {
                $now = microtime(true);
                $originalJob = $this->getOriginalJobObject($event);
                $uuid = $originalJob->uuid;
                $jobsStatsJob = Job::where('uuid', $uuid)->latest()->first();
                $jobsStatsJob->update([
                    'status' => Job::STATUS_FAILED,
                ]);
                $jobsStatsJobTry = $jobsStatsJob->attempts()->where('status', Attempt::STATUS_STARTED)->latest()->first();
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
        });

        Queue::exceptionOccurred(function (JobExceptionOccurred $event) {
            if ($this->isSupportedQueueDriver($event) && $this->isStatsEnabled($event)) {
                $now = microtime(true);
                $originalJob = $this->getOriginalJobObject($event);
                $uuid = $originalJob->uuid;
                $jobsStatsJob = Job::where('uuid', $uuid)->latest()->first();
                $jobsStatsJobTry = $jobsStatsJob->attempts()->where('attempt_number', $event->job->attempts())->latest()->first();
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
        });

        $this->publishMigrations();
    }

    /**
     * Publish package migrations
     */
    protected function publishMigrations()
    {
        $this->publishes([
            __DIR__.'/../../database/migrations/' => database_path('migrations'),
        ], 'migrations');
    }

    /**
     * @param $event
     *
     * @return mixed
     */
    protected function getOriginalJobObject($event)
    {
        $jobData = $event->job->payload();

        return unserialize($jobData['data']['command'], ['allowed_classes' => [$jobData['data']['commandName']]]);
    }

    /**
     * @param $event
     *
     * @return bool
     */
    protected function isStatsEnabled($event)
    {
        return in_array(JobsStatsTrait::class, class_uses($event->job->payload()['data']['commandName']), true);
    }

    /**
     * @param $event
     *
     * @return bool
     */
    protected function isSupportedQueueDriver($event)
    {
        $job = $event->job;

        //@todo test with another queue drivers
        return $job instanceof BeanstalkdJob || $job instanceof DatabaseJob;
    }
}