import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import filenames from 'eslint-plugin-filenames';
import tailwind from 'eslint-plugin-tailwindcss';

const commonRules = {
  curly: ['error', 'all'],
  eqeqeq: ['error', 'smart'],
  'prefer-const': 'error',
  'prefer-template': 'error',
  'prefer-destructuring': ['error', { object: true, array: false }],
  'prefer-object-spread': 'error',
  'no-nested-ternary': 'error',
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-alert': 'error',
  'no-implicit-coercion': 'error',
  'no-useless-return': 'error',
  'no-useless-concat': 'error',
  'no-useless-computed-key': 'error',

  'import/order': [
    'error',
    {
      groups: [
        ['external', 'builtin'],
        'internal',
        ['parent', 'sibling', 'index'],
      ],
    },
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],

  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['*'],
      next: ['block-like', 'return', 'class'],
    },
    {
      blankLine: 'always',
      prev: ['block-like', 'return', 'class'],
      next: ['*'],
    },
    { blankLine: 'any', prev: ['default'], next: ['case'] },
  ],
  'object-curly-spacing': ['error', 'always'],

  'jsx-a11y/anchor-is-valid': 'warn',
  'unused-imports/no-unused-imports': 'error',
  'no-unused-vars': 'off',
  'unused-imports/no-unused-vars': [
    'error',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};

export default [
  { ignores: ['dist', 'node_modules'] },

  js.configs.recommended,
  ...tailwind.configs['flat/recommended'],

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
      import: pluginImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss: tailwind,
    },
    rules: {
      ...commonRules,
      'react/jsx-uses-react': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'warn',
      'react/self-closing-comp': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-array-index-key': 'error',
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'jsx-a11y': jsxA11y,
      'unused-imports': unusedImports,
      import: pluginImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss: tailwind,
    },
    rules: {
      ...commonRules,

      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'function', format: ['camelCase'] },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      'react/no-array-index-key': 'error',
    },
  },

  {
    files: ['**/{hooks,src/hooks}/**/*.{js,jsx,ts,tsx}'],
    plugins: { filenames },
    rules: {
      'filenames/match-regex': [
        'error',
        '^(index|use[A-Z][a-zA-Z0-9]*)$',
        true,
      ],
    },
  },

  {
    files: ['**/{components,src/components}/**/*.{js,jsx,ts,tsx}'],
    plugins: { filenames },
    rules: {
      'filenames/match-regex': ['error', '^(index|[A-Z][a-zA-Z0-9]*)$', true],
    },
  },
];
