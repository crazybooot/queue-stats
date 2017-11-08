<?php
declare(strict_types  = 1);

namespace Crazybooot\QueueStats\Commands;

use Crazybooot\QueueStats\Providers\QueueStatsServiceProvider;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Class InstallPackageCommand
 *
 * @package Crazybooot\QueueStats\Commands
 */
class InstallPackageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue-stats:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Queue Stats package';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Artisan::call('vendor:publish', [
            '--provider' => QueueStatsServiceProvider::class,
            '--tag'      => 'migrations',
        ]);

        Artisan::call('migrate', [
            '--force' => true,
        ]);

        Artisan::call('vendor:publish', [
            '--provider' => QueueStatsServiceProvider::class,
            '--tag'      => 'public',
            '--force'    => true,
        ]);
    }
}