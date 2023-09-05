module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'airbnb',
      'airbnb/hooks',
      'prettier',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'jest'],
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        },
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 0,
      'import/no-extraneous-dependencies': [
        2,
        {
          devDependencies: [
            '**/*{test,spec}.{ts,tsx}',
            '**/jest.{config,setup}.{js,ts}',
            '**/setupTests.{js,ts}',
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-cycle': 0,
      'import/extensions': [
        2,
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/require-default-props': 0,
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react/function-component-definition': [
        1,
        { namedComponents: 'arrow-function' },
      ],
      'linebreak-style': 0,
      'unicode-bom': 0,
      'no-use-before-define': 0,
      'no-unused-expressions': 0,
      'no-param-reassign': [2, { props: false }],
      '@typescript-eslint/no-unused-expressions': 0,
      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 2,
    },
  };
  