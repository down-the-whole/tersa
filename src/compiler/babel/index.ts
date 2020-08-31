console.log('hello world')

import { readFile } from 'fs'
import { promisify } from 'util'
import path from 'path'

import * as babel from '@babel/core'
import recursive from 'recursive-readdir'
import * as fsExtraDefault from 'fs-extra'

import babelOptions, {
    BabelConfigType
} from '../../../configs/babel/babel.config'

const fsExtra = fsExtraDefault.default

const fileMatch = (/(.ts|.js|.mjs)$/)

const recursiveAsync = promisify(recursive)
const readFileAsync = promisify(readFile)

const defaultBabelOptions = babelOptions(BabelConfigType.Backend)

const transform = async (srcDir, destDir) => {
    const workingDir = path.resolve(srcDir)
    const destination = path.resolve(destDir)

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
                babelrc: false,
                configFile: false,
                ...defaultBabelOptions
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

