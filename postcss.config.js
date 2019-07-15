module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", // 要转换的单位
      viewportUnit: "vw", // 转换后的单位
      viewportWidth: 375, // 适口宽度
      // 要忽略的选择器，使其内部长度单位保留为px，可以指定string | reg
      // string：会检测选择器里面是否包含该string字符串，如果包含，则应用
      // reg：检测选择器是否符合正则表达式，如果符合，则应用
      // 注意：元素匹配为：元素名，class匹配为 .类名，id匹配为：#id名
      // !加项目请打上注释
      selectorBlackList: [
        /\.ignore-vw/, // 全局
        /\.pswp/ // vue-photo-preview
      ]
    }
  }
};
