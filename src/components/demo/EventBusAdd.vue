<template>
  <div class="event-bus-add">
    <button class="btn" @click="add(1)">
      + 1
    </button>
    <button class="btn" @click="add(10)">
      + 10
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class EventBusAdd extends Vue {
  // add
  public add(addNumber: number) {
    this.$eventBus.$emit('demoAdd', addNumber);
  };
}
</script>

<style lang="scss" scoped>
.event-bus-add {
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
