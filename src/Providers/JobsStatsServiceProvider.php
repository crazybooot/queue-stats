<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Providers;

use Crazybooot\JobsStats\Models\JobsStatsJobTry;
use Crazybooot\JobsStats\Models\JobsStatsJob;
use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Support\ServiceProvider;
use Queue;

/**
 * Class JobsStatsServiceProvider
 *
 * @package Crazybooot\JobsStats\Providers
 */
class JobsStatsServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Queue::before(function (JobProcessing $event) {
            $originalJob = $this->getOriginalJobObject($event);
            $jobsStatsJob = JobsStatsJob::where('uuid', $originalJob->uuid)->latest()->first();
            $attempt = $event->job->attempts();

            $jobsStatsJob->update([
                'attempts'   => $attempt,
                'connection' => $event->connectionName,
                'queue'      => $event->job->getQueue(),
            ]);

            $previousAttemptFinishedAt = null;

            if ($attempt > 1) {
                $previousAttemptFinishedAt = $jobsStatsJob->tries()->where('attempt', $attempt - 1)->value('finished_at');
            } else {
                $previousAttemptFinishedAt = $jobsStatsJob->getAttribute('instantiated_at');
            }

            $now = microtime(true);

            $jobsStatsJob->tries()->create([
                'attempt'          => $attempt,
                'status'           => JobsStatsJobTry::STATUS_STARTED,
                'started_at'       => $now,
                'waiting_duration' => $now - (float) $previousAttemptFinishedAt,
            ]);
        });

        Queue::after(function (JobProcessed $event) {
            $now = microtime(true);
            $originalJob = $this->getOriginalJobObject($event);

            $jobsStatsJob = JobsStatsJob::where('uuid', $originalJob->uuid)->latest()->first();
            $jobsStatsJob->update([
                'status' => JobsStatsJob::STATUS_SUCCESS,
            ]);
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('status', JobsStatsJobTry::STATUS_STARTED)->latest()->first();

            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'            => JobsStatsJobTry::STATUS_COMPLETED,
                    'finished_at'       => $now,
                    'handling_duration' => $now - $jobsStatsJobTry->getAttribute('started_at'),
                ]);
            }
        });

        Queue::failing(function (JobFailed $event) {
            $now = microtime(true);
            $originalJob = $this->getOriginalJobObject($event);
            $uuid = $originalJob->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJob->update([
                'status' => JobsStatsJob::STATUS_FAILED,
            ]);
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('status', JobsStatsJobTry::STATUS_STARTED)->latest()->first();
            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => JobsStatsJobTry::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $jobsStatsJobTry->getAttribute('started_at'),
                ]);
            }
        });

        Queue::exceptionOccurred(function (JobExceptionOccurred $event) {
            $now = microtime(true);
            $originalJob = $this->getOriginalJobObject($event);
            $uuid = $originalJob->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('attempt', $event->job->attempts())->latest()->first();
            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => JobsStatsJobTry::STATUS_FAILED,
                    'finished_at'          => $now,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $now - $jobsStatsJobTry->getAttribute('started_at'),
                ]);
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

    protected function getOriginalJobObject($event)
    {
        $jobData = $event->job->payload();

        return unserialize($jobData['data']['command'], ['allowed_classes' => [$jobData['data']['commandName']]]);
    }
}