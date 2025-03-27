module.exports = {
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
        'eslint-recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:playwright/playwright-test'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier'
    ]
  };
