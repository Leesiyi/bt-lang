// const path = require('path');
const path = require('path')

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library:"btLang",
        globalObject: 'this'
    },
    mode:'production'
}