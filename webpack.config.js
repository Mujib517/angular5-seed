const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const Environment = require('./environment');
const cleanPlugin = new CleanWebpackPlugin(['dist']);

const htmlConfig = new HtmlPlugin({
    hash: true,
    path: path.join(__dirname, "dist"),
    filename: 'index.html',
    template: 'index.html',
    inject: 'body'
});

const copyConfig = new CopyPlugin([{ from: 'img', to: "img" }]);

const plugins = [htmlConfig, copyConfig];

if (Environment.isProduction){
    plugins.push(cleanPlugin);
    plugins.push(new UglifyJsPlugin());
} 

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
    plugins: plugins
}