const idInput = document.getElementById('idProducto');
const cantInput = document.getElementById('cantidad');
const catSelect = document.getElementById('categoria');
const btnRegistrar = document.getElementById('btnRegistrar');
const tablaBody = document.querySelector('#tablaInventario tbody');

// Función para verificar las 3 condiciones
function validarFormulario() {
    const idValue = idInput.value;
    const cantValue = parseInt(cantInput.value);
    const catValue = catSelect.value;

    // Condición 1: ID tiene 8 caracteres y empieza con una letra
    const idValido = idValue.length === 8 && isNaN(idValue.charAt(0));

    // Condición 2: Cantidad mayor a 0
    const cantValida = cantValue > 0;

    // Condición 3: Se ha seleccionado una categoría (el valor no es vacío)
    const catValida = catValue !== "";

    // El botón se habilita SOLO SI las 3 son verdaderas
    btnRegistrar.disabled = !(idValido && cantValida && catValida);
}

// Escuchar cambios en los inputs
idInput.addEventListener('input', validarFormulario);
cantInput.addEventListener('input', validarFormulario);
catSelect.addEventListener('change', validarFormulario);

// Función para registrar en la tabla
btnRegistrar.addEventListener('click', () => {
    const nuevaFila = document.createElement('tr');
    
    nuevaFila.innerHTML = `
        <td>${idInput.value}</td>
        <td>${cantInput.value}</td>
        <td>${catSelect.value}</td>
    `;
    
    tablaBody.appendChild(nuevaFila);

    // Limpiar y volver a deshabilitar botón
    idInput.value = "";
    cantInput.value = "";
    catSelect.value = "";
    btnRegistrar.disabled = true;
});