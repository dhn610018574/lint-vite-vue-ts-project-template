/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-08-15 16:54:14
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:46:57
 */
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { App } from 'vue'

const createModulesPinia = (app: App<Element>): void => {
  const pinia = createPinia()
  pinia.use(
    createPersistedState({
      storage: window.localStorage,
      beforeRestore: (context) => {
        // console.log('Before hydration...', context)
      },
      afterRestore: (context) => {
        // console.log('After hydration...', context)
      },
      serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse,
      },
    }),
  )
  app.use(pinia)
}
export default createModulesPinia
