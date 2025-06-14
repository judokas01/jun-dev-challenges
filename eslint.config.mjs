import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  { ignores: ['**/dist/*', '**/*.js', '**/*.mjs', 'tsconfig.json', '.volumes', '**/tmp/*'] },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        // projectService: true, // this slows down a lot
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE'] },
        // Class members are camelCase
        // We cannot apply this rule generally
        // {
        //   selector: ['memberLike'],
        //   format: ['camelCase'],
        // },
        // Class names are PascalCase
        { selector: 'class', format: ['PascalCase'] },
        // Enums
        { selector: 'enum', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['PascalCase'] },
        // boolean variables are prefixed with an allowed verb
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];

