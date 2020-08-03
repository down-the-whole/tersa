import { Request, Response, } from 'express'

export const index = (req: Request, res: Response) => {
    res.send('Welcome to DTW!')
}

export const hello = (req: Request, res: Response) => {
    res.send('Hello, Oriane!')
}
