const { merge } = require("webpack-merge");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 导入基础配置
const { baseConfig } = require("./webpack.config");
module.exports = merge(baseConfig, {
    // 环境配置：生产环境
    mode: "production",
    plugins: [new CssMinimizerWebpackPlugin(), new CleanWebpackPlugin()],
});
