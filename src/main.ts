import '@/assets/style.css';
import Aura from '@/presets/aura';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import DialogService from 'primevue/dialogservice';
import DynamicDialog from 'primevue/dynamicdialog';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
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

/* PrimeVue 전역요소는 미리 설정 */
app.use(ConfirmationService);
app.use(DialogService);
app.use(ToastService);
app.component('ConfirmDialog', ConfirmDialog);
app.component('DynamicDialog', DynamicDialog);
app.component('Toast', Toast);
/* PrimeVue 전역요소는 미리 설정 */

app.mount('#app');
