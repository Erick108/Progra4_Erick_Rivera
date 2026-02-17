// Datos del programa
const PRECIO_KW = 0.20; // $0.20 por kilowatt
const MORA = 0.20;      // 20% de mora

// Elementos del DOM
const inputKw = document.getElementById('kilowatts');
const selectFecha = document.getElementById('fechaPago');
const btnCalcular = document.getElementById('btnCalcular');
const resultadoDiv = document.getElementById('resultado');
const detalleKw = document.getElementById('detalleKw');
const detalleBase = document.getElementById('detalleBase');
const detalleMora = document.getElementById('detalleMora');
const detalleTotal = document.getElementById('detalleTotal');
const montoTotal = document.getElementById('montoTotal');
const mensajeFinal = document.getElementById('mensajeFinal');

// Evento al hacer clic
btnCalcular.addEventListener('click', calcularRecibo);

// Evento al presionar Enter
inputKw.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularRecibo();
    }
});

function calcularRecibo() {
    // Obtener valores
    const kw = parseFloat(inputKw.value);
    const pagaFueraFecha = selectFecha.value === 'no';
    
    // Validaciones
    if (isNaN(kw) || kw <= 0) {
        alert('⚠️ Por favor ingresa una cantidad válida de kilowatts (mayor a 0)');
        inputKw.focus();
        return;
    }
    
    // Cálculos
    const costoBase = kw * PRECIO_KW;
    const montoMora = pagaFueraFecha ? costoBase * MORA : 0;
    const totalPagar = costoBase + montoMora;
    
    // Mostrar resultados
    detalleKw.textContent = `⚡ Kilowatts consumidos: ${kw.toFixed(2)} kW`;
    detalleBase.textContent = `💰 Costo base (${PRECIO_KW.toFixed(2)} $/kW): $${costoBase.toFixed(2)}`;
    
    if (pagaFueraFecha) {
        detalleMora.textContent = `⏰ Mora por pago fuera de fecha (20%): +$${montoMora.toFixed(2)}`;
        detalleMora.style.display = 'block';
    } else {
        detalleMora.textContent = `✅ ¡Excelente! Pagas dentro de la fecha (sin mora)`;
        detalleMora.style.display = 'block';
    }
    
    detalleTotal.textContent = `📄 Total a pagar: $${totalPagar.toFixed(2)}`;
    montoTotal.textContent = `$${totalPagar.toFixed(2)}`;
    
    // Mensaje personalizado para María Julia
    if (pagaFueraFecha) {
        mensajeFinal.innerHTML = `⚠️ <strong>Atención María Julia:</strong> Por favor, trata de pagar dentro de la fecha límite para evitar la mora del 20%. ¡Así ahorras dinero!`;
        mensajeFinal.style.color = '#f1c40f';
    } else {
        mensajeFinal.innerHTML = `✅ <strong>¡Perfecto María Julia!</strong> Estás pagando lo correcto. Nadie te está estafando. ¡Sigue así!`;
        mensajeFinal.style.color = '#2ecc71';
    }
    
    // Mostrar resultado
    resultadoDiv.classList.add('visible');
    
    // Scroll suave al resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Mensaje de bienvenida en consola (como firma)
const fecha = new Date();
console.log(`📅 Fecha: ${fecha.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}`);
console.log('✨ Hecho con cariño para María Julia Antonia Hernández Gutiérrez de todos Los Ángeles y Santos');
console.log('💡 Recuerda: Conocer tus derechos como consumidora te protege de estafas');