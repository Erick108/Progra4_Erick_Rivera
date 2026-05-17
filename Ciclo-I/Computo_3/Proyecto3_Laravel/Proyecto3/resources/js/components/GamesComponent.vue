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
                <tr v-for="game in games" :key="game.id">
                    <td>{{ game.nombre }}</td>
                    <td>{{ game.genero }}</td>
                    <td>{{ game.marca }}</td>
                    <td>{{ game.stock }}</td>
                    <td>{{ game.lanzamiento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <button @click="showForm = !showForm">
            {{ showForm ? 'Cancelar' : 'Agregar Elemento' }}
        </button>
        <form v-if="showForm" @submit.prevent="submitForm">
            <input
                v-model="form.nombre"
                placeholder="Nombre"
                class="w-full border p-2 rounded"
                required
            />
            <input
                v-model="form.genero"
                placeholder="Genero"
                class="w-full border p-2 rounded"
                required
            />
            <input
                v-model="form.marca"
                placeholder="Marca"
                class="w-full border p-2 rounded"
                required
            />
            <input
                v-model="form.stock"
                placeholder="Stock"
                type="number"
                class="w-full border p-2 rounded"
                required
            />
            <input
                v-model="form.lanzamiento"
                placeholder="Lanzamiento"
                type="date"
                class="w-full border p-2 rounded"
                required
            />
            <button
                type="submit"
                :disabled="loading"
                class="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
            >
                {{ loading ? 'Guardando...' : 'Guardar' }}
            </button>
        </form>

        <div v-if="success" class="mt-3 text-green-600">{{ success }}</div>
        <ul v-if="errors.length" class="mt-3 text-red-600 list-disc pl-5">
            <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'; // ✅ Agregado reactive
import axios from 'axios';

const props = defineProps({
    listado: {
        type: Array,
        default: () => []
    }
})

const games = ref(props.listado);

// ✅ Cargar datos al montar el componente
onMounted(() => {
    lista();
});

const lista = async () => {
    try {
        const res = await axios.get('/api/games'); // ✅ Ajusta la ruta según tu backend
        games.value = res.data;
    } catch (error) {
        console.error('Error al cargar juegos:', error);
    }
}

const showForm = ref(false);
const loading = ref(false);
const success = ref('');
const errors = ref([]);

// ✅ Campos corregidos para que coincidan con el template
const form = reactive({ 
    nombre: '', 
    genero: '', 
    marca: '', 
    stock: '', 
    lanzamiento: '' 
});

const submitForm = async () => {
    loading.value = true;
    success.value = '';
    errors.value = [];

    try {
        await axios.post('/api/games', form); // ✅ Ajusta la ruta según tu backend
        success.value = '✅ Juego agregado correctamente';
        
        // Limpiar formulario
        form.nombre = '';
        form.genero = '';
        form.marca = '';
        form.stock = '';
        form.lanzamiento = '';
        showForm.value = false;
        
        // Recargar la lista
        lista();
    } catch (error) {
        if (error.response?.status === 422) {
            errors.value = Object.values(error.response.data.errors).flat();
        } else {
            errors.value = ['❌ Error inesperado al guardar.'];
        }
    } finally {
        loading.value = false;
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #4CAF50;
    color: white;
}

input {
    margin: 5px 0;
    display: block;
}
</style>