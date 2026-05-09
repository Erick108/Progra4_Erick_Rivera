import './bootstrap';
import { createApp } from 'vue';
import SaludoComponent from './components/SaludoComponent.vue';
import ConvertComponent from './components/ConvertComponent.vue';

createApp(SaludoComponent).mount("#app");
createApp(ConvertComponent).mount("#app");

/*Crear un component que realice 
conversione de temperatura entre Celsius, Farenheit y Kelvin
Utilizando un controlador para manejar
la view de blade */


