const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const babelConfig = require('./babel.config')
const projectExternals = require('./externals')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const resolve = relativePath => path.resolve(__dirname, relativePath)

module.exports = {
    // cache: true,
    mode: 'development',
    target: 'node',
    node: {
        // global: true,
        __filename: false,
        __dirname: false,
    },
    entry: {
        app: ['./src/cli/index.ts'],
        // '@babel/plugin-transform-runtime': '@babel/plugin-transform-runtime',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // resolve: {
    //     extensions: ['.js', '.ts']
    // },
    module: {
        rules: [
            {
                test: /\.js|.ts$/,
                loader: 'babel-loader',
                include: [
                    resolve('src')
                ],
                options: {
                    ...babelConfig(),
                    babelrc: false,
                }
            },
            // {
            //     test: /\.config\.js$/,
            //     exclude: /node_modules/,
            //     loader: "file-loader",
            //     options: {
            //         // name: "./conf/[name]-[hash:base36:4].[ext]",
            //     },
            // },
            // {
            //     test: /\.node$/,
            //     loader: 'node-loader',
            // },
        ],
    },
    externals: {
        fsevents: "require('fsevents')"
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
    ],
    stats: {
        warnings: false
    },
    // plugins: [
    //     new webpack.ProvidePlugin(projectExternals)
    // ],
    // externals: [nodeExternals()],
    // externals: [nodeExternals({
    //     allowlist: Object.keys(projectExternals),
    // })],
    // resolveLoader: {
    //     modules: [
    //         __dirname + '/node_modules'
    //     ]
    // },
}
