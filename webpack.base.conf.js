const path = require('path')
const nodeExternals = require('webpack-node-externals')

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
        app: ['./src/cli/index.ts']
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
            {
                test: /\.config\.js$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "./conf/[name]-[hash:base36:4].[ext]",
                },
            }
        ],
    },
    // externals: [nodeExternals()],
    externals: [nodeExternals({
        allowlist: [
            '@babel/core',
            '@babel/preset-env',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-typescript',
            'chokidar',
            'yargs'
        ]
    })],
}
