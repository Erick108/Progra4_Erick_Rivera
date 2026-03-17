<script setup>
let mensaje ="Hola Mundo!"
let info = {
    nombre: "Erick Rivera",
    edad: 23,
    carrera: "Ingenieria en Sistemas y Redes informaticas"
}

let cantidad = ref(0);
let total = ref(0);

function calcular() {
    total.value = precio.value * cantidad.value;
}
</script>

<template>
    <p>Aqui esta tu mensaje: {{mensaje}}</p>
    <div>
        <h2>Nombre: {{info.nombre}}</h2>
        <h2>Edad: {{info.edad}}</h2>
        <h2>Carrera:{{info.carrera}}</h2>
    </div>

    <form></form>
</template>
<style scoped>
p{
    color:red; 
}

h2{
    font-family:'Courier New', Courier, monospace;
}

</style>