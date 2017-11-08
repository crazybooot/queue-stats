<?php
declare(strict_types = 1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateJobsStatsJobAttemptsTable
 */
class CreateJobsStatsJobAttemptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs_stats_job_attempts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('jobs_stats_job_id');
            $table->unsignedInteger('attempt_number');
            $table->double('started_at')->nullable();
            $table->double('finished_at')->nullable();
            $table->double('handling_duration')->nullable();
            $table->double('waiting_duration')->nullable();
            $table->unsignedInteger('queries_count')->nullable();
            $table->double('queries_duration')->nullable();
            $table->string('status')->nullable();
            $table->text('exception_message')->nullable();
            $table->json('exception_call_stack')->nullable();
            $table->timestamps();

            $table
                ->foreign('jobs_stats_job_id')
                ->references('id')
                ->on('jobs_stats_jobs')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs_stats_job_tries');
    }
}
