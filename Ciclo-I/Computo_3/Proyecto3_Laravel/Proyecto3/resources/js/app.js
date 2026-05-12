import './bootstrap';
import { createApp } from 'vue';
import GamesComponent from './components/GamesComponent.vue';

const app = createApp({});
app.component('games-component', GamesComponent);
app.mount('#app');
