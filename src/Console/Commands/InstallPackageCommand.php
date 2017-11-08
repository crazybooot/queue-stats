<?php
declare(strict_types  = 1);

namespace Crazybooot\JobsStats\Commands;

use Crazybooot\JobsStats\Providers\JobsStatsServiceProvider;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Class InstallPackageCommand
 *
 * @package Crazybooot\JobsStats\Commands
 */
class InstallPackageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jobs-stats:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Jobs Stats package';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Artisan::call('vendor:publish', [
            '--provider' => JobsStatsServiceProvider::class,
            '--tag'      => 'migrations',
        ]);

        Artisan::call('migrate', [
            '--force' => true,
        ]);

        Artisan::call('vendor:publish', [
            '--provider' => JobsStatsServiceProvider::class,
            '--tag'      => 'public',
            '--force'    => true,
        ]);
    }
}