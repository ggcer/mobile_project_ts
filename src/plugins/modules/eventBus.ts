/**
 * eventBus
 */
import Vue from 'vue';
class EventBus {
  public Vue: any
  public eventMapUid: any
  public handles: any

  constructor(vue: any) {
    if (!this.handles) {
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false,
      });
    }
    this.Vue = vue;
    // _uid和EventName的映射
    this.eventMapUid = {};
  }
  public setEventMapUid(uid: string, eventName: string) {
    if (!this.eventMapUid[uid]) { this.eventMapUid[uid] = []; }
    this.eventMapUid[uid].push(eventName); // 把每个_uid订阅的事件名字push到各自uid所属的数组里
  }
  public $on(eventName: string, callback: any, vm: any) {
    // vm是在组件内部使用时组件当前的this用于取_uid
    if (!this.handles[eventName]) { this.handles[eventName] = []; }
    this.handles[eventName].push(callback);
    if (vm instanceof this.Vue) { this.setEventMapUid(vm._uid, eventName); }
  }
  public $emit() {
    const args = [...arguments];
    const eventName = args[0];
    const params = args.slice(1);
    if (this.handles[eventName]) {
      const len = this.handles[eventName].length;
      for (let i = 0; i < len; i++) {
        this.handles[eventName][i](...params);
      }
    }
  }
  public $offVmEvent(uid: string) {
    const currentEvents = this.eventMapUid[uid] || [];
    currentEvents.forEach((event: any) => {
      this.$off(event);
    });
  }
  public $off(eventName: string) {
    delete this.handles[eventName];
  }
}
// 写成Vue插件形式，直接引入然后Vue.use($EventBus)进行使用
const $EventBus = {};
($EventBus as any).install = (Vue: any) => {
  Vue.prototype.$eventBus = new EventBus(Vue);
  Vue.mixin({
    beforeDestroy() {
      // 拦截beforeDestroy钩子自动销毁自身所有订阅的事件
      this.$eventBus.$offVmEvent(this._uid);
    },
  });
};

Vue.use(($EventBus as any));
