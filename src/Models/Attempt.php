<?php
namespace Crazybooot\JobsStats\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Attempt
 *
 * @package Crazybooot\JobsStats\Models
 */
class Attempt extends Model
{
    const STATUS_STARTED = 'STATUS_STARTED';
    const STATUS_FAILED = 'STATUS_FAILED';
    const STATUS_COMPLETED = 'STATUS_COMPLETED';

    protected $table = 'jobs_stats_job_attempts';

    protected $fillable = [
        'jobs_stats_job_id',
        'attempt_number',
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
    public function job()
    {
        return $this->belongsTo(Job::class, 'jobs_stats_job_id', 'id', 'jobs_stats_jobs');
    }
}