<template>
  <page class="demo-fundebug">
    <h4 class="tips">
      测试fundebug功能，生产环境触发错误后能在fundebug控制台看到错误日志<br />
      (月统计量有限，请勿反复测试)
    </h4>
    <button class="btn" @click="throwError">
      触发错误
    </button>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DemoFundebug extends Vue {
  // 抛出错误
  public throwError() {
    throw new Error('我报错了');
  }
}
</script>

<style lang="scss" scoped>
.demo-fundebug {
  padding: 20px;
  .tips {
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .btn {
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 5px 10px;
    line-height: 20px;
    font-size: 12px;
    color: white;
    background: linear-gradient(to right, #ff3333, #f96);
    box-shadow: 0 0 3px 0.5px #f96;
  }
}
</style>
