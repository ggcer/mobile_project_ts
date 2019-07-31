// log
import { set as sessionSet, get as sessionGet} from './session'
enum logColor {
  success = 'green',
  error = 'red',
  info = 'blue'
}

export const success = (msg: any, isCache?: boolean) => {
  msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
  console.log('%c ' + msg, `color: ${logColor.success}`);
  // 设置缓存
  if (isCache) {
    sessionSet('LOG_SUCCESS', [
      ...(sessionGet('LOG_SUCCESS') || []),
      msg
    ])
  }
}

export const error = (msg: any, isCache?: boolean) => {
  msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
  console.log('%c ' + msg, `color: ${logColor.error}`);
  // 设置缓存
  if (isCache) {
    sessionSet('LOG_ERROR', [
      ...(sessionGet('LOG_ERROR') || []),
      msg
    ])
  }
}

export const info = (msg: any, isCache?: boolean) => {
  msg = typeof msg === 'object' ? JSON.stringify(msg) : msg;
  console.log('%c ' + msg, `color: ${logColor.info}`);
  // 设置缓存
  if (isCache) {
    sessionSet('LOG_INFO', [
      ...(sessionGet('LOG_INFO') || []),
      msg
    ])
  }
}

const log: Utils['log'] = {
  success,
  error,
  info
};
export default log;
