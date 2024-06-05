import '@/assets/style.css';
import Aura from '@/presets/aura';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.mount('#app');
