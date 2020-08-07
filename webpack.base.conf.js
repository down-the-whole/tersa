const { resolve } = require('path')
const webpack = require('webpack')

const babelConfig = require('./babel.config')

module.exports = {
    mode: 'development',
    target: 'node',
    stats: {
        warnings: false
    },
    node: {
        __filename: false,
        __dirname: false,
    },
    entry: {
        'wepack-babel': resolve('./src/cli/index.ts'),
        vite: resolve('./src/vite-test.ts'),
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    externals: {
        fsevents: "require('fsevents')"
    },
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
        ],
    },
    plugins: [
        // new webpack.IgnorePlugin({
        //     checkResource(resource) {
        //         switch(resource) {
        //         case /.config/
        //         }
        //         return false
        //     },
        // })
    ]
}
