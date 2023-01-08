import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/index.scss"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcon from "./icons/index"
import "@/utils/permission"
//视频
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import axios from "axios";
import {message} from "./assets/js/resetMessage";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import VueParticles from 'vue-particles'


const app=createApp(App)
app.use(ElementPlus)
installIcon(app)
//服务器前缀设置
const baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:4000' : ''
//配置全局axios
axios.defaults.baseURL = baseURL //配置前缀url
axios.defaults.withCredentials = true //携带cookie
app.config.globalProperties.$axios = axios;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(vue3videoPlay)
app.use(VueParticles)
//重写message添加到vue实例
app.config.globalProperties.$message = message
app.use(store).use(router).mixin({
    data() {
        return {baseURL}
    },
}).mount('#app')
