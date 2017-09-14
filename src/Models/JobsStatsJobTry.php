<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class JobsStatsJobTry
 *
 * @package Crazybooot\JobsStats\Models
 */
class JobsStatsJobTry extends Model
{
    const STATUS_STARTED = 'STATUS_STARTED';
    const STATUS_FAILED = 'STATUS_FAILED';
    const STATUS_COMPLETED = 'STATUS_COMPLETED';

    protected $table = 'jobs_stats_job_tries';

    protected $fillable = [
        'jobs_stats_job_id',
        'attempt',
        'started_at',
        'finished_at',
        'handling_duration',
        'waiting_duration',
        'status',
        'exception_message',
        'exception_call_stack'
    ];

    protected $casts = [];

    /**
     * @return BelongsTo
     */
    public function job(): BelongsTo
    {
        return $this->belongsTo(JobsStatsJob::class, 'jobs_stats_job_id', 'id', 'jobs_stats_jobs');
    }
}