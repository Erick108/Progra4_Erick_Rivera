<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\charmander;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/info', [charmander::class, 'index']);

Route::get('/juegos', [charmander::class, 'catalogo']);