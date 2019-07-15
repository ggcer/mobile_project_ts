/**
 * 错误监控配置文件
 */
import Vue from 'vue';
import * as fundebug from 'fundebug-javascript';
import fundebugVue from 'fundebug-vue';
// 配置信息
const config = {
  apikey: '4a176103118240ed80c2d7ddfdae83f3e0d04d796eda88fe505fb02501e323b2', // key
  appversion: '1.8.0', // api版本
  releasestage: process.env.VUE_APP_ENV, // 当前环境(版本)
  setHttpBody: false, // 如果你需要记录 HTTP 请求的 body 参数的话，可以将setHttpBody设为 true 即可
  filters: [], // 过滤规则数组
  silent: false, // 是否开启静默模式(静默模式不会处理错误)
  silentDev: false, // 是否排除开发环境的错误(域名为localhost或者ip地址)
  silentResource: false, // 如果你不需要监控资源加载错误，则可以将 silentResource 属性设为 true
  silentHttp: false, // 如果你不需要监控HTTP 请求错误，则可以将 silentHttp 属性设为 true
  silentWebsocket: false, // 如果你不需要监控 WebSocket 连接错误，则可以将 silentWebsocket 属性设为 true
  silentVideo: true, // 如果你需要录屏功能，则可以将 silentVideo 属性设为 false。silentVideo 的默认值为 true，即默认关闭录屏功能
  silentBehavior: false, // 如果你不需要记录用户行为，则可以将 silentBehavior 属性设为 true
  silentConsole: true, // fundebug劫持了console(console.log不显示出处), 将silentConsole属性设为 true，可以恢复console
  silentPerformance: false // 如果你不需要报错的时候附带页面性能指标，则可以将 silentPerformance 属性设为 true
};
// 合并配置信息
Object.assign(fundebug, config);

// require("fundebug-revideo");
if (process.env.NODE_ENV === 'production') {
  fundebugVue(fundebug, Vue);
}
