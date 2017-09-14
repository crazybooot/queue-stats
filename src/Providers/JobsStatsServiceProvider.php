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
            $uuid = unserialize(json_decode($event->job->getRawBody())->data->command)->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJob->update([
                'attempts'   => $event->job->attempts(),
                'connection' => $event->connectionName,
            ]);
            $jobsStatsJob->tries()->create([
                'attempt'    => $event->job->attempts(),
                'status'     => JobsStatsJobTry::STATUS_STARTED,
                'started_at' => microtime(true),
            ]);
        });

        Queue::after(function (JobProcessed $event) {
            $microtime = microtime(true);
            $uuid = unserialize(json_decode($event->job->getRawBody())->data->command)->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJob->update([
                'status' => JobsStatsJob::STATUS_SUCCESS,
            ]);
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('status', JobsStatsJobTry::STATUS_STARTED)->latest()->first();
            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'            => JobsStatsJobTry::STATUS_COMPLETED,
                    'finished_at'       => $microtime,
                    'handling_duration' => $microtime - $jobsStatsJobTry->getAttribute('started_at'),
                ]);
            }
        });

        Queue::failing(function (JobFailed $event) {
            $microtime = microtime(true);
            $uuid = unserialize(json_decode($event->job->getRawBody())->data->command)->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJob->update([
                'status' => JobsStatsJob::STATUS_FAILED,
            ]);
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('status', JobsStatsJobTry::STATUS_STARTED)->latest()->first();
            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => JobsStatsJobTry::STATUS_FAILED,
                    'finished_at'          => $microtime,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $microtime - $jobsStatsJobTry->getAttribute('started_at'),
                ]);
            }
        });

        Queue::exceptionOccurred(function (JobExceptionOccurred $event) {
            $microtime = microtime(true);
            $uuid = unserialize(json_decode($event->job->getRawBody())->data->command)->uuid;
            $jobsStatsJob = JobsStatsJob::where('uuid', $uuid)->latest()->first();
            $jobsStatsJobTry = $jobsStatsJob->tries()->where('attempt', $event->job->attempts())->latest()->first();
            if (null !== $jobsStatsJobTry) {
                $jobsStatsJobTry->update([
                    'status'               => JobsStatsJobTry::STATUS_FAILED,
                    'finished_at'          => $microtime,
                    'exception_message'    => $event->exception->getMessage(),
                    'exception_call_stack' => json_encode($event->exception->getTrace()),
                    'handling_duration'    => $microtime - $jobsStatsJobTry->getAttribute('started_at'),
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
}