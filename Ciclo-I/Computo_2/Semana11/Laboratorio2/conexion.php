<?php

/*Programa: conexion.php*/

$host = "localhost";
$dbname = "";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->exec("SET NAMES utf8mb4");
    //echo "Conexión exitosa...";
} catch(PDOException $e) {
    die(json_encode(["error"=> "Error de conexión: ".$e->getMessage()]));
    echo"Error de conexión: " .$e->getMessage();
    echo "Error de conexión: Base de datos desconocida..." .$dbname;
}
?>