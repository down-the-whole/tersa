// import { promisify } from 'util'
import portscanner from 'portscanner'
import express, {
    Request,
    Response,
} from 'express'

import { hello, index} from './controller'

const main = async () => {
    let port

    try {
        port = await portscanner.findAPortNotInUse(
            8000,
            9000,
            '127.0.0.1'
        )
    } catch (e) {
        console.error(e)
    }

    const app = express()

    app.get('/', index)
    app.get('/hello', hello)

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}

main()
