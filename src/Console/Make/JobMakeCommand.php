<?php

namespace Crazybooot\JobsStats\Make;

use Illuminate\Foundation\Console\JobMakeCommand as IlluminateJobMakeCommand;

/**
 * Class JobMakeCommand
 * 
 * @package Crazybooot\JobsStats\Providers
 */
class JobMakeCommand extends IlluminateJobMakeCommand
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
