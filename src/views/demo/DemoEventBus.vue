<template>
  <page class="demo-event-bus">
    <h4 class="tips">
      eventBus只适用于兄弟组件小数据的传递，如果传递数据较大，结构较复杂，请使用vuex
      <br />(本项目eventBus在组件销毁时会自动$off监听，无需手动调用$off)
    </h4>
    <event-bus-show></event-bus-show>
    <event-bus-add></event-bus-add>
    <event-bus-delete></event-bus-delete>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventBusAdd from '../../components/demo/EventBusAdd.vue';
import EventBusDelete from '../../components/demo/EventBusDelete.vue';
import EventBusShow from '../../components/demo/EventBusShow.vue';
@Component({
  components: {
    EventBusAdd,
    EventBusDelete,
    EventBusShow
  },
})
export default class DemoEventBus extends Vue {
}
</script>

<style lang="scss" scoped>
.demo-event-bus {
  padding: 20px;
  .tips {
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
  }
  /deep/ .mu-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
