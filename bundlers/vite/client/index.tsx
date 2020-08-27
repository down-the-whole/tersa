import {
    render,
    h,
} from 'preact'

const container =  document.getElementById('app')

console.log(
    render(
        <>Hello, world!</>,
        container || document.body,
    )
)
