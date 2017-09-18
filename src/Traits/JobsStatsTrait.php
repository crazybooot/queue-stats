<?php

namespace Crazybooot\JobsStats\Traits;

use Crazybooot\JobsStats\Models\Job;

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
     * @var string
     */
    public $type;

    /**
     *
     */
    public function __clone()
    {
        $this->registerJob();
    }

    /**
     * @return string
     */
    public function getUuid()
    {
        if (null !== $this->uuid) {
            return $this->uuid;
        }

        $this->uuid = uniqid('jobs_stats', true);

        return $this->uuid;
    }

    /**
     * Register job to track stats
     */
    protected function registerJob()
    {
        if (null === $this->uuid) {
            $this->uuid = uniqid('jobs_stats', true);
        }

        Job::create([
            'uuid'      => $this->uuid,
            'class'     => get_class($this),
            'type'      => $this->type,
            'queued_at' => microtime(true),
            'status'    => Job::STATUS_NOT_HANDLED,
        ]);
    }

    /**
     * @param array $result
     */
    protected function saveResult(array $result)
    {
        Job::where('uuid', $this->uuid)->update([
            'result' => json_encode($result),
        ]);
    }
}