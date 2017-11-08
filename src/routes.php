<?php
declare(strict_types = 1);

Route::group([
    'as'        => 'jobs-stats',
    'prefix'    => 'jobs-stats',
    'namespace' => 'Crazybooot\JobsStats\Http\Controllers',
], function () {
    Route::get('/', [
        'as'   => '.index',
        'uses' => 'JobsStatsController@index',
    ]);

    Route::get('/list', [
        'as'   => '.list',
        'uses' => 'JobsStatsController@list',
    ]);

    Route::get('/chart', [
        'as'   => '.chart',
        'uses' => 'JobsStatsController@chart',
    ]);

    Route::get('/stats', [
        'as'   => '.stats',
        'uses' => 'JobsStatsController@stats',
    ]);

    Route::get('/config', [
        'as'   => '.config',
        'uses' => 'JobsStatsController@config',
    ]);
});