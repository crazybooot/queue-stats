<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Interfaces;

/**
 * Interface QueueStatsInterface
 *
 * @package Crazybooot\QueueStats\Interfaces
 */
interface QueueStatsInterface
{
    public function __clone();

    public function getUuid();
}