const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const Environment = require('./environment');

const htmlConfig = new HtmlPlugin({
    hash: true,
    path: path.join(__dirname, "dist"),
    filename: 'index.html',
    template: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: Environment.isProduction ? "[name].min.js" : "[name].js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    plugins: Environment.isProduction ? [new UglifyJsPlugin(), htmlConfig] : [htmlConfig]

}