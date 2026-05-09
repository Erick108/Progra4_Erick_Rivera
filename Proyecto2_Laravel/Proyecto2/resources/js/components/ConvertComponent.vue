<template>
    <div class="p-4 border rounded-lg bg-gray-50">
        <!-- Sección de Entrada -->
        <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Ingresa el valor:</label>
            <div class="flex gap-4">
                <input 
                    v-model.number="valorEntrada" 
                    type="number" 
                    class="flex-1 p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                >
                <select v-model="unidadEntrada" class="p-2 border border-gray-300 rounded bg-white">
                    <option value="c">Celsius (°C)</option>
                    <option value="f">Fahrenheit (°F)</option>
                    <option value="k">Kelvin (K)</option>
                </select>
            </div>
        </div>

        <hr class="my-4">

        <!-- Sección de Resultados -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div :class="{'opacity-50': unidadEntrada === 'c'}" class="p-4 bg-blue-100 rounded">
                <h3 class="font-bold text-blue-800">Celsius</h3>
                <p class="text-2xl">{{ resultados.c.toFixed(2) }} °C</p>
            </div>
            
            <div :class="{'opacity-50': unidadEntrada === 'f'}" class="p-4 bg-red-100 rounded">
                <h3 class="font-bold text-red-800">Fahrenheit</h3>
                <p class="text-2xl">{{ resultados.f.toFixed(2) }} °F</p>
            </div>

            <div :class="{'opacity-50': unidadEntrada === 'k'}" class="p-4 bg-yellow-100 rounded md:col-span-2">
                <h3 class="font-bold text-yellow-800">Kelvin</h3>
                <p class="text-2xl">{{ resultados.k.toFixed(2) }} K</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Estado inicial
const valorEntrada = ref(0);
const unidadEntrada = ref('c'); // 'c', 'f', o 'k'

// Computed property que recalcula todo cuando cambia el valor o la unidad
const resultados = computed(() => {
    let c = 0, f = 0, k = 0;
    const val = Number(valorEntrada.value) || 0;

    if (unidadEntrada.value === 'c') {
        c = val;
        f = (val * 9/5) + 32;
        k = val + 273.15;
    } else if (unidadEntrada.value === 'f') {
        c = (val - 32) * 5/9;
        f = val;
        k = (val - 32) * 5/9 + 273.15;
    } else if (unidadEntrada.value === 'k') {
        c = val - 273.15;
        f = (val - 273.15) * 9/5 + 32;
        k = val;
    }

    return { c, f, k };
});
</script>

<style scoped>
/* Estilos adicionales si los necesitas */
</style>