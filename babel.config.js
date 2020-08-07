module.exports = function (api) {
    if (api) api.cache(true)

    return {
        presets: [
            [
                require('@babel/preset-env'),
                {
                    // loose: true,
                    debug: true,
                    targets: {
                        node: 'current',
                    },
                    // useBuiltIns: 'usage',
                }
            ],
            require('@babel/preset-typescript'),
        ],
        plugins: [
            require('@babel/plugin-transform-runtime'),
            require('@babel/plugin-syntax-dynamic-import'),
            [
                require('@babel/plugin-transform-arrow-functions'),
                {
                    spec: true
                },
            ],
            require('@babel/plugin-transform-typescript'),
        ],
    }
}
