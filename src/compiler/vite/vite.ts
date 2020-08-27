import { createServer } from 'vite'
import portscanner from 'portscanner'

import connectKoaPlugin from './dtw-connect'

const main = async () => {

    const port = await portscanner.findAPortNotInUse(
        3000,
        3999,
        '127.0.0.1'
    )

    createServer({
        configureServer: [
            connectKoaPlugin,
        ],
    })
    .listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
}

main()
