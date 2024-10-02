const nx = require('@nx/eslint-plugin');

module.exports = [
  // Основные конфигурации
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // Игнорируемые файлы
  {
    ignores: ['**/dist'],
  },

  // Конфигурация для TypeScript файлов
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@tinkoff/eslint-config/app': require('@tinkoff/eslint-config/app'),
      '@tinkoff/eslint-config-angular': require('@tinkoff/eslint-config-angular'),
    },
    rules: {},
  },

  // Angular специфическая конфигурация
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],

  // Правила для .ts файлов
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },

  // Конфигурация для HTML файлов
  {
    files: ['**/*.html'],
    parser: "@angular-eslint/template-parser",
    plugins: {
      '@tinkoff/eslint-config-angular/html-eslint': require('@tinkoff/eslint-config-angular/html-eslint'),
    },
    rules: {},
  },
];
