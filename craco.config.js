const path = require("path")
const { whenProd } = require("@craco/craco")
const CracoLessPlugin = require("craco-less")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")

const logWebpackConfigPlugin = require("./craco-plugin-log-webpack-config");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: logWebpackConfigPlugin, options: { preText: "Will log the webpack config:" } }
  ],
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }], //装饰器
      // [
      //   "import",
      //   {
      //     libraryName: "antd",
      //     libraryDirectory: "es",
      //     style: true, //设置为true即是less 按需加载后只需引入组件，无需再额外引入样式文件，babel会自动按需帮你完成样式的引入。这样打包出来的文件会更小。
      //   },
      // ],
    ],
  },
  webpack: {
    alias: {
      "@": path.resolve("src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8888,
        openAnalyzer: true, // 构建完打开浏览器
      }),
    ],
  },
}
