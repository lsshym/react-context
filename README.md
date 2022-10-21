# react-context

手动配置 react 项目环境

## 使用量对比

https://npmtrends.com/

## 获取项目信息

github api 使用教程
GitHub-api：https://api.github.com/repos/{:owner}/{:repository}

eg: https://api.github.com/repos/hongjinquan/reactNative-turntable-circle

## react 项目添加 webpack 配置

https://typescript.bootcss.com/tutorials/react-&-webpack.html

`使用@types/前缀表示我们额外要获取React和React-DOM的声明文件`,@types/react 用于 typescript 提示

postcss-loader 应该是 Webpack 配置中不可或缺的一个 CSS loader。 它负责进一步处理 CSS 文件，比如添加浏览器前缀，压缩 CSS 等
如果使用了 MiniCssExtractPlugin 的方式抽离 css，在后面配置压缩 css 时就需要使用对应的 css-minimizer-webpack-plugin。
