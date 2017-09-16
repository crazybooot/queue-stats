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

Now you can get statistics about your job:

``` php
...
use Crazybooot\JobsStats\Models\Job;

...
Job::where('status', Job::STATUS_FAILED)->count(); // count successfully handled jobs

Job::where('status', Job::STATUS_SUCCESS)->count(); // count failed hobs

Job::where('status', Job::STATUS_NOT_HANDLED)->count(); // count jobs pushed to queue but not handled

Job::where('status', Job::STATUS_SUCCESS)->where('attempts_count', 1)->count(); // count job handled by one attempt

Job::where('status', Job::STATUS_SUCCESS)->where('attempts_count', '>' 1)->count(); // count job handled more by one attempt
```

You can get statistics about one job:
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

$isSuccess = Job::where('uuid', $uuid)->where('status', Job::STATUS_SUCCESS)->count() > 0; // check if job was handled successfully
```

## Requirements

The following versions of PHP are supported by this version.
