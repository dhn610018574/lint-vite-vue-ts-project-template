/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-09-09 12:16:41
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:57:48
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿尺寸375
      unitPrecision: 5,
      propList: ['*', '!font', '!font-size', '!line-height', '!letter-spacing'],
      replace: true,
      mediaQuery: true,
      minPixelValue: 3,
      exclude: /node_modules/i,
    },
  },
}
