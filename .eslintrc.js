module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    'arrow-body-style': 0,
    'camelcase': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'indent': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/first': 0,
    'linebreak-style': 0,
    'max-len': [2, {
      'code': 180
    }],
    'no-console': [1, {
      'allow': [
        'warn',
        'error'
      ]}
    ],
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-multiple-empty-lines': [2, {
      'max': 1,
      'maxBOF': 3,
      'maxEOF': 1
    }],
    'no-unsafe-optional-chaining': 0,
    'quotes': [2, 'single', {
      'allowTemplateLiterals': true,
    }],

    'vue/attributes-order': [2, {
      'order': [
        'OTHER_DIRECTIVES',
        'RENDER_MODIFIERS',
        'LIST_RENDERING',
        'CONDITIONALS',
        'TWO_WAY_BINDING',
        'DEFINITION',
        'CONTENT',
        ['OTHER_ATTR', 'EVENTS', 'UNIQUE'],
        'GLOBAL'
      ]
    }],
    'vue/attribute-hyphenation': [2, 'always', {
      'ignore': []
    }],
    'vue/html-indent': [2, 2, {
      'attribute': 0,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-closing-bracket-spacing': [2, {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never'
    }],
    'vue/html-closing-bracket-newline': [2, {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
    }],
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/order-in-components': [2, {
      'order': [
        'name',
        'components',
        'mixins',
        ['props', 'propsData'],
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
      ]
    }],
    'vue/script-indent': [2, 2, {
      'baseIndent': 1,
      'switchCase': 0,
      'ignores': []
    }],
    'vue/custom-event-name-casing': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
