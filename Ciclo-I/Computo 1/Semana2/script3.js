let fecha = new Date();

console.log(fecha.toLocaleDateString('es-ES', {
    dateStyle: 'full'
}));

let firma = 'Hecho por Erick Josué Rivera Velásquez'
console.log(firma);

pago = 1.10;
comision = 0.20;

let inputnombre = document.getElementById("nombre");
let inputconductor = document.getElementById("conductor");
let inputkilometraje = document.getElementById("kilometraje");
let inputpropina = document.getElementById("propina");
let inputmensaje = document.getElementById("mensaje");
let inputmensaje1 = document.getElementById("mensaje1");
let inputmensaje2 = document.getElementById("mensaje2");
let inputmensaje3 = document.getElementById("mensaje3");
let btncalculo = document.getElementById("btncalcular");

btncalculo.addEventListener("click", function(){
    let nombre = String(inputnombre.value);
    let conductor = String(inputconductor.value);
    let kilometraje = Number(inputkilometraje.value);
    let propina = Number(inputpropina.value);

    pagoBase = (kilometraje * pago)/1000;
    pagoFinal = pagoBase - (pagoBase * comision);
    pagoTotal = pagoFinal + propina;

    mensaje = "El conductor, " + conductor + ", ha recorrido " + kilometraje + "km.";
    mensaje1 = "Por lo que se le pagara $" + pagoFinal.toFixed(2);
    mensaje2 = "Y " + nombre + " ha decidido dejar una propina de $" + propina.toFixed(2);
    mensaje3 = "Por lo cual la ganancia total de " + conductor + " es: $" + pagoTotal.toFixed(2);
    inputmensaje.innerHTML = mensaje;
    inputmensaje1.innerHTML = mensaje1;
    inputmensaje2.innerHTML = mensaje2;
    inputmensaje3.innerHTML = mensaje3;
})