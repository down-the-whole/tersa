process.env.NODE_PATH = `${process.env.NODE_PATH}:${__dirname}/..`
require("module").Module._initPaths()

import path from 'path'
import { exec, ChildProcess } from 'child_process'
import yargs from 'yargs'
import chokidar from 'chokidar'

import { transform } from '../compiler/index.ts'

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
        yargsOptions,
    )
    .command(
        'build',
        'build from srcDir',
        yargsOptions
    )
    .demandCommand()
    .help()
    .argv


const src = path.resolve(argv.srcDir)
const dest = path.resolve(argv.destDir)

let childProc: ChildProcess

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const start = () => {
    const process = exec(
        `node ${argv.entrypoint}`
    )

    process.stderr.on('data', console.log)
    process.stdin.on('data', console.log)
    process.stdout.on('data', console.log)

    return process
}

const build = async () => {
    console.log(`building ${src}`)

    await transform(
        src,
        dest,
    )

    childProc = start()
}

const watch = async () => {
    console.log(`watching & building ${src}`)

    await build()

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
            childProc = start()
        },
    )
}


if (argv._[0] === 'build') {
    build()
} else if (argv._[0] === 'watch') {
    watch()
}
