var frutas = new Array("Manzanas", "Guineos", "Peras")
console.log(frutas[1])
frutas[3]="Melones"
var datos = new Array()
var numeros = [1,2,3,4,5,6,7]

//Metodos de los arreglos

//Push() agrega un elemento al final

frutas.push("Uvas")
console.log(frutas)

//Pop() elimina el elemento al final
numeros.pop()
console.log(numeros)

//Shift elimina el primer elemento
frutas.shift()
console.log(frutas)

//unshift agrega un elemento al inicio
frutas.unshift("Zapote")
console.log(frutas)

//splice reemplaza elementos existentes
//Indice, la cantidad y el valor
frutas.splice(2,1,"Sandias")
console.log(frutas)

//map, filter y reduce

var numeros2 = [1,2,3,4,5,6,7,8,9,10]
var doble = numeros2.map(n => n*2)
console.log(doble)

var precios = [10,50,80,120,30]
var filtrado = precios.filter(p => p<60)
console.log(filtrado)

var carrito = [10,20,30]
var total = carrito.reduce((acumulador,
        precioActual) => {
            return acumulador + precioActual
        },0

)
console.log(total)

// for
var verduras = ["lechuga", "zanahoria","cebolla","apio"]

for(let i=0;i<verduras.length;i++){
    console.log(`Indice ${i}: ${verduras[i]}`)
}

//for..of

let meses = ["Enero","Febrero","Marzo","Abril"]
for(let mes of meses){
    console.log(mes)
}

//for..in
let usuario = {nombre:"Juan Perez", edad:20,rol:"Usuario"}

for (let clave in usuario){
    console.log(`${clave}: ${usuario[clave]}`)
}

//foreach
let valores = [10,20,30,40]
valores.forEach((num,index)=>{
    console.log(`El numero en la posicion ${index} es ${num}`)
})


num1 = 20
num2 = 10

if(num1 > num2){
    console.log("El mayor es: "+num1)
} else {
    console.log("El mayor es: "+num2)
}

let dia = "Lunes"

switch(dia){
    case "Lunes":
        console.log("Es lunes!")
    case "Jueves":
        console.log("Es jueves!")
    case "Viernes":
        console.log("Es viernes!")
    case "Sabado":
        console.log("Es sabado!")
}

let opcion = 1

switch(opcion){
    case 1:
        console.log("Escogiste la primera opcion")
        break
    case 2:
        console.log("Escogiste la segunda opcion")
    case 3:
        console.log("Escogiste la tercera opcion")
    case 4:
        console.log("Escogiste la cuarta opcion")
}

//while

let energia = 3 

while(energia>0){
    console.log("Trabajando...Energia restante: "+energia)
    energia--
}
console.log("Estoy agotado!")

let intentos = 0

do {
    console.log("Intento numero: "+(intentos+1))
    intentos++
}
while(intentos<0)


//try catch

try{
    saludar()
}
catch(error){
    console.log("Ha ocurrido un error inesperado, intenta ams tarde!")
}
console.log("No hay errores en bazingse")

try{
    console.log("Voy a comprar una soda")
    throw "No hay dinero"
}catch(error){
    console.log("No me alcanza")
}finally{
    console.log("Me regreso a la casa")
}

//funciones

function saludar(nombre){
    return "Hola, "+nombre+ " como te encuentras?"
}

console.log(saludar("Juan Perez"))

function cocinar(platillo = "algo rico"){
    console.log("Estoy cocinando "+platillo)
}
cocinar(" una Pizza")


//funcion flecha
let sumar = (a,b) => a+b
    console.log(5,10)

//funcion anonima

let numeros3 =  [1,2,3,4]
let operacion = numeros3.map(function(n){
    return n*n
})
console.log(operacion(3))

let usuarios = [
    {nombre:"Ana",edad:25},
    {nombre:"Pedro",edad:20},
    {nombre:"Juan",edad:17}
]

let mayores = (lista) =>{
    return lista
    .filter(u => u.edad >= 18)
    .map(u => u.nombre)
}

let resultado = mayores(usuarios)
console.log(resultado)