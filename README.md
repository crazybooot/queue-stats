Laravel package for queued job statistics collecting

## Install

* Install composer package to your laravel project
``` bash
$ composer require crazybooot/queue-stats
```

* Add service provider to config/app.php
``` php
    'providers' => [
        ...
        Crazybooot\QueueStats\Providers\QueueStatsServiceProvider::class,
    ],
```

* Publish migrations
``` bash
$ php artisan vendor:publish --provider="Crazybooot\QueueStats\Providers\QueueStatsServiceProvider" --tag="migrations"
```

* Run migrations
``` bash
$ php artisn migrate
```

* Use QueueStatsTrait and QueueStatsInterface on jobs models you want to collect statistics
``` php
...
use Crazybooot\QueueStats\Traits\QueueStatsTrait;
use Crazybooot\QueueStats\Interfaces\QueueStatsInterface;

class ExampleJob implementes QueueStatsInterface, ShouldQueue
{
    use QueueStatsTrait;
}
```
* As well you can use extended artisan command to generate job with QueueStatsTrait and QueueStatsInterface. Just add `StatJobMakeCommand` command to the `app/Console/Kernel.php`. `php artisan make:job` would be override by this command.
``` php
    protected $commands = [
        ...
        Crazybooot\QueueStats\Make\StatJobMakeCommand::class
    ];
```

## Using

Get statistics about jobs:

``` php
...
use Crazybooot\QueueStats\Models\Job;

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
use Crazybooot\QueueStats\Models\Job;
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
use Crazybooot\QueueStats\Traits\QueueStatsTrait;

class ExampleJob implementes ShouldQueue
{
    use QueueStatsTrait;
    
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

* PHP: 7.0+
* Laravel: 5.5
* Supported queue drivers: database, beanstalkd, redis

