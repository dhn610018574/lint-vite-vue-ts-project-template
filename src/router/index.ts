/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-08-17 09:28:24
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:59:48
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: async () => await import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      auth: false,
      keepAlive: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
