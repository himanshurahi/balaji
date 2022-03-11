import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueElementLoading from "vue-element-loading";

createApp(App).use(router).component("VueElementLoading", VueElementLoading).mount('#app')
