import Vue from 'vue';
import router from './routers';
import store from './stores';

import App from './views/App.vue';

// plugin引入
import './plugins';

// 注入全部filter
import filters from '@/filters';
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// vue全局mixin
import globalCode from '@/assets/global/globalCode';
import globalConfig from '@/assets/global/globalConfig';
import utils from './utils';
import interfaces from './interfaces'
Vue.mixin({
  data() {
    return {
      GlobalCode: globalCode,
      GlobalConfig: globalConfig,
      Utils: utils,
      Interfaces: interfaces,
    }
  },
  methods: {
    // 指定path跳转(不带参数)
    go(path) {
      this.$router.push(path);
    },
    // 回到上一个页面
    back() {
      this.$router.back();
    },
    // 指定path跳转，带query参数(在url地址栏显示)
    goWithQuery(path, dataObj) {
      this.$router.push({
        path,
        query: dataObj
      });
    },
    // 指定路由名字跳转，带params参数(不在url地址栏显示)
    goWithParams(name, dataObj) {
      this.$router.push({
        name,
        params: dataObj
      });
    }
  }
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
