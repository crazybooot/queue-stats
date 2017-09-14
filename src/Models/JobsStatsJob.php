<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class JobsStatsJob
 *
 * @package Crazybooot\JobsStats\Models
 */
class JobsStatsJob extends Model
{
    const STATUS_NOT_HANDLED = 'STATUS_NOT_HANDLED';
    const STATUS_SUCCESS = 'STATUS_SUCCESS';
    const STATUS_FAILED = 'STATUS_FAILED';

    protected $table = 'jobs_stats_jobs';

    protected $fillable = [
        'uuid',
        'class',
        'attempts',
        'connection',
        'status',
        'result',
        'handling_duration',
        'waiting_duration',
        'created_at',
    ];

    public $timestamps = false;

    protected $casts = [];

    /**
     * @return HasMany
     */
    public function tries(): HasMany
    {
        return $this->hasMany(JobsStatsJobTry::class, 'jobs_stats_job_id', 'id');
    }
}