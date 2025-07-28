import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import './assets/css/animation.css' 
// import './assets/css/dboard.css'
// import './assets/css/style.css'
// import './assets/css/styles.css'
import { createPinia } from 'pinia'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
