import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'


import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
//注册全局组件
import gloablComponent from './components/index';

const app = createApp(App)
//注册全局icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(gloablComponent);
app.use(ElementPlus)



app.mount('#app')
