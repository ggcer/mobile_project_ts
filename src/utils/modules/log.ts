// log
import session from './session'
enum logColor {
  success = 'green',
  error = 'red',
  info = 'blue'
}
const log: Utils['log'] = {
  success(msg: any, isCache?: boolean) {
    msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
    console.log('%c ' + msg, `color: ${logColor.success}`);
    // 设置缓存
    if (isCache) {
      session.set('LOG_SUCCESS', [
        ...(session.get('LOG_SUCCESS') || []),
        msg
      ])
    }
  },
  error(msg: any, isCache?: boolean) {
    msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
    console.log('%c ' + msg, `color: ${logColor.error}`);
    // 设置缓存
    if (isCache) {
      session.set('LOG_ERROR', [
        ...(session.get('LOG_ERROR') || []),
        msg
      ])
    }
  },
  info(msg: any, isCache?: boolean) {
    msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
    console.log('%c ' + msg, `color: ${logColor.info}`);
    // 设置缓存
    if (isCache) {
      session.set('LOG_INFO', [
        ...(session.get('LOG_INFO') || []),
        msg
      ])
    }
  }
};
export default log;
