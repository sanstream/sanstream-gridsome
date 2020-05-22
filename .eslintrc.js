module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint-config-standard',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: [
      'error',
      'never',
    ],
    indent: [
      'error',
      2,
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    quotes: [
      'error',
      'single',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'vue/html-indent': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/require-prop-types': 'error',
  },
}
