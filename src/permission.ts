/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-09-13 16:35:35
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:40:35
 */
/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-08-16 11:43:54
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-09 14:32:12
 */

import router from '@/router'

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title || '数瑞助手'
  // // 获取token
  // const token = 'lll'
  // if (token) {
  //   // has token
  //   if (to.path === '/login') {
  //     next({ path: '/home' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   // no token
  //   if (to.meta.auth === false) {
  //     next()
  //   } else {
  //     next({
  //       path: '/login',
  //       replace: true,
  //       // query: {
  //       // 	//把目标界面的页面路径作为参数传到登录界面，方便登录后跳转目标界面
  //       // 	redirect: to.fullPath,
  //       // },
  //     })
  //   }
  // }
  next()
})
