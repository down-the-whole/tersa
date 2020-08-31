import { exec, ChildProcess } from 'child_process'

export default (entrypoint: string) : ChildProcess => {
    const process = exec(
        `node ${entrypoint}`
    )

    process.stderr?.on('data', console.log)
    process.stdout?.on('data', console.log)

    return process
}
