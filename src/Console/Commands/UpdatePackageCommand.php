<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Commands;

use Crazybooot\QueueStats\Providers\QueueStatsServiceProvider;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

/**
 * Class UpdatePackageCommand
 *
 * @package Crazybooot\QueueStats\Commands
 */
class UpdatePackageCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue-stats:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Queue Stats package';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Artisan::call('migrate', [
            '--path'  => __DIR__.'/../../../database/migrations/',
            '--force' => true,
        ]);

        Artisan::call('vendor:publish', [
            '--provider' => QueueStatsServiceProvider::class,
            '--tag'      => 'public',
            '--force'    => true,
        ]);
    }
}