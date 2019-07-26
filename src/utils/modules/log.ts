// log
enum logColor {
  success = 'green',
  error = 'red',
  info = 'blue'
}
const log: Utils['log'] = {
  success(msg: any) {
    console.log('%c ' + (typeof msg === 'object' ? JSON.stringify(msg) : msg), `color: ${logColor.success}`);
  },
  error(msg: any) {
    console.log('%c ' + (typeof msg === 'object' ? JSON.stringify(msg) : msg), `color: ${logColor.error}`);
  },
  info(msg: any) {
    console.log('%c ' + (typeof msg === 'object' ? JSON.stringify(msg) : msg), `color: ${logColor.info}`);
  }
};
export default log;
