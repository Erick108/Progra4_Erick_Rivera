<script>
    export default{
        data(){
            return{
                mensaje: "Hola Mundo con VUE",
                descripcion:"<h1>Este texto esta cargado desde VUE</h1>",
                mostrar:true,
                nombre:"Pepe El Gallo",
                edad:19,
                imagen: "https://miro.medium.com/v2/resize:fit:1024/1*4VoADW3ni7p5aMx6AbZt4Q.png",
            }
        }
    } 
</script>

<template>
    <h1 v-text="mensaje"></h1>
    <div v-html="descripcion"></div>
    <p v-if="edad >= 18">Eres mayor de edad</p>
    <p v-else-if="edad < 18">Eres menor de edad</p>
    <p v-show="mostrar">Este texto puede estar oculto</p>

    <img :src="imagen" alt="">

</template>

<style>

</style>