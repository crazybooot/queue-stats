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
    protected $uuid;

    /**
     * @var string
     */
    public $type;

    /**
     * Create job stats job in database while pushing into queue
     */
    public function __clone()
    {
        Job::create([
            'uuid'      => $this->getUuid(),
            'class'     => get_class($this),
            'type'      => $this->type,
            'queued_at' => microtime(true),
            'status'    => Job::STATUS_NOT_HANDLED,
        ]);
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
     * @param array $result
     */
    protected function saveResult(array $result)
    {
        Job::where('uuid', $this->getUuid())->update([
            'result' => json_encode($result),
        ]);
    }
}