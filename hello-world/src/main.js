import { createApp } from 'vue'
import App1 from './App.vue'
import My from './components/my.vue'
const app = createApp(App1)
app.component('my-component', My)
app.mount('#app')

