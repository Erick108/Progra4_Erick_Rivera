<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Catalogo de juegos</h1>
    <table>
        <thread>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thread>
        <tbody>
             @foreach $games in $games
            <tr>
                <td>{{ $games['id'] }}</td>
                <td>{{ $games['nombre'] }}</td>
                <td>{{ $games['marca'] }}</td>
                <td>{{ $games['precio'] }}</td>
                <td>{{ $games['stock'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>