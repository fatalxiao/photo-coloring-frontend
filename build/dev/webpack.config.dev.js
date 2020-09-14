const webpack = require('webpack'),
    {merge} = require('webpack-merge'),
    HtmlPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),

    baseWebpackConfig = require('../webpack.config.base.js'),

    env = process.env.NODE_ENV;

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    mode: 'development',

    devtool: '#cheap-module-eval-source-map',

    optimization: {
        noEmitOnErrors: true
    },

    watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
        poll: 1500
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),

        new webpack.HotModuleReplacementPlugin(),

        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            favicon: './src/assets/images/favicon.ico',
            inject: true,
            NODE_ENV: env
        }),

        new FriendlyErrorsPlugin()

    ]

});
