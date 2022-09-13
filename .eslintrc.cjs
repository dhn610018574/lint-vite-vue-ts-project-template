/*
 * @Descripttion: 万物可代码
 * @version: 1.0.0
 * @Author: Hainan Dong
 * @Date: 2022-09-13 16:04:14
 * @LastEditors: Hainan Dong
 * @LastEditTime: 2022-09-13 16:57:10
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    "@typescript-eslint/explicit-function-return-type": "off",
    'no-for-in-array': 'off',
    '@typescript-eslint/no-floating-promises': 'off'
  }
}
