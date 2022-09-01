module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
  ],
  rules: {
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'no-redeclare': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
  },
}
