import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import '../src/style.css';

createApp(App).use(router).mount('#app')
