export enum BabelConfigType {
    Frontend,
    Backend,
}

class PresetEnv {
    loose?: boolean = true
    debug?: boolean = true
    targets?: any
    modules?: boolean = true
}

export default (configType: BabelConfigType) => {
    const presetEnv = new PresetEnv()

    switch (configType) {
    case BabelConfigType.Frontend:
        presetEnv.modules = false
    case BabelConfigType.Backend:
        presetEnv.targets = {
            node: 'current',
        }
    }

    return {
        presets: [
            [
                require('@babel/preset-env'),
                presetEnv,
            ],
        ],
        plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            require('@babel/plugin-transform-typescript'),
        ],
    }
}
