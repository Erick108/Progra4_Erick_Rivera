<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $arreglo = [1,2,3,4,5,6,7,8,];
        $arreglo2 = array();
        $frutas = ["Manzanas", "Guineos", "Peras", "Naranjas", "Zapotes"];
    
        $estudiante = [
            "nombre" => "Juanito",
            "edad" => 25,
            "materias" => ["Programación", "Ingles", "Redes"]
        ];
    ?>
</body>
<script>
    const frutas = <?php echo json_encode($frutas)?>;
    console.log(frutas[0]);

    const estudiante = <?php echo json_encode($estudiante)?>;
    console.log(estudiante.nombre);
</script>
</html>