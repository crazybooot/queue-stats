<?php

namespace Crazybooot\JobsStats\Providers;

use Crazybooot\JobsStats\Commands\InstallPackageCommand;
use Crazybooot\JobsStats\Commands\UpdatePackageCommand;
use Crazybooot\JobsStats\Make\JobMakeCommand;
use Crazybooot\JobsStats\Services\JobsStatsService;
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
    /**
     *
     */
    public function boot()
    {
        if (config('jobs-stats.enabled')) {
            Queue::before(function (JobProcessing $event) {
                JobsStatsService::handleQueueBeforeEvent($event);
            });

            Queue::after(function (JobProcessed $event) {
                JobsStatsService::handleQueueAfterEvent($event);
            });

            Queue::failing(function (JobFailed $event) {
                JobsStatsService::handleQueueFailingEvent($event);
            });

            Queue::exceptionOccurred(function (JobExceptionOccurred $event) {
                JobsStatsService::handleQueueExceptionOccurredEvent($event);
            });
        }

        $this->publishMigrations();
        $this->publishAssets();
        $this->loadRoutesFrom(__DIR__.'./../routes.php');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'jobs-stats');
        $this->registerCommands();
    }

    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/jobs-stats.php', 'jobs-stats'
        );
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
     * Publish package assets
     */
    protected function publishAssets()
    {
        $this->publishes([
            __DIR__.'/../../public/js' => public_path('vendor/jobs-stats'),
        ], 'public');
    }

    /**
     * Register package commands
     */
    protected function registerCommands()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallPackageCommand::class,
                UpdatePackageCommand::class,
                JobMakeCommand::class,
            ]);
        }
    }
}