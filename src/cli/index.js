import path from 'path'
import yargs from 'yargs'
import chokidar from 'chokidar'

import { transform } from '../compiler/index.js'

const argv = yargs.options({
        cmd: {
            demandOption: true,
            type: 'string',
        },
        srcDir: {
            demandOption: true,
            type: 'string',
        },
        destDir: {
            demandOption: true,
            type: 'string',
        }
    })
    .argv

const src = path.resolve(argv.srcDir)
const dest = path.resolve(argv.destDir)

const build = async () => {
    console.log(`building ${src}`)

    await transform(
        src,
        dest,
    )
}

const watch = async () => {
    console.log(`watching ${src}`)

    const watcher = chokidar.watch(
        src,
        {
            ignored: /(^|[\/\\])\../,
            persistent: true,
        },
    )

    watcher.on(
        'change',
        async (path) => {
            await build()
        },
    )
}

if (argv.cmd === 'build') {
    build()
} else if (argv.cmd === 'watch') {
    watch()
}
