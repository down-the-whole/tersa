import { readFile, writeFile } from 'fs'
import * as fsExtraDefault from 'fs-extra'
import { promisify } from 'util'
import path from 'path'

import * as babel from '@babel/core'
import recursive from 'recursive-readdir'

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
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        [
            "@babel/plugin-transform-arrow-functions",
            {
                "spec": true
            },
        ],

    ],
}

const transform = async (srcDir, destDir) => {
    const workingDir = path.join(cwd, srcDir)
    const destination = path.join(cwd, destDir)

    const files = await recursiveAsync(workingDir)

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

            const content = await babel.transformAsync(raw, babelOptions)

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

