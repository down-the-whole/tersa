const webpack = require('webpack')
const path = require('path')

const projectExternals = require('./externals')
const base = require('./webpack.base.conf')

// base.externals.push(
//     function (context, request, callback) {
//         console.log(`context\n${context}`)
//         console.log(`request\n${request}`)
//         console.log(`callback\n${callback}`)

//         if (request[0] == '.') {
//             callback()
//         } else {
//             callback(null, "require('" + request + "')")
//         }
//     }
// )

// Object.keys('projectExternals').forEach((external) => {
//     base.plugins.push(
//         new webpack.ContextReplacementPlugin(
//             new RegExp(external),
//             path.resolve('node_modules'), {
//                 external,
//             },
//         )
//     )
// })

module.exports = base
