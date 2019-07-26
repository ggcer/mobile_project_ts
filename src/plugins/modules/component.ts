/**
 * ui框架组件，全局组件引入
 */
import Vue from 'vue';

// 引入ui框架组件
import Vuetify, {
  VBtn
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VBtn
  }
})

// 引入全局组件
import Page from '@/components/global/Page.vue';
import Throttle from '@/components/global/Throttle.vue';
Vue.component('Page', Page);
Vue.component('Throttle', Throttle);
