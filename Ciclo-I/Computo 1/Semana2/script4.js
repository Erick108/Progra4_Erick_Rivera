let fecha = new Date();
console.log(fecha.toLocaleDateString('es-ES', {
    dateStyle: 'full'
}));
let firma = 'Hecho por Erick Josué Rivera Velásquez';
console.log(firma);

const sueldoxdia = 13.19;
const sueldoxhora = 0.55;

// Obtener elementos
const select = document.getElementById('miDropdown');
const contenedorHoras = document.getElementById('horas');
const inputHoras = document.getElementById('horasInput');
const inputEmpleado = document.getElementById('nombre');
const inputResultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btncalcular');

// Mostrar/Ocultar campo de horas cuando se selecciona "Menos de 1 año"
select.addEventListener('change', function() {
    if (this.value === '1') {
        contenedorHoras.classList.add('visible');
    } else {
        contenedorHoras.classList.remove('visible');
        inputHoras.value = ''; // Limpiar el valor
    }
});

// Calcular al hacer clic
btnCalcular.addEventListener('click', function() {
    const empleado = inputEmpleado.value.trim();
    const opcionSeleccionada = select.value;
    const horasTrabajadas = parseFloat(inputHoras.value);
    
    // Validaciones
    if (!empleado) {
        alert('Por favor ingresa el nombre del empleado');
        return;
    }
    
    if (!opcionSeleccionada) {
        alert('Por favor selecciona el tiempo de trabajo');
        return;
    }
    
    if (opcionSeleccionada === '1' && (isNaN(horasTrabajadas) || horasTrabajadas <= 0)) {
        alert('Por favor ingresa las horas trabajadas');
        return;
    }
    
    let resultado, mensaje;
    
    // Calcular según la opción seleccionada
    switch(opcionSeleccionada) {
        case '1': // Menos de 1 año
            resultado = horasTrabajadas * sueldoxhora;
            mensaje = `El sueldo de ${empleado} que ha trabajado menos de 1 año es: $${resultado.toFixed(2)}`;
            break;
            
        case '2': // De 1 a 3 años
            resultado = sueldoxdia * 15;
            mensaje = `El aguinaldo de ${empleado} que ha trabajado de 1 a 3 años es: $${resultado.toFixed(2)}`;
            break;
            
        case '3': // De 4 a 10 años
            resultado = sueldoxdia * 19;
            mensaje = `El aguinaldo de ${empleado} que ha trabajado de 4 a 10 años es: $${resultado.toFixed(2)}`;
            break;
            
        case '4': // Más de 10 años
            resultado = sueldoxdia * 21;
            mensaje = `El aguinaldo de ${empleado} que ha trabajado más de 10 años es: $${resultado.toFixed(2)}`;
            break;
            
        default:
            mensaje = 'Opción no válida';
    }
    
    // Mostrar resultado
    inputResultado.innerHTML = mensaje;
});