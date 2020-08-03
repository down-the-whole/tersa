const externals = {
    '@babel/core': '@babel/core',
    '@babel/preset-env': '@babel/preset-env',
    '@babel/plugin-transform-runtime': '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import': '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-arrow-functions': '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-typescript': '@babel/plugin-transform-typescript',

    '@babel/runtime/helpers/interopRequireDefault': '@babel/runtime/helpers/interopRequireDefault',
    '@babel/runtime/helpers/newArrowCheck': '@babel/runtime/helpers/newArrowCheck',

    'chokidar': 'chokidar',
    'yargs': 'yargs',
}

module.exports = externals
