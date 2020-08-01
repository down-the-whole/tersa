import yargs from 'yargs'

import { transform } from '../compiler/index.mjs'

const argv = yargs.options({
    srcDir: {
        demandOption: true,
        type: 'string'
    },
    destDir: {
        demandOption: true,
        type: 'string'
    }
})
    .argv

console.log(argv)


const start = async () => {
    await transform(
        argv.srcDir,
        argv.destDir,
    )
}

start()
