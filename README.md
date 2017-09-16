Laravel package for queued job statistics collecting

## Install

1. Install composer package to your laravel project

``` bash
$ composer require crazybooot/jobs-stats
```

2. Publish migrations

``` bash
$ php artisan vendor:publish --tag=migrations
```

3. Run migrations

``` bash
$ php artisn migrate
```

4. Add service provider to config/app.php
``` php
    'providers' => [
        ...
        Crazybooot\JobsStats\Providers\JobsStatsServiceProvider::class,
    ],
```

5. Use JobsStatsTrait on jobs you want to collect statistics

``` php
...
use Crazybooot\JobsStats\Traits\JobsStatsTrait;

class ExampleJob implementes ShouldQueue
{
    use JobsStatsTrait;
}
```

## Using

Get statistics about job:

``` php
...
use Crazybooot\JobsStats\Models\Job;

...
// count successfully handled jobs
Job::where('status', Job::STATUS_FAILED)->count();

// count failed hobs
Job::where('status', Job::STATUS_SUCCESS)->count();

// count jobs pushed to queue but not handled
Job::where('status', Job::STATUS_NOT_HANDLED)->count();

// count job handled by one attempt
Job::where('status', Job::STATUS_SUCCESS)->where('attempts_count', 1)->count();

// count job handled more by one attempt
Job::where('status', Job::STATUS_SUCCESS)->where('attempts_count', '>' 1)->count(); 
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

// check if job was handled successfully
$isSuccess = Job::where('uuid', $uuid)->where('status', Job::STATUS_SUCCESS)->count() > 0;
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

The following versions of PHP are supported by this version.
