const { merge } = require('webpack-merge');
// 导入基础配置
const { baseConfig } = require("./webpack.config");
module.exports = merge(baseConfig, {
    // 环境配置：生产环境
    mode: "production",
});
