/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-09-13 15:58:03
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:38:37
 */
import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv): UserConfigExport => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env: Record<string, unknown> = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    base: '/',
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3678,
      proxy: {
        '/api': {
          changeOrigin: true,
          // 开发环境
          // target: "http://locdevhrklhyg.edocyun.com.cn:888",
          // 测试环境
          target: 'http://loctesthrklhyg.edocyun.com.cn:888',
          // 生产环境
          // target: "https://hospital.hruikang.com",
          // rewrite: (path) => path.replace(/\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
          additionalData: "@import './src/styles/variables.less';",
        },
      },
    },
  })
}
