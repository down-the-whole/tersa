const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const projectExternals = require('./externals')

const resolve = relativePath => path.resolve(__dirname, relativePath)

module.exports = {
    mode: 'development',
    target: 'node',
    node: {
        // global: true,
        __filename: false,
        __dirname: false,
    },
    entry: {
        app: ['@babel/plugin-transform-runtime', './src/cli/index.ts'],
        // '@babel/plugin-transform-runtime': '@babel/plugin-transform-runtime',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|.ts$/,
                loader: 'babel-loader',
                include: [
                    resolve('src')
                ],
            },
            // {
            //     test: /\.config\.js$/,
            //     exclude: /node_modules/,
            //     loader: "file-loader",
            //     options: {
            //         name: "./conf/[name]-[hash:base36:4].[ext]",
            //     },
            // },
            // {
            //     test: /\.node$/,
            //     loader: 'node-loader',
            // },
        ],
    },
    // plugins: [
    //     new webpack.ProvidePlugin(projectExternals)
    // ],
    externals: [nodeExternals()],
    // externals: [nodeExternals({
    //     allowlist: Object.keys(projectExternals),
    // })],
}
