module.exports = {
  'parserOptions': {
    'ecmaVersion': 2017
  },
  'env': {
    'es6': true,
    'commonjs': true,
    'node': true,
    
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}