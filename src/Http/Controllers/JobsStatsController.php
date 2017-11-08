<?php
declare(strict_types = 1);

namespace Crazybooot\JobsStats\Http\Controllers;

use DB;
use Crazybooot\JobsStats\Models\Job;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * Class JobsStatsController
 *
 * @package Crazybooot\JobsStats\Http\Controllers
 */
class JobsStatsController extends Controller
{
    public function index()
    {
        return view('jobs-stats::app');
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function list(Request $request)
    {
        $column = 'jobs_stats_jobs.id';
        $order = 'asc';

        if ($request->has('sort')) {
            [$column, $order] = explode('|', $request->input('sort'));
        }

        $jobs = Job::join(
            'jobs_stats_job_attempts',
            'jobs_stats_jobs.id',
            '=',
            'jobs_stats_job_attempts.jobs_stats_job_id'
        )
            ->select(
                'jobs_stats_jobs.*',
                DB::raw('count(jobs_stats_job_attempts.id) as attempts_count'),
                DB::raw('ROUND(SUM(jobs_stats_job_attempts.handling_duration)) as handling_duration'),
                DB::raw('ROUND(SUM(jobs_stats_job_attempts.waiting_duration)) as waiting_duration'),
                DB::raw('ROUND(SUM(jobs_stats_job_attempts.queries_count)) as queries_count'),
                DB::raw('SUM(jobs_stats_job_attempts.queries_duration)/1000 as queries_duration')
            )
            ->groupBy('jobs_stats_jobs.id')
            ->when(
                $order === 'asc',
                function ($query) use ($column) {
                    $query->orderBy($column);
                },
                function ($query) use ($column) {
                    $query->orderByDesc($column);
                })
            ->orderBy('jobs_stats_jobs.id')
            ->with('attempts')
            ->paginate(20);

        return response()->json($jobs);
    }

    /**
     * @return JsonResponse
     */
    public function chart()
    {
        $waitingDuration = DB::table('jobs_stats_jobs')
            ->join(
                'jobs_stats_job_attempts',
                'jobs_stats_jobs.id',
                '=',
                'jobs_stats_job_attempts.jobs_stats_job_id'
            )
            ->select(
                'jobs_stats_jobs.id',
                DB::raw('SUM(jobs_stats_job_attempts.waiting_duration) as waiting_duration')
            )
            ->groupBy('jobs_stats_jobs.id')
            ->orderBy('jobs_stats_jobs.id')
            ->get()
            ->pluck('waiting_duration');

        $handlingDuration = DB::table('jobs_stats_jobs')
            ->join(
                'jobs_stats_job_attempts',
                'jobs_stats_jobs.id',
                '=',
                'jobs_stats_job_attempts.jobs_stats_job_id'
            )
            ->select(
                'jobs_stats_jobs.id',
                DB::raw('SUM(jobs_stats_job_attempts.handling_duration) as handling_duration')
            )
            ->groupBy('jobs_stats_jobs.id')
            ->orderBy('jobs_stats_jobs.id')
            ->get()
            ->pluck('handling_duration');

        $queriesDuration = DB::table('jobs_stats_jobs')
            ->join(
                'jobs_stats_job_attempts',
                'jobs_stats_jobs.id',
                '=',
                'jobs_stats_job_attempts.jobs_stats_job_id'
            )
            ->select(
                'jobs_stats_jobs.id',
                DB::raw('SUM(jobs_stats_job_attempts.queries_duration)/1000 as queries_duration')
            )
            ->groupBy('jobs_stats_jobs.id')
            ->orderBy('jobs_stats_jobs.id')
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
        $jobs = DB::table('jobs_stats_jobs')
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