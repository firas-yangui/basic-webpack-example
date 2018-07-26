var path = require('path');
var webpack = require('webpack');
console.log(webpack.optimize);
// var commonsPlugin = new webpack.optimize.SplitChunksPlugin('shared.js');

// entry: {
//     about: './about.js',
//     home: './home.js',
//     contact: './contact.js'
// },
// plugins: [commonsPlugin],
module.exports = {
    context: path.resolve('js'),
    entry: ["./utils", "./app"],
    output: {
        path: path.resolve('/build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                    emitWarning: true,
                    configFile: "./.eslintrc.json"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
};