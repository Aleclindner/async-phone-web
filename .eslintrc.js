module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app'],
  rules: {
    "semi": ["error", "never"],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}
