import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      jest: jest,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      ...jest.configs['flat/recommended'].rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: [
      'dist/**/*',
      'coverage/**/*',
      'storybook-static/**/*',
      'sb-manager/**/*',
    ],
  },
];
