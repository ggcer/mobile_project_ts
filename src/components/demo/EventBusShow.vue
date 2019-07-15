<template>
  <div class="event-bus-show">当前number: {{ demoNumber }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class EventBusShow extends Vue {
  // 当前的number
  public demoNumber: number = 0

  public mounted() {
    this.$eventBus.$on(
      'demoAdd',
      (data: number) => {
        console.log('demoAdd: ' + data);
        this.demoNumber += data;
      },
      this
    );
    this.$eventBus.$on(
      'demoDel',
      (data: number) => {
        console.log('demoDel: ' + data);
        this.demoNumber -= data;
      },
      this
    )
  }
}
</script>

<style lang="scss" scoped>
.event-bus-show {
  margin-bottom: 10px;
}
</style>
