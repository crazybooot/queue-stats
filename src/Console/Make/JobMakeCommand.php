<?php

namespace Crazybooot\QueueStats\Make;

use Illuminate\Foundation\Console\JobMakeCommand;

/**
 * Class StatJobMakeCommand
 * 
 * @package Crazybooot\QueueStats\Providers
 */
class StatJobMakeCommand extends JobMakeCommand
{
    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return $this->option('sync')
            ? __DIR__.'/stubs/job.stub'
            : __DIR__.'/stubs/job-queued.stub';
    }
}
