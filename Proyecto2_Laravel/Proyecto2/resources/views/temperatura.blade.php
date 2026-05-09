<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Convertidor de Temperatura</title>
    
    <!-- Estilos de Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="antialiased bg-gray-100 p-10">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Convertidor de Temperatura</h1>
        
        <!-- Aquí se montará tu componente Vue -->
        <div id="app"><convert-component></convert-component></div>
    </div>
</body>
</html>