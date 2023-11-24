import { createApp } from 'vue'
import App from './App.vue'
import { Html2CanvasPlugin } from 'vue3-html2canvas'

createApp(App).use(Html2CanvasPlugin).mount('#app')
