import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import {XtxPlugit} from '@/componenets/index.js'
import {LazyPlugit} from '@/directives/index'

import '@/styles/common.scss'

// import{getCategory} from '@/apis/textAPi'
// getCategory().then(res =>{
//   console.log(res);
// })

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(XtxPlugit)
app.mount('#app')
app.use(LazyPlugit)
