import { readFile, writeFile } from 'fs'
import * as fsExtraDefault from 'fs-extra'
import { promisify } from 'util'
import path from 'path'

import babel from '@babel/core'
import recursive from 'recursive-readdir'
import DefaultBabelOptionsFunction from '../../babel.config.js'

const fsExtra = fsExtraDefault.default

const cwd = process.cwd()

const recursiveAsync = promisify(recursive)
const readFileAsync = promisify(readFile)
// const writeFileAsync = promisify(writeFile)

const cache = () => {}

const DefaultBabelOptions = DefaultBabelOptionsFunction({cache})

const transform = async (srcDir, destDir) => {
    const workingDir = path.join(cwd, srcDir)
    const destination = path.join(cwd, destDir)

    const files = await recursiveAsync(workingDir)

    files.forEach(async (file) => {
        const pathArray = file.split(workingDir)[1].split(path.sep)

        const fileName = pathArray[pathArray.length-1]

        const match = (/(.ts|.js)$/).exec(fileName)

        if (match) {
            const raw = await readFileAsync(file)

            pathArray.shift()

            const fileName = pathArray.join('/').replace(/(.ts|.js)$/, '.js')

            const babelOptions = {
                filename: `${destination}/${fileName}`,
                ...DefaultBabelOptions
            }

            const content = await babel.transformAsync(raw, babelOptions)

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

