module.exports = function (api) {
    api.cache(true)

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    // 'loose': true,
                    // 'debug': true,
                    'targets': {
                        'node': 'current'
                    }
                }
            ],
            '@babel/preset-typescript'
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            [
                "@babel/plugin-transform-arrow-functions",
                {
                    "spec": true
                },
            ],

        ],
    }
}
