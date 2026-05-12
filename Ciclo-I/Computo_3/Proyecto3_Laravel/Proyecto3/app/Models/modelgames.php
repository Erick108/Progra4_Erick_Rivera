<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class modelgames extends Model
{
    protected $table = 'table_games';
    protected $fillable = [
        'nombre',
        'genero',
        'marca',
        'stock',
        'lanzamiento'
    ];
}
