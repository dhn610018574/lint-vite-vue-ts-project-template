/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-08-15 16:54:14
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:56:13
 */
import { defineStore } from 'pinia'
import router from '@/router'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 用户token
      token: '',
      // project_type 枚举值：项目类型 1-PLT 守恒之家（血液线）2-看见你的光（恒曲药物）3-子宫关爱Plus
      projectType: '1',
    }
  },
  actions: {
    login(): string {
      return ''
    },
    logout() {
      // 重置token,回跳登录页面
      router.replace('/login')
    },
  },
  // 持久化存储
  persist: {
    key: `consultant-user`,
  },
})

export default useUserStore
