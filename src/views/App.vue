<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <!-- 内容注入区 -->
        <router-view class="router-view"/>
      </navigation>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  // 页面切换效果
  public transitionName = '';

  @Watch('$route')
  public $routeChange(route: any) {
    this.setPageStack(route);
  };
  // 设置页面切换栈
  public setPageStack(route: any) {
    const Utils = this.Utils;
    if (!Utils.session.get('pageStack')) {
      Utils.session.set('pageStack', [])
    }

    const pageStack = Utils.session.get('pageStack');
    const VNK = route.query.VNK;
    if (pageStack.length === 0) {
      // 页面进入
      this.transitionName = '';
      pageStack.push(VNK); // 添加一条记录
    } else if (pageStack[pageStack.length - 1] === VNK) {
      // 页面刷新
      this.transitionName = '';
    } else if (
      pageStack.length > 1 &&
      pageStack[pageStack.length - 2] === VNK
    ) {
      // 返回返回
      this.transitionName = 'slide-right';
      pageStack.pop(); // 删除最后一条记录
    } else {
      // 页面前进
      this.transitionName = 'slide-left';
      pageStack.push(VNK); // 添加一条记录
    }
    // 更新pageStack缓存
    Utils.session.set('pageStack', pageStack);
  }
}
</script>

<style lang="scss">
@import "@/assets/css/global/main.scss";
</style>
<style lang="scss" scoped>
.router-view {
  position: relative;
  z-index: 1;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

// 前进
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter-active {
  z-index: 2;
  transition: all $page-trans-duration ease;
}
.slide-left-leave-active {
  z-index: 0;
  transform: translate3d(-30%, 0, 0);
  transition: all $page-trans-duration ease;
}

// 后退
.slide-right-enter {
  transform: translate3d(-30%, 0, 0);
}
.slide-right-enter-active {
  z-index: 0;
  transition: all $page-trans-duration ease;
}
.slide-right-leave-active {
  z-index: 2;
  transform: translate3d(100%, 0, 0);
  transition: all $page-trans-duration ease;
}
</style>
