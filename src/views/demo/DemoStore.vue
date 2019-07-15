<template>
  <page class="demo-store">
    <h4 class="tips">
      项目默认配置了store
      sessionStorage的缓存配置，确保刷新页面后store的数据不丢失，但是数据的更新必须通过commit触发才能存入sessionStorage
    </h4>
    <p>{{ demoInfo.desc }}</p>
    <ul>
      <li v-for="(item, index) of demoInfo.objList" :key="index">
        {{ item.name }} {{ item.age }}
      </li>
    </ul>
    <div class="btn-wrap">
      <button @click="push" class="btn">
        添加数据
      </button>
      <button @click="refresh" class="btn">
        刷新页面
      </button>
    </div>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DemoStore extends Vue {
  // state: demoInfo
  public demoInfo: any = this.$store.state.demo.demoInfo

  // push
  public push() {
    this.demoInfo.objList.push({
      name: `xiao${this.demoInfo.objList.length}`,
      age: 22
    });
    this.$store.commit('demo/setState', {
      attr: 'demoInfo',
      data: this.demoInfo
    });
  }

  // 刷新方法
  public refresh() {
    window.location.reload();
  }
}
</script>

<style lang="scss" scoped>
.demo-store {
  padding: 20px;
  .tips {
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .btn-wrap {
    margin-top: 20px;
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
}
</style>
