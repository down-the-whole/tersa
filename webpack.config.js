const webpack = require('webpack')

var base = require('./webpack.base.conf')

// base.externals.push(
//     function (context, request, callback) {
//         if (request[0] == '.') {
//             callback()
//         } else {
//             callback(null, "require('" + request + "')")
//         }
//     }
// )

// base.plugins = [
//     new webpack.ContextReplacementPlugin(
//         /express\/lib/,
//         resolve('node_modules'),
//         {
//             'ejs': 'ejs'
//         }
//     )
// ]

module.exports = base
