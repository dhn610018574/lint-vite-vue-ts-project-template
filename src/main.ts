/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-08-15 16:54:14
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:36:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import createModulesPinia from './store'
// 以下组件是以函数式的方式提供的，无法自动加载样式，需要手动引入
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import './styles/index.less'
import './permission'
import 'amfe-flexible'

const app = createApp(App)
app.use(router)
createModulesPinia(app)
app.mount('#app')
