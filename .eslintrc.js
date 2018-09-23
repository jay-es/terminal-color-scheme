const env = process.env.NODE_ENV === 'production' ? 'error' : 'off'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    'no-console': env,
    'no-debugger': env,
    '@vue/prettier': [env, require('./.prettierrc')]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
