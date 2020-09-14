const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    // 开发环境
    'development': {
        port: 3010,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix && path.posix.join('/', 'static'),
        rootDirectory: 'dist/dist-dev',
        assetsDirectory: 'dist/dist-dev/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-dev/dist'),
        isHotReload: true
    },

    // 打包分析环境
    'analyzer': {
        index: path.resolve(__dirname, '../dist/dist-prod/dist/index.html'),
        rootDirectory: 'dist/dist-prod',
        assetsDirectory: 'dist/dist-prod/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-prod/dist')
    },

    // production 打包环境
    'production': {
        port: 3400,
        index: path.resolve(__dirname, '../dist/dist-prod/dist/index.html'),
        rootDirectory: 'dist/dist-prod',
        assetsDirectory: 'dist/dist-prod/dist',
        assetsRoot: path.resolve(__dirname, '../dist/dist-prod/dist')
    }

};
