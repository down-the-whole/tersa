import * as preactRefresh from '@prefresh/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
    jsx: {
        factory: 'h',
        fragment: 'Fragment'
    },
    plugins: [
        preactRefresh,
    ],
    base: 'src/client',
    outDir: 'dist/client',
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    }
}

export default config
