/* ------------------------------------------ filter入口 ------------------------------------------ */
// 自动引入所有的模块
const modules = require.context('./modules', false, /.ts$/);
const filters = modules.keys().reduce((result: any, fileName: string) => {
  const moduleName = fileName.replace(/\.\/(.*)\.ts$/g, '$1');
  const moduleContent = modules(fileName).default;
  Object.keys(moduleContent).forEach((key) => {
    result[`${moduleName}_${key}`] = moduleContent[key];
  });
  return result;
}, {});

export default filters;
