import { readFile } from 'fs'
import * as fsExtraDefault from 'fs-extra'
import { promisify } from 'util'
import path from 'path'

import * as babel from '@babel/core'
import recursive from 'recursive-readdir'

require('@babel/preset-env')
require('@babel/plugin-transform-runtime')
require('@babel/plugin-syntax-dynamic-import')
require('@babel/plugin-transform-arrow-functions')
require('@babel/plugin-transform-typescript')

const fsExtra = fsExtraDefault.default

const fileMatch = (/(.ts|.js|.mjs)$/)

const cwd = process.cwd()

const recursiveAsync = promisify(recursive)
const readFileAsync = promisify(readFile)
// const writeFileAsync = promisify(writeFile)

const DefaultBabelOptions = {
    presets: [
        [
            '@babel/preset-env',
            {
                // 'loose': true,
                // 'debug': true,
                'targets': {
                    'node': 'current'
                }
            }
        ],
        // '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        [
            '@babel/plugin-transform-arrow-functions',
            {
                spec: true,
            },
        ],
        '@babel/plugin-transform-typescript',
    ],
}

const transform = async (srcDir, destDir) => {
    const workingDir = path.resolve(srcDir)
    const destination = path.resolve(destDir)

    const files = await recursiveAsync(workingDir)

    // console.log(files)

    files.forEach(async (file) => {
        const pathArray = file.split(workingDir)[1].split(path.sep)

        const fileName = pathArray[pathArray.length-1]

        const match = fileMatch.exec(fileName)

        if (match) {
            const raw = await readFileAsync(file)

            pathArray.shift()

            const fileName = pathArray.join('/').replace(fileMatch, '.js')

            const babelOptions = {
                filename: `${destination}/${fileName}`,
                ...DefaultBabelOptions
            }

            // console.log(babelOptions)

            const content = await babel.transformAsync(raw, babelOptions)

            // console.log(content)
            // console.log(content.options.plugins)

            content.code = content.code.replace('index.mjs', 'index.js')

            await fsExtra.outputFile(
                content.options.filename,
                content.code,
            )
        }
    })
}

export {
    transform,
}

