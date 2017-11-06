module.exports = {
    entry: {
        app: "./src/main.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        filename: "dist/[name].js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }

}