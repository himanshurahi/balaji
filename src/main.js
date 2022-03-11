import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueElementLoading from "vue-element-loading";
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).use(router).component("VueElementLoading", VueElementLoading).use(VueSmoothScroll).mount('#app')
