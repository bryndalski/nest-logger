module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'nestjs',
    'jest',
    'unused-imports',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nestjs/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'variable',
          'function',
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
        ],
        format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        prefix: ['is', 'should', 'has', 'can'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        prefix: ['is', 'should', 'has', 'can'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: ['enum', 'class'],
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        prefix: ['I'],
        format: ['camelCase'],
      },
    ],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-exports': 'warn',
  },
};
