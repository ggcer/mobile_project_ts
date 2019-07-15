<template>
  <page class="demo-home">
    <section class="menu-wrap">
      <p
        class="menu-line"
        v-for="(menu, index) of menuList"
        :key="index"
        @click="go(menu.path)"
      >
        {{ index + 1 }}：{{ menu.desc }}
      </p>
    </section>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DemoHome extends Vue {
  // menuList
  public menuList: any[] = [
    {
      path: '/demo/demoUi',
      desc: 'UI相关'
    },
    {
      path: '/demo/demoLazyload',
      desc: '图片懒加载'
    },
    {
      path: '/demo/demoIframe',
      desc: 'iframe'
    },
    {
      path: '/demo/demoThrottle',
      desc: '事件防抖与节流'
    },
    {
      path: '/demo/demoStore',
      desc: '刷新页面不丢失的vuex'
    },
    {
      path: '/demo/demoEventBus',
      desc: 'eventBus兄弟组件之间传值'
    },
    {
      path: '/demo/demoFundebug',
      desc: 'fundebug错误监控'
    }
  ]
}
</script>

<style lang="scss" scoped>
.demo-home {
  padding: 20px;
  .menu-wrap {
    .menu-line {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #4b4b4b;
      &:not(:last-of-type) {
        border-bottom: 1px solid #cccccc;
      }
    }
  }
}
</style>
