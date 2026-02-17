/*1. Realiza una función la cual deberá contener de mínimo lo siguiente:
a. Parámetros: regulares y por defecto
b. Uso de estructura de control y/o repetición
c. Poseer un valor de retorno

2. Además, dentro del mismo archivo donde se encuentra la función implementar un arreglo
y trabajar con él.

3. Realizar dos llamadas diferentes a la función con diferentes valores para probar su
funcionalidad; al menos uno de ellos debe ser con información por entrada de usuario.
*/

let fecha = new Date();
console.log(fecha.toLocaleDateString('es-ES', {
    dateStyle: 'full'
}));
let firma = 'Hecho por Erick Josué Rivera Velásquez';
console.log(firma);

// Arreglo global
let lista = [];

// Función para agregar elemento al hacer clic
function listadecompras() {
    // Obtener valor del input
    const input = document.getElementById('elementoInput');
    const valor = input.value.trim();

    // Validar
    if (!valor) {
        alert('Ingresa un valor');
        return;
    }

    // Agregar al arreglo
    lista.push(valor);

    // Limpiar input
    input.value = '';

    // Opcional: mostrar en consola
    console.log('Mi lista actual es:', lista);
}

/*Al momento de crear tu código; ¿Qué tipo de función usaste? Justifica tu elección.

--Use una funcion nombrada, para que al hacer click en el boton este reconociera la funcion

b. Si tu programa no pudiera utilizar la estructura de control o repetición que
escogiste; ¿Cuál otra hubieras elegido y de qué forma la aplicarías? Explica
brevemente.
--
c. En qué circunstancias utilizarías los otros tipos de funciones que no son la que
escribiste.
--Para hacer operaciones matematicas podria usar la funcion de flecha
*/