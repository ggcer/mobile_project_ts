/* ------------------------------------------ demo模块 ------------------------------------------ */
// state：状态
const state = {
  demoInfo: {
    desc: 'i am demo',
    objList: [
      {
        name: 'xiaochuan',
        age: 22
      },
      {
        name: 'xiaoming',
        age: 22
      }
    ]
  }
};

// getters：类似于state的计算属性
// 接收参数：state
const getters = {};

// mutations：改变state的唯一途径，里面的操作必须是同步的，否则会导致变化无法追踪
// 接收参数，state，载荷payload对象
const mutations = {
  setState(state: any, payload: any) {
    state[payload.attr] = payload.data;
  }
};

// actions：用于异步地提交一个或多个mutations，常与Promise联合使用
// 接收参数：context对象(一个与 store 实例具有相同方法和属性的 context 对象)，载荷payload对象
const actions = {};

const demo = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
export default demo;
