<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Providers;

use Crazybooot\QueueStats\Commands\InstallPackageCommand;
use Crazybooot\QueueStats\Commands\UpdatePackageCommand;
use Crazybooot\QueueStats\Services\QueueStatsService;
use Illuminate\Queue\Events\JobExceptionOccurred;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Support\ServiceProvider;
use Queue;

use function config, database_path, public_path;

/**
 * Class QueueStatsServiceProvider
 *
 * @package Crazybooot\QueueStats\Providers
 */
class QueueStatsServiceProvider extends ServiceProvider
{
    /**
     *
     */
    public function boot()
    {
        if (config('queue-stats.enabled')) {
            Queue::before(function (JobProcessing $event) {
                QueueStatsService::handleQueueBeforeEvent($event);
            });

            Queue::after(function (JobProcessed $event) {
                QueueStatsService::handleQueueAfterEvent($event);
            });

            Queue::failing(function (JobFailed $event) {
                QueueStatsService::handleQueueFailingEvent($event);
            });

            Queue::exceptionOccurred(function (JobExceptionOccurred $event) {
                QueueStatsService::handleQueueExceptionOccurredEvent($event);
            });
        }

        $this->publishMigrations();
        $this->publishAssets();
        $this->loadRoutesFrom(__DIR__.'./../routes.php');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'queue-stats');
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
            __DIR__.'/../../config/queue-stats.php', 'queue-stats'
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
            __DIR__.'/../../public/js' => public_path('vendor/queue-stats'),
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
            ]);
        }
    }
}