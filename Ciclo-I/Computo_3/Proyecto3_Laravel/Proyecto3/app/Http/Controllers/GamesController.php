<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\modelgames;

class GamesController extends Controller
{
    public function index(){
        $games = modelgames::all();
        return view('index', compact('games'));
    }
}
