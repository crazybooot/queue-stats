<?php
declare(strict_types = 1);

namespace Crazybooot\QueueStats\Http\Controllers;

use DB;
use Crazybooot\QueueStats\Models\Job;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * Class QueueStatsController
 *
 * @package Crazybooot\QueueStats\Http\Controllers
 */
class QueueStatsController extends Controller
{
    public function index()
    {
        return view('queue-stats::app');
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function list(Request $request)
    {
        $column = 'queue_stats_jobs.id';
        $order = 'asc';

        if ($request->filled('sort')) {
            [$column, $order] = explode('|', $request->input('sort'));
        }

        $jobs = Job::join(
            'queue_stats_job_attempts',
            'queue_stats_jobs.id',
            '=',
            'queue_stats_job_attempts.job_id'
        )
            ->select(
                'queue_stats_jobs.*',
                DB::raw('COUNT(queue_stats_job_attempts.id) as attempts_count'),
                DB::raw('ROUND(SUM(queue_stats_job_attempts.handling_duration)) as handling_duration'),
                DB::raw('ROUND(SUM(queue_stats_job_attempts.waiting_duration)) as waiting_duration'),
                DB::raw('ROUND(SUM(queue_stats_job_attempts.queries_count)) as queries_count'),
                DB::raw('SUM(queue_stats_job_attempts.queries_duration)/1000 as queries_duration')
            )
            ->groupBy('queue_stats_jobs.id')
            ->when(
                $order === 'asc',
                function ($query) use ($column) {
                    $query->orderBy($column);
                },
                function ($query) use ($column) {
                    $query->orderByDesc($column);
                })
            ->orderBy('queue_stats_jobs.id')
            ->with('attempts')
            ->paginate(20);

        return response()->json($jobs);
    }

    /**
     * @return JsonResponse
     */
    public function chart()
    {
        $waitingDuration = DB::table('queue_stats_jobs')
            ->join(
                'queue_stats_job_attempts',
                'queue_stats_jobs.id',
                '=',
                'queue_stats_job_attempts.job_id'
            )
            ->select(
                'queue_stats_jobs.id',
                DB::raw('SUM(queue_stats_job_attempts.waiting_duration) as waiting_duration')
            )
            ->groupBy('queue_stats_jobs.id')
            ->orderBy('queue_stats_jobs.id')
            ->get()
            ->pluck('waiting_duration');

        $handlingDuration = DB::table('queue_stats_jobs')
            ->join(
                'queue_stats_job_attempts',
                'queue_stats_jobs.id',
                '=',
                'queue_stats_job_attempts.job_id'
            )
            ->select(
                'queue_stats_jobs.id',
                DB::raw('SUM(queue_stats_job_attempts.handling_duration) as handling_duration')
            )
            ->groupBy('queue_stats_jobs.id')
            ->orderBy('queue_stats_jobs.id')
            ->get()
            ->pluck('handling_duration');

        $queriesDuration = DB::table('queue_stats_jobs')
            ->join(
                'queue_stats_job_attempts',
                'queue_stats_jobs.id',
                '=',
                'queue_stats_job_attempts.job_id'
            )
            ->select(
                'queue_stats_jobs.id',
                DB::raw('SUM(queue_stats_job_attempts.queries_duration)/1000 as queries_duration')
            )
            ->groupBy('queue_stats_jobs.id')
            ->orderBy('queue_stats_jobs.id')
            ->get()
            ->pluck('queries_duration');

        return response()->json([
            'waiting_duration'  => $waitingDuration,
            'handling_duration' => $handlingDuration,
            'queries_duration'  => $queriesDuration,
        ]);
    }

    /**
     *
     */
    public function workers(): JsonResponse
    {
        $workers = exec('ps -eo | grep "php artisan queue:work"');

        return response()->json($workers);
    }

    /**
     * @return JsonResponse
     */
    public function stats()
    {
        $jobs = DB::table('queue_stats_jobs')
            ->select(
                DB::raw('SUM(IF(status="'.Job::STATUS_FAILED.'", 1, 0)) as failed'),
                DB::raw('SUM(IF(status="'.Job::STATUS_SUCCESS.'", 1, 0)) as success'),
                DB::raw('SUM(IF(status="'.Job::STATUS_NOT_HANDLED.'", 1, 0)) as unhandled')
            )
            ->first();

        return response()->json($jobs);
    }

    /**
     * @return JsonResponse
     */
    public function config()
    {
        return response()->json(collect(config('queue.connections'))->map(function ($value, $key) {
            return [
                'name'        => $key,
                'driver'      => $value['driver'] ?? null,
                'connection'  => $value['connection'] ?? null,
                'queue'       => $value['queue'] ?? null,
                'retry_after' => $value['retry_after'] ?? null,
            ];
        })->values());
    }
}