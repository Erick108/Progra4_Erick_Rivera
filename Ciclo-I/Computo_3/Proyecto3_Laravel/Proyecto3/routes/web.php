<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GamesController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', [GamesController::class, 'index']);
