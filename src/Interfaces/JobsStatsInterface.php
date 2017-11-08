<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Interfaces;

/**
 * Interface JobsStatsInterface
 *
 * @package Crazybooot\JobsStats\Interfaces
 */
interface JobsStatsInterface
{
    public function __clone();

    public function getUuid();
}