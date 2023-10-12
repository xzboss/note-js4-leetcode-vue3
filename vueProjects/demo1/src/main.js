import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import myPlugin from './plugins/translate'
// import autoEnrollComponent from './plugins/autoEnrollComponent'
const app = createApp(App)
app.config.globalProperties.$test = (key) => {
// 获取 `options` 对象的深层属性
// 使用 `key` 作为索引
console.log('test')
}
app.use(myPlugin)
// app.use(autoEnrollComponent)// 开发失败
app.mount('#app')
