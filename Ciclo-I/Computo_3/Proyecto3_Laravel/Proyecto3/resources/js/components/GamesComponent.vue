<template>
    <div>
        <h1>Registro de Juegos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Marca</th>
                    <th>Stock</th>
                    <th>Fecha de Lanzamiento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in games">
                    <td>{{ game.nombre }}</td>
                    <td>{{ game.genero }}</td>
                    <td>{{ game.marca }}</td>
                    <td>{{ game.stock }}</td>
                    <td>{{ game.lanzamiento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';

const prop = defineProps({
    listado:{
        type:Array,
        default:()=>[]
    }
})

const games = ref(prop.listado);
const lista = async() => {
    const res = await axios.get('/');
    games.value = res.data
}

</script>
// Crear un boton para agregar elementos a la base de datos
<style>

</style>