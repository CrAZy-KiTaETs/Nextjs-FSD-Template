import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:import/recommended'
  ),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
          moduleDirectory: ['node_modules', 'src'],
        },
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: './src/shared',
              from: [
                './src/app',
                './src/app-pages',
                './src/widgets',
                './src/features',
                './src/entities',
              ],
            },
            {
              target: './src/entities',
              from: ['./src/app', './src/app-pages', './src/widgets', './src/features'],
            },
            { target: './src/features', from: ['./src/app', './src/app-pages', './src/widgets'] },
            { target: './src/widgets', from: ['./src/app', './src/app-pages'] },
            { target: './src/app-pages', from: './src/app' },
          ],
        },
      ],
      'import/no-cycle': 'error',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    // Глобальные исключения
    ignores: [
      'node_modules/**',
      '.next/**',
      '.nuxt/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
    ],
  },
];

export default eslintConfig;
