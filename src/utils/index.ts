/* ------------------------------------------ util入口 ------------------------------------------ */
// 自动引入所有的模块
const modules = require.context('./modules', false, /.ts$/);
const utils: Utils = modules.keys().reduce((result: any, fileName: string) => {
  const moduleName: string = fileName.replace(/\.\/(.*)\.ts$/g, '$1');
  result[moduleName] = modules(fileName).default;
  return result;
}, {});

export default utils;
