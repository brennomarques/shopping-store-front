/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/strongly-recommended', '@vue/eslint-config-typescript'],
  overrides: [

  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // ignorePatterns: ['vite.config.ts'],
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
    'vue/no-multi-spaces':1,
  }
};
