<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Traits;

use Carbon\Carbon;
use Crazybooot\JobsStats\Models\JobsStatsJob;

/**
 * Trait JobsStatsTrait
 *
 * @package Crazybooot\JobsStats\Traits
 */
trait JobsStatsTrait
{
    /**
     * @var string
     */
    public $uuid;

    /**
     * @var string
     */
    public $result;

    /**
     * Register job to track stats
     */
    protected function registerJob(): void
    {
        $this->uuid = uniqid('jobs_stats', true);

        JobsStatsJob::create([
            'uuid'       => $this->uuid,
            'class'      => get_class($this),
            'created_at' => Carbon::now(),
            'status'     => JobsStatsJob::STATUS_NOT_HANDLED,
        ]);
    }

    /**
     * @param array $result
     */
    protected function saveResult(array $result): void
    {
        $jobsStatsJob = JobsStatsJob::where('uuid', $this->uuid)->latest()->first();
        if (null !== $jobsStatsJob) {
            $jobsStatsJob->update([
                'result' => json_encode($result),
            ]);
        }
    }
}