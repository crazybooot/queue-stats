<?php
declare(strict_types = 1);

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateJobsStatsJobsTable
 */
class CreateJobsStatsJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs_stats_jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid')->index();
            $table->string('class');
            $table->double('handling_duration')->nullable();
            $table->double('waiting_duration')->nullable();
            $table->string('connection')->nullable();
            $table->string('queue')->nullable();
            $table->unsignedInteger('attempts')->nullable();
            $table->string('status')->nullable();
            $table->json('result')->nullable();
            $table->double('instantiated_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs_stats_jobs');
    }
}
