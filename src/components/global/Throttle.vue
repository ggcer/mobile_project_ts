<script>
// 防抖，节流组件
const throttle = (fn, wait = 50, isDebounce, ctx) => {
  let timer;
  let lastCall = 0;
  return (...params) => {
    if (isDebounce) {
      // 防抖
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(ctx, params);
      }, wait);
    } else {
      // 节流
      const now = new Date().getTime();
      if (now - lastCall < wait) {
        return;
      }
      lastCall = now;
      fn.apply(ctx, params);
    }
  };
};

export default {
  name: 'Throttle',
  abstract: true,
  props: {
    time: Number,
    events: String,
    isDebounce: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.eventKeys = this.events.split(',');
    this.originMap = {};
    this.throttledMap = {};
  },
  render() {
    const vnode = this.$slots.default[0];
    this.eventKeys.forEach((key) => {
      const target = vnode.data.on[key];
      if (target === this.originMap[key] && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key];
      } else if (target) {
        this.originMap[key] = target;
        this.throttledMap[key] = throttle(
          target,
          this.time,
          this.isDebounce,
          vnode
        );
        vnode.data.on[key] = this.throttledMap[key];
      }
    });
    return vnode;
  }
};
</script>
