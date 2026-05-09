<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class charmander extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /*
        Crear tres variables
        una que guarde su nombre, otra 
        que guarde su fecha de nacimiento
        y una tercera que sea un arreglo con 
        el nombre de sus comidas favoritas
        */

        $nombre = "Erick";
        $birthdate = "15/09/2002";
        $FaveFoods = ["Pupusas", "Chaomin", "Pizza", "Hamburguesa"];
        return view('info', compact('nombre', 'birthdate', 'FaveFoods'));
      
    }

    /**
     * Show the form for creating a new resource.
     */
    public function catalogo()
    {
        $cereal = [['id' =>1, 'nombre' => 'zucaritas', 'precio'=>'2.50'],
        ['id' =>2, 'nombre' => 'choco crispis', 'precio'=>'2.70']];

        //Crear otro arreglo asociativo con 5 elementos
        //y tres campos con el id incluido

        $games = [
        ['id'=>1, 'nombre'=>'Marvels Spiderman', 'marca'=>'Playstation', 'precio'=>'59.99', 'stock'=>'50'], 
        ['id'=>2, 'nombre'=>'Wolverine', 'marca'=>'Playstation', 'precio'=>'59.99', 'stock'=>'55'],
        ['id'=>3, 'nombre'=>'Hyrule Warriors: Age of Imprisonment', 'marca'=>'Nintendo', 'precio'=>'79.99', 'stock'=>'150'],
        ['id'=>4, 'nombre'=>'Hyrule Warriors: Age of Calamity', 'marca'=>'Nintendo', 'precio'=>'59.99', 'stock'=>'70'],
        ['id'=>5, 'nombre'=>'Donkey Kong Bananza', 'marca'=>'Nintendo', 'precio'=>'59.99', 'stock'=>'50']];
        return view('juegos', compact('games'));
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
