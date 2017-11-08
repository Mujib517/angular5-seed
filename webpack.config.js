const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const Environment = require('./environment');

module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        filename: Environment.isProduction ? "dist/[name].min.js" : "dist/[name].js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: Environment.isProduction ? [new UglifyJsPlugin()] : []

}