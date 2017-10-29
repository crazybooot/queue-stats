Laravel package for queued job statistics collecting

## Install

* Install composer package to your laravel project
``` bash
$ composer require crazybooot/jobs-stats
```

* Add service provider to config/app.php
``` php
    'providers' => [
        ...
        Crazybooot\JobsStats\Providers\JobsStatsServiceProvider::class,
    ],
```

* Publish migrations
``` bash
$ php artisan vendor:publish --provider="Crazybooot\JobsStats\Providers\JobsStatsProvider" --tag="migrations"
```

* Run migrations
``` bash
$ php artisn migrate
```

* Use JobsStatsTrait and JobStatsInterface on jobs models you want to collect statistics
``` php
...
use Crazybooot\JobsStats\Traits\JobsStatsTrait;
use Crazybooot\JobsStats\Interfaces\JobsStatsInterface;

class ExampleJob implementes JobsStatsInterface, ShouldQueue
{
    use JobsStatsTrait;
}
```
* As well you can use extended artisan command to generate job with JobsStatsTrait and JobStatsInterface
``` php
// \App\Console\Kernel.php
    ...
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        ...
        Crazybooot\JobsStats\Make\StatJobMakeCommand::class
    ];
```

## Using

Get statistics about jobs:

``` php
...
use Crazybooot\JobsStats\Models\Job;

...
// get failed jobs
Job::failed()->get();

// get success jobs
Job::success()->get();

// get not handled jobs
Job::notHandled()->get();

// get jobs handled on specified queue
Job::queue('default')->get();

// get jobs on specified connection
Job::connection('redis')->get();

// get jobs with specified class
Job::class(ExampleJob::class)->get();

// get jobs with specified number of attempts
Job::attemptsCount(3)->get();

// get jobs which has result
Job::withResult()->get();

// get jobs which have no result
Job::withoutResult()->get();

// get jobs with specified type
Job::type('custom_type')->get();

// get jobs without type
Job::withoutType()->get();
```

You can get statistics about one job by using getUuid() method on job instance before dispatching job:
``` php
...
use Crazybooot\JobsStats\Models\Job;
use App\Job\ExampleJob;

...

$job = new ExampleJob();
$uuid = $job->getUuid();

...

dispath($job);

...

$jobStats = Job::where('uuid', $uuid)->first();

// returns total job atempts waiting on queue duration in seconds
$waitingDuration = $jobStats->getAttribute('waiting_duration');

// returns total job atempts handling duration in seconds
$handlingDuration = $jobStats->getAttribute('handling_duration);

// return job attempts count
$attemptsCount = $jobStats->getAttribute('attempts_count');
```
You can add some job results to statistics passing array of data
you want to save $this->saveResult().
Result will be stored in database in json format what allows to query
more complex data with Eloquent or Query Builder.
``` php
use Crazybooot\JobsStats\Traits\JobsStatsTrait;

class ExampleJob implementes ShouldQueue
{
    use JobsStatsTrait;
    
    ...
    
    public function handle()
    {
    
    ...
    
    $this->saveResult([
        'some_key' => [
            'some_key' => 'some_payload'
        ]
    ]);
    }
}
```

## Requirements

* PHP: 5.6+
* Laravel: 5+
* Supported queue drivers: database, beanstalkd, redis

