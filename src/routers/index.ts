/* ------------------------------------------ router入口 ------------------------------------------ */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 自动引入所有的模块
const modules = require.context('./modules', false, /.ts$/);
const routes = modules.keys().reduce((result: any, fileName) => {
  result = [...result, ...modules(fileName).default];
  return result;
}, []);

// 创建router对象
const router = new Router({
  routes,
});

// 路由切换处理函数
router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title;
  // 放行
  next();
});
export default router;
