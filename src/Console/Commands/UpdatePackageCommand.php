<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Commands;

use Crazybooot\JobsStats\Providers\JobsStatsServiceProvider;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Class UpdatePackageCommand
 *
 * @package Crazybooot\JobsStats\Commands
 */
class UpdatePackageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jobs-stats:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Jobs Stats package';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Artisan::call('vendor:publish', [
            '--provider' => JobsStatsServiceProvider::class,
            '--tag'      => 'public',
            '--force'    => true,
        ]);
    }
}