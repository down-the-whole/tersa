const path = require('path')
const nodeExternals = require('webpack-node-externals')

const resolve = relativePath => path.resolve(__dirname, relativePath)

module.exports = {
    mode: 'development',
    target: 'node',
    // node: {
    //     __dirname: false,
    //     __filename: false,
    // },
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
    externals: [nodeExternals()],
}
