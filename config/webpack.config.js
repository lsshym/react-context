const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Webpack = require("webpack");
const baseConfig = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash:8].js", // 打包后的文件名称
        path: path.resolve(__dirname, "../dist"), // 打包后的目录
    },

    // 我也不知道这是啥
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"],
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new CleanWebpackPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // 从右向左解析原则
                // use: ["style-loader", "css-loader", "sass-loader"], // 从右向左解析原则
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.(ts|tsx)$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript",
                    ],
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: "asset/resource",
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

// // webpack.config.js

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const Webpack = require("webpack");
// const vueLoaderPlugin = require("vue-loader/lib/plugin");

// module.exports = {
//     mode: "development", // 开发模式
//     entry: ["@babel/polyfill", path.resolve(__dirname, "../src/main.js")], // 入口文件
//     devServer: {
//         port: 3000,
//         hot: true,
//         contentBase: "../dist",
//     },
//     output: {
//         filename: "[name].[hash:8].js", // 打包后的文件名称
//         path: path.resolve(__dirname, "../dist"), // 打包后的目录
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, "../public/index.html"),
//         }),
//         new CleanWebpackPlugin(),
//         new Webpack.HotModuleReplacementPlugin(),
//         new vueLoaderPlugin(),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 use: ["vue-loader"],
//             },
//             {
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"], // 从右向左解析原则
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     {
//                         loader: "postcss-loader",
//                         options: {
//                             plugins: [require("autoprefixer")],
//                         },
//                     },
//                     "sass-loader",
//                 ], // 从右向左解析原则
//             },
//             {
//                 test: /\.(jpe?g|png|gif)$/i, //图片文件
//                 use: [
//                     {
//                         loader: "url-loader",
//                         options: {
//                             limit: 10240,
//                             fallback: {
//                                 loader: "file-loader",
//                                 options: {
//                                     name: "img/[name].[hash:8].[ext]",
//                                 },
//                             },
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
//                 use: [
//                     {
//                         loader: "url-loader",
//                         options: {
//                             limit: 10240,
//                             fallback: {
//                                 loader: "file-loader",
//                                 options: {
//                                     name: "media/[name].[hash:8].[ext]",
//                                 },
//                             },
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
//                 use: [
//                     {
//                         loader: "url-loader",
//                         options: {
//                             limit: 10240,
//                             fallback: {
//                                 loader: "file-loader",
//                                 options: {
//                                     name: "fonts/[name].[hash:8].[ext]",
//                                 },
//                             },
//                         },
//                     },
//                 ],
//             },
//             {
//                 test: /\.js$/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env"],
//                     },
//                 },
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     resolve: {
//         alias: {
//             vue$: "vue/dist/vue.runtime.esm.js",
//             " @": path.resolve(__dirname, "../src"),
//         },
//         extensions: ["*", ".js", ".json", ".vue"],
//     },
// };
