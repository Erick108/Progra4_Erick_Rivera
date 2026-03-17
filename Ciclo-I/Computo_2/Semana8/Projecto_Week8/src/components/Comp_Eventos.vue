<script>
export default{
    data(){
        return{
            contador:0,
            nombre:""
        }
    },
    methods:{
        saludar(){
            alert("Soy una alerta! ALERTA! ALERTA!")
        },
        incrementar(){
            this.contador++
        },
        escribir(event){
            this.nombre = event.target.value
        }
    }
}
</script>

<template>
    <br>
    <button @click="saludar">Haz click</button>
    <button v-on:click="saludar">Haz click</button>
    <br>
    <p>{{ contador }}</p>
    <button @click="contador++">Incrementar</button>
    <br>
    <br>
    <input @input="escribir" type="text" placeholder="Escribe algo!">
    <p>Hola {{ nombre }}, como te encuentras?</p>

</template>

<style>
button{
    height: 50px;
    width: 150px;
}
</style>