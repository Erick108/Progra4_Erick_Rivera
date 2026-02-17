// Obtener elementos del DOM
const inputProducto = document.getElementById('producto');
const inputCantidad = document.getElementById('cantidad');
const btnAgregar = document.getElementById('btnAgregar');
const listaProductos = document.getElementById('listaProductos');
const totalProductos = document.getElementById('totalProductos');
const totalItems = document.getElementById('totalItems');

// Array para almacenar los productos
let productos = [];

// Evento al hacer clic en el botón
btnAgregar.addEventListener('click', agregarProducto);

// Evento al presionar Enter en el campo de producto
inputProducto.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarProducto();
    }
});

// Evento al presionar Enter en el campo de cantidad
inputCantidad.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarProducto();
    }
});

// Función para agregar producto
function agregarProducto() {
    // Obtener valores
    const nombreProducto = inputProducto.value.trim();
    const cantidad = parseInt(inputCantidad.value);
    
    // Validaciones
    if (nombreProducto === '') {
        alert('⚠️ Por favor ingresa el nombre del producto');
        inputProducto.focus();
        return;
    }
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('⚠️ Por favor ingresa una cantidad válida (mayor a 0)');
        inputCantidad.focus();
        return;
    }
    
    // Crear objeto producto
    const producto = {
        id: Date.now(), // ID único basado en timestamp
        nombre: nombreProducto,
        cantidad: cantidad
    };
    
    // Agregar al array
    productos.push(producto);
    
    // Actualizar la vista
    actualizarLista();
    
    // Limpiar campos
    inputProducto.value = '';
    inputCantidad.value = '1';
    
    // Enfocar el campo de producto
    inputProducto.focus();
}

// Función para actualizar la lista de productos
function actualizarLista() {
    // Calcular totales
    const totalProductosCount = productos.length;
    const totalItemsCount = productos.reduce((sum, prod) => sum + prod.cantidad, 0);
    
    // Actualizar contadores
    totalProductos.textContent = totalProductosCount;
    totalItems.textContent = totalProductosCount === 1 ? 
        'producto en tu lista' : 'productos en tu lista';
    
    // Actualizar lista visual
    if (productos.length === 0) {
        listaProductos.innerHTML = `
            <div class="vacio">
                <p>Tu lista de compras está vacía</p>
                <p style="margin-top: 10px; font-size: 24px;">🛒</p>
            </div>
        `;
    } else {
        // Ordenar productos por nombre (opcional)
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
        
        // Generar HTML de la lista
        let html = '';
        productos.forEach(producto => {
            html += `
                <div class="producto" id="producto-${producto.id}">
                    <div class="producto-info">
                        <div class="producto-nombre">${producto.nombre}</div>
                        <div class="producto-cantidad">Cantidad: ${producto.cantidad}</div>
                    </div>
                    <button class="btn-eliminar" onclick="eliminarProducto(${producto.id})">
                        ❌ Eliminar
                    </button>
                </div>
            `;
        });
        
        listaProductos.innerHTML = html;
    }
}

// Función para eliminar producto
function eliminarProducto(id) {
    // Confirmar eliminación
    const productoEliminar = productos.find(p => p.id === id);
    const confirmar = confirm(`¿Estás segura de que quieres eliminar "${productoEliminar.nombre}" de tu lista?`);
    
    if (confirmar) {
        // Filtrar el producto a eliminar
        productos = productos.filter(producto => producto.id !== id);
        
        // Actualizar la vista
        actualizarLista();
        
        // Mensaje de confirmación
        console.log(`Producto eliminado. Quedan ${productos.length} productos.`);
    }
}

// Mensaje de bienvenida en consola
const fecha = new Date();
console.log(`📅 ${fecha.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}`);
console.log('🛒 Bienvenida a tu Lista de Compras Digital');
console.log('💡 Consejo: Presiona Enter para agregar productos más rápido');