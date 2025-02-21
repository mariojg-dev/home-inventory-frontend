import './assets/styles/main.css'
import '@phosphor-icons/vue'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

app.use(router);

app.mount('#app');