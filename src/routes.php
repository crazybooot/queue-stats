<?php
declare(strict_types = 1);

Route::group([
    'as'        => 'queue-stats',
    'prefix'    => 'queue-stats',
    'namespace' => 'Crazybooot\QueueStats\Http\Controllers',
], function () {
    Route::get('/', [
        'as'   => '.index',
        'uses' => 'QueueStatsController@index',
    ]);

    Route::get('/list', [
        'as'   => '.list',
        'uses' => 'QueueStatsController@list',
    ]);

    Route::get('/chart', [
        'as'   => '.chart',
        'uses' => 'QueueStatsController@chart',
    ]);

    Route::get('/stats', [
        'as'   => '.stats',
        'uses' => 'QueueStatsController@stats',
    ]);

    Route::get('/config', [
        'as'   => '.config',
        'uses' => 'QueueStatsController@config',
    ]);
});