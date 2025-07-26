import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import './assets/css/animation.css' 
// import './assets/css/dboard.css'
// import './assets/css/style.css'
// import './assets/css/styles.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
