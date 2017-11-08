<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Traits;

use Crazybooot\QueueStats\Models\Job;

use function config, json_encode, uniqid, get_class;
use const true, null;

/**
 * Trait QueueStatsTrait
 *
 * @package Crazybooot\QueueStats\Traits
 */
trait QueueStatsTrait
{
    /**
     * @var string
     */
    protected $uuid;

    /**
     * Create queue stats job in database while pushing into queue
     */
    public function __clone()
    {
        if (config('queue-stats.enabled')) {
            Job::create([
                'uuid'       => $this->getUuid(),
                'class'      => get_class($this),
                'queued_at'  => microtime(true),
                'status'     => Job::STATUS_NOT_HANDLED,
                'connection' => $this->connection ?? null,
                'queue'      => $this->queue ?? null,
                'delay'      => $this->delay ?? null,
                'tries'      => $this->tries ?? null,
                'timeout'    => $this->timeout ?? null,
            ]);
        }
    }

    /**
     * @return string
     */
    public function getUuid()
    {
        if (null !== $this->uuid) {
            return $this->uuid;
        }

        $this->uuid = uniqid('queue_stats', true);

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