/**
 * 图片懒加载配置文件
 */
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度，为屏幕的倍数
  attempt: 2, // 尝试加载次数
  // loading: "", // loading时显示的图片
  error: require('@/assets/imgs/global/pic/pic_load_fail.png'), // 图片加载失败时显示的图片
});
