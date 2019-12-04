module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    "@smcv/eslint-config/vue"
  ],

  rules: {
    "global-require": 0,
    "node/no-unpublished-require": 0,
    "security/detect-non-literal-require": 0,

    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/no-v-html": 1,
    "vue/no-parsing-error": ["error", {
      'x-invalid-end-tag': false
    }],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 2,
      "ignores": []
    }]
  },

  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
