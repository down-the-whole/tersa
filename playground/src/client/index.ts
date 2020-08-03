class HelloWorld {
    text: string

    constructor(options: Partial<HelloWorld>) {
        Object.assign(this, options)
    }
}

console.log(
    new HelloWorld({
        text: 'Hello, Christian!'
    })
)
