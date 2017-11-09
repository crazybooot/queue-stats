<?php
declare(strict_types = 1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateQueueStatsJobAttemptsTable
 */
class CreateQueueStatsJobAttemptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('queue_stats_job_attempts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('job_id');
            $table->unsignedInteger('attempt_number');
            $table->double('started_at')->nullable();
            $table->double('finished_at')->nullable();
            $table->double('handling_duration')->nullable();
            $table->double('waiting_duration')->nullable();
            $table->unsignedInteger('queries_count')->nullable();
            $table->double('queries_duration')->nullable();
            $table->string('status')->nullable();
            $table->text('exception_class')->nullable();
            $table->text('exception_message')->nullable();
            $table->timestamps();

            $table
                ->foreign('job_id')
                ->references('id')
                ->on('queue_stats_jobs')
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
        Schema::dropIfExists('queue_stats_job_attempts');
    }
}
