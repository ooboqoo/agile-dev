module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}