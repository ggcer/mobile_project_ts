/**
 * navigation：仿app回退路由记录之前页面的状态
 */
import Vue from 'vue';
import router from '../../routers';
import Navigation from 'vue-navigation';
Vue.use(Navigation, {
  router,
});
