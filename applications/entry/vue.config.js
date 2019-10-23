/*
 * @Description: In User Settings Edit
 * @Author: pangyu
 * @Date: 2019-10-16 16:50:20
 * @LastEditors: pangyu
 * @LastEditTime: 2019-10-21 15:19:10
 */
const webpack = require("webpack");
const APP_NAME = require("./package.json").name;
const PORT = require("./package.json").devPort;

const PROXY = {
  "/javascript/": {
    target: "http://localhost:10241/"
  },
  "/typescript/": {
    target: "http://localhost:10242/"
  }
};

const NODE_ENV = process.env.NODE_ENV || "development";

log("APP_NAME: ", APP_NAME);
log("NODE_ENV: ", NODE_ENV);

module.exports = {
  publicPath: "./",
  productionSourceMap: true,

  pages: {
    // index: {
    //   // page 的入口
    //   entry: 'src/main.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'index.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index Page',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'index']
    // },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    index: 'src/main.js'
  },

  configureWebpack: {
    // externals: {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex'
    // },

    plugins: [
      new webpack.DefinePlugin({
        "process.env.VUE_APP_NAME": JSON.stringify(APP_NAME)
      })
    ]
  },

  devServer: {
    port: PORT,
    proxy: PROXY
  },

  lintOnSave: false
};

function log(label, content, options) {
  console.log("\x1b[1m%s\x1b[31m%s\x1b[0m", label, content);
}
