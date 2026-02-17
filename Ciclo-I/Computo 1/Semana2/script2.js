let fecha = new Date();

console.log(fecha.toLocaleDateString('es-ES', {
    dateStyle: 'full'
}));

let firma = 'Hecho por Erick Josué Rivera Velásquez'
console.log(firma);

limite = 1100;
interes = 0.45;

let inputgasto = document.getElementById("gasto");
let inputcliente = document.getElementById("cliente");
let inputcliente2 = document.getElementById("cliente2");
let inputnombre = document.getElementById("nombre");
let inputmontomin = document.getElementById("montomin");
let inputadvertencia = document.getElementById("advertencia");
let inputresultado = document.getElementById("resultado")
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function(){
    let gasto = Number(inputgasto.value);
    let nombre = String(inputnombre.value);

    if (gasto > limite){
        monto = gasto*0.175;
        resultado = "El monto mas el interes es: " + monto/interes;
        advertencia = "ha exedido el monto limite, por lo tanto, se le hara un incremento del 45% y su tarjeta sera declinada";
        inputcliente.innerHTML = nombre;
        inputcliente2.innerHTML = nombre;
        inputmontomin.innerHTML = monto;
        inputadvertencia.innerHTML = advertencia;
        inputresultado.innerHTML = resultado;
    }
    else if (gasto < limite){
        monto = gasto*0.175;
        inputcliente.innerHTML = nombre;
        inputmontomin.innerHTML = monto;
    }



})