import './assets/styles/main.css'
import phosphor from '@phosphor-icons/vue'
import router from './router'
import i18n from './i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(phosphor);
app.use(i18n);
app.use(router);
app.mount('#app');