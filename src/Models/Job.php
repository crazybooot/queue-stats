<?php

namespace Crazybooot\JobsStats\Models;

use Illuminate\Database\Eloquent\Builder;
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
        'status',
        'result',
        'queued_at',
        'connection',
        'queue',
        'delay',
        'tries',
        'timeout',
    ];


    protected $casts = [
        'uuid'       => 'string',
        'class'      => 'string',
        'status'     => 'string',
        'result'     => 'array',
        'queued_at'  => 'float',
        'connection' => 'string',
        'queue'      => 'string',
        'delay'      => 'integer',
        'tries'      => 'integer',
        'timeout'    => 'integer',
    ];

    /**
     * @return HasMany
     */
    public function attempts()
    {
        return $this->hasMany(Attempt::class, 'jobs_stats_job_id', 'id');
    }

    /**
     * @return float
     */
    public function getHandlingDurationAttribute()
    {
        return (float) $this->attempts()->sum('handling_duration');
    }

    /**
     * @return float
     */
    public function getWaitingDurationAttribute()
    {
        return (float) $this->attempts()->sum('waiting_duration');
    }

    /**
     * @return int
     */
    public function getAttemptsCountAttribute()
    {
        return $this->attempts()->count();
    }

    /**
     * @param Builder $builder
     *
     * @return Builder
     */
    public function scopeSuccess(Builder $builder)
    {
        return $builder->where('status', self::STATUS_SUCCESS);
    }

    /**
     * @param Builder $builder
     *
     * @return Builder
     */
    public function scopeFailed(Builder $builder)
    {
        return $builder->where('status', self::STATUS_FAILED);
    }

    /**
     * @param Builder $builder
     *
     * @return Builder
     */
    public function scopeNotHandled(Builder $builder)
    {
        return $builder->where('status', self::STATUS_NOT_HANDLED);
    }

    /**
     * @param Builder $builder
     * @param int $number
     *
     * @return Builder
     */
    public function scopeAttemptsCount(Builder $builder, $number)
    {
        return $builder->has('attempts', '=', $number);
    }

    /**
     * @param Builder $builder
     * @param string $class
     *
     * @return Builder
     */
    public function scopeClass(Builder $builder, $class)
    {
        return $builder->where('class', $class);
    }

    /**
     * @param Builder $builder
     *
     * @return Builder
     */
    public function scopeWithResult(Builder $builder)
    {
        return $builder->whereNotNull('result');
    }

    /**
     * @param Builder $builder
     *
     * @return Builder
     */
    public function scopeWithoutResult(Builder $builder)
    {
        return $builder->whereNull('result');
    }

    /**
     * @param Builder $builder
     * @param string $queue
     *
     * @return Builder
     */
    public function scopeQueue(Builder $builder, $queue)
    {
        return $builder->where('queue', $queue);
    }

    /**
     * @param Builder $builder
     * @param string $connection
     *
     * @return Builder
     */
    public function scopeConnection(Builder $builder, $connection)
    {
        return $builder->where('connection', $connection);
    }
}