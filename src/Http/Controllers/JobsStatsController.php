<?php

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
        return view('jobs-stats:app');
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function list(Request $request)
    {
        $column = 'jobs_stats_jobs.';
        $order = 'asc';

        if ($request->has('sort')) {
            $column .= explode('|', $request->input('sort'))[0];
            $order .= explode('|', $request->input('sort'))[1];
        } else {
            $column .= 'id';
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
                DB::raw('SUM(jobs_stats_job_attempts.handling_duration) as handling_duration'),
                DB::raw('SUM(jobs_stats_job_attempts.waiting_duration) as waiting_duration'))
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
            ->get();

        return response()->json($jobs);
    }
}