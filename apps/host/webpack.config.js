const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

const config = {
    mode: isProd ? "production" : "development",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        path: resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./tsconfig.build.json",
                extensions: [".ts", ".js"]
            })
        ],
        modules: ["./node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@sc/sdk": path.resolve(__dirname, "../packages/sc-sdk/dist/esnext"),
            "@sc/ui": path.resolve(__dirname, "../packages/sc-ui/dist/esnext")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
        }),
    ],
};

if (isProd) {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()],
    };
} else {
    config.devServer = {
        port: 4000,
        open: true,
        hot: true,
        compress: true
    };
}

module.exports = config;
