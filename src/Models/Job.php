<?php
namespace Crazybooot\JobsStats\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Job
 *
 * @package Crazybooot\JobsStats\Models
 */
class Job extends Model
{
    const STATUS_NOT_HANDLED = 'STATUS_NOT_HANDLED';
    const STATUS_SUCCESS = 'STATUS_SUCCESS';
    const STATUS_FAILED = 'STATUS_FAILED';

    protected $table = 'jobs_stats_jobs';

    protected $fillable = [
        'uuid',
        'class',
        'attempts_count',
        'connection',
        'queue',
        'status',
        'result',
        'handling_duration',
        'waiting_duration',
        'queued_at',
    ];


    protected $casts = [];

    /**
     * @return HasMany
     */
    public function attempts()
    {
        return $this->hasMany(Attempt::class, 'jobs_stats_job_id', 'id');
    }
}