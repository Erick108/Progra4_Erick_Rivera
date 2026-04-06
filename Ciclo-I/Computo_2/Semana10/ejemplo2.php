<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Datos de los estudiantes</h1>
    <div>
        Estudiantes inscritos:
    </div>
    <script>
        .fetch('datosestudiantes.php')
        .then(res => res.json())
        .then(estudiantes => {
            const listado = document.getElementId("listado");
            let htmlInner = "";

            estudiantes.foreach(estudiante =>{
                htmlInner +=
                <h3>Nombre: ${estudiante.nombre}</h3>
                <h3>Edad: ${estudiante.edad}</h3>
                <h3>Materias: ${estudiante.materias.join(',')}</h3>
            });
            listadi.innerHtml = htmlInner;
        })
        .catch(err =>
            console.console.error(("Error";, err));
        );
    </script>
</body>
</html>