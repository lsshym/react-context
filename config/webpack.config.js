const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require("webpack");
const baseConfig = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash:8].js", // 打包后的文件名称
        path: path.resolve(__dirname, "../dist"), // 打包后的目录
    },

    resolve: {
        //在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。
        // resolve.extensions用于配置在尝试过程中用到的后缀列表，默认是：js 和 json
        extensions: [".ts", ".tsx", ".js", ".json"],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"],
        },
        alias: {
            "@src": path.resolve(__dirname, "../src"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // 查看
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                // MiniCssExtractPlugin插件和style-loader冲突，所以这里用MiniCssExtractPlugin插件替换了style-loader
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.(t|j)sx?$/,
                loader: "babel-loader",
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: "asset/inline",
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[hash][ext][query]",
                },
            },
            {
                test: /\.ico$/i,
                type: "asset/inline",
            },
            {
                test: /\.text$/i,
                type: "asset/source",
            },
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM",
    // },
};
module.exports = {
    baseConfig,
};
