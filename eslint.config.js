import eslint from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: true,
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    rules: {
      // Typescript
      '@typescript-eslint/no-unsafe-argument': 'off',

      // Vue
      'vue/multi-word-component-names': 'off',
    },
  },
);
