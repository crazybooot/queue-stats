<?php

namespace Crazybooot\JobsStats\Commands;

use Illuminate\Console\Command;
use Artisan;

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
            '--provider' => 'Crazybooot\JobsStats\Providers\JobsStatsProvider',
            '--tag'      => 'migrations',
        ]);

        Artisan::call('migrate', [
            '--path' => 'database/migrations/2017_09_13_081537_create_jobs_stats_jobs_table',
        ]);

        Artisan::call('migrate', [
            '--path' => 'database/migrations/2017_09_13_081554_create_jobs_stats_job_attempts_table',
        ]);

        Artisan::call('vendor:publish', [
            '--provider' => 'Crazybooot\JobsStats\Providers\JobsStatsProvider',
            '--tag'      => 'public',
            '--force'    => true,
        ]);
    }
}