<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TemperaturaController extends Controller
{
    public function index()
    {
        // Retornamos la vista blade que crearemos en el siguiente paso
        return view('temperatura');
    }
}