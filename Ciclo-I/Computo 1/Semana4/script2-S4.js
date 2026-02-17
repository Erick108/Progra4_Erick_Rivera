// Seleccionamos los elementos necesarios
const imagenGrande = document.getElementById('visor-principal');
const todasLasMiniaturas = document.querySelectorAll('.miniatura');

// Recorremos cada miniatura para asignarle el evento de clic
todasLasMiniaturas.forEach(foto => {
    foto.addEventListener('click', function() {
        // Al hacer clic, la imagen principal cambia su fuente (src) por la de la miniatura
        imagenGrande.src = this.src;
        
        // Opcional: imprimir en consola para verificar
        console.log("Cambiando a: " + this.src);
    });
});