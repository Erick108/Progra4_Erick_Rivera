// Seleccionamos todos los elementos con la clase 'circulo'
const circulos = document.querySelectorAll('.circulo');

circulos.forEach(circuloSeleccionado => {
    
    // Evento cuando el mouse entra al círculo
    circuloSeleccionado.addEventListener('mouseenter', () => {
        circulos.forEach(c => {
            // Si NO es el círculo que estamos tocando, le ponemos la clase oscuro
            if (c !== circuloSeleccionado) {
                c.classList.add('oscuro');
            }
        });
    });

    // Evento cuando el mouse sale del círculo
    circuloSeleccionado.addEventListener('mouseleave', () => {
        // Quitamos la clase oscuro a todos para volver al estado inicial
        circulos.forEach(c => c.classList.remove('oscuro'));
    });
});