const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    'safari': '7',
                    'ie': '9'
                }
            }
        ]
    ],
    commonPlugins = [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-do-expressions',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-proposal-logical-assignment-operators',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-optional-chaining',
        ['@babel/plugin-proposal-pipeline-operator', {proposal: 'minimal'}],
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        '@babel/plugin-transform-runtime'
    ],
    packageConfig = {
        presets,
        plugins: commonPlugins
    };

module.exports = {
    'env': {

        // 开发环境
        'development': {
            presets,
            plugins: [
                ...commonPlugins,
                'transform-import-sync'
            ]
        },

        // 测试用例专用
        'test': {
            'presets': [
                '@babel/preset-env'
            ],
            'plugins': [
                ['babel-plugin-webpack-aliases', {'config': './build/webpack.config.base.js'}]
            ]
        },

        // 打包分析环境
        'analyzer': packageConfig,

        // production 打包环境
        'production': packageConfig

    }
};
