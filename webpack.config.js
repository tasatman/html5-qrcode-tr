const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "html5-qrcode.min.js",
        library: "__Html5QrcodeLibrary__",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        usedExports: true,
    }
};
