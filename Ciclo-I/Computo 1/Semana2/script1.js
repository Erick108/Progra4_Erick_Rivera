//Tarifas del gobierno

const noche = 45;
const desc = 0.10;
let fecha = new Date();

console.log(fecha.toLocaleDateString('es-ES', {
    dateStyle: 'full'
}))

let firma = 'Hecho por Erick Josué Rivera Velásquez'
console.log(firma);

const elementos = ["Playa - 20%", "Bosque - 15%", "Ciudad - 15%"];
const html = elementos.map(item => `<li>${item}</li>`).join('');
document.getElementById("contenedor").innerHTML = `<ul>${html}</ul>`;

let inputtarifa = document.getElementById("tarifa");
let inputnombre = document.getElementById("nombre");
let inputcliente = document.getElementById("cliente");
let inputlocalidad = document.getElementById("localidad");
let inputlugar = document.getElementById("lugar");
let inputresultado = document.getElementById("resultado");
let inputdescuento = document.getElementById("pagoadelantado");
let btncalculo = document.getElementById("btnCalcular");

btncalculo.addEventListener("click", function(){
    let localidad = String(inputlocalidad.value);
    let tarifa = Number(inputtarifa.value);
    let descuento = String(inputdescuento.value);
    let nombre = String(inputnombre.value);

    if (descuento == "Si"){
        resultado = (noche + (noche*tarifa))
        aplicadesc = (resultado - (resultado*desc));
        inputresultado.innerHTML = aplicadesc;
        inputcliente.innerHTML = nombre;
        inputlugar.innerHTML = localidad;
        console.log("Pago calculado")
    } 
    else if(descuento == "No") {
        resultado = (noche + (noche*tarifa))
        inputresultado.innerHTML = resultado;
        inputcliente.innerHTML = nombre;
        inputlugar.innerHTML = localidad;
        console.log("Pago calculado")
    }
   
})

/*console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getHours())
console.log(fecha.getFullYear())
console.log(fecha.getTime())
console.log(fecha.getUTCDate())*/