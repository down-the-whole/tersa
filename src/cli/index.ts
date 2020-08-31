import path from 'path'
import yargs from 'yargs'
import chokidar from 'chokidar'

import { transform } from '../compiler/babel'
import startEntry from '../../executors'

const yargsOptions = {
    srcDir: {
        demandOption: true,
        type: 'string',
    },
    destDir: {
        demandOption: true,
        type: 'string',
    },
    entrypoint: {
        demandOption: true,
        type: 'string,'
    }
}

const argv = yargs
    .command(
        'watch',
        'build and watch for changes',
        //@ts-ignore
        yargsOptions,
    )
    .command(
        'build',
        'build from srcDir',
        //@ts-ignore
        yargsOptions
    )
    .demandCommand()
    .help()
    .argv


const src = path.resolve(argv.srcDir as string)
const dest = path.resolve(argv.destDir as string)

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const build = async () => {
    console.log(`building ${src}`)

    await transform(
        src,
        dest,
    )
}

const watch = async () => {
    console.log(`watching & building ${src}`)

    await build()

    let childProc = startEntry(argv.entrypoint as string)

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
            childProc.kill('SIGINT')
            await sleep(50)
            childProc = startEntry(argv.entrypoint as string)
        },
    )
}


if (argv._[0] === 'build') {
    build()
} else if (argv._[0] === 'watch') {
    watch()
}
