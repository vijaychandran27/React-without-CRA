const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    
    devServer: {
        port: 3010,
        // watchContentBase: true,
    },
    output : {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    }
}