const { merge } = require("webpack-merge");
const path = require("path");

// 导入基础配置
const { baseConfig } = require("./webpack.config");
module.exports = merge(baseConfig, {
    // 环境设置：开发环境
    mode: "development",
    devServer: {
        port: 3000,
        hot: true,
        static: "../dist",
        static: {
            directory: path.join(__dirname, "../public"),
        },
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
});
