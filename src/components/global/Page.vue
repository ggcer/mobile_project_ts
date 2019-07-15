<template>
  <main class="page">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100vw;
  min-height: 100vh;
  background-color: $bg-color;
}
</style>
