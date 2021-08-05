const path = require("path")

module.exports = {
    entry : {//informa ao webpack os arquivos que ele deve ler
        index: './src/index.js',
        galaxy: './src/galaxy.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module:{ //módulos que vamos utilizar do webpack
        rules:[ //regras dos arquivos
            {
                test: /\.js$/,      //procurar arquivos que terminam em .js
                use: ['babel-loader']     // e usar o babel-loader
            }
        ]
    },
    
    watch: true,   //procurar por qualquer alteração e quando encontrar irá processar o webpack tudo de novo

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        liveReload: true
    }
}