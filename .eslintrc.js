module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': [],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'settings': {
        'propWrapperFunctions': [
            'forbidExtraProps',
            {'property': 'freeze', 'object': 'Object'},
            {'property': 'myFavoriteWrapper'}
        ],
        'linkComponents': [
            'Hyperlink',
            {'name': 'Link', 'linkAttribute': 'to'}
        ]
    },
    'plugins': [],
    'rules': {
        'no-var': 'error',
        'init-declarations': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-extra-semi': 'error',
        'linebreak-style': ['error', 'unix'],
        'array-bracket-spacing': ['error', 'never'],
        'block-scoped-var': 'off',
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'comma-style': ['error', 'last'],
        'complexity': ['error', 20],
        'computed-property-spacing': ['error', 'never']
    }
};
