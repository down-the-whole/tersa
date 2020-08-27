import { build } from 'vite'
import chokidar from 'chokidar'

import viteConfig from './vite.config'
import router from '../../routes'

export default async ({
    root, // project root directory, absolute path
    app, // Koa app instance
    server, // raw http server instance
    // watcher, // chokidar file watcher instance
    config, // vite config
}) => {
    app.use(router.routes())
    app.use(router.allowedMethods())

    Object.assign(
        config,
        viteConfig,
    )

    await build(viteConfig)

    const watcher = chokidar.watch(
        viteConfig?.base || '',
        {
            ignored: /(^|[\/\\])\../,
            persistent: true,
        },
    )

    watcher.on(
        'change',
        async (path) => {
            console.log(`changed path: ${path}`)

            await build(viteConfig)
        },
    )
}
