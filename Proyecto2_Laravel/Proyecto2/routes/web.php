<?php

use App\Http\Controllers\TemperaturaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/temperatura', 
[TemperaturaController::class, 'index'])->name('temperatura');