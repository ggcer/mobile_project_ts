/* ------------------------------------------ sessionStorage缓存工具类 ------------------------------------------ */
const session: Utils['session'] = {
  set(key: string, value: any) {
    if (typeof value === 'string') {
      sessionStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  get(key: string) {
    let value = sessionStorage.getItem(key);
    if (value && (value.substr(0, 1) === '{' || value.substr(0, 1) === '[')) {
      try {
        value = eval('(' + value + ')');
      } catch (e) {
        console.log('error in get cache key:' + key + ', value:' + value);
      }
    }
    return value;
  },
  getThenRemove(key: string) {
    const value = this.get(key);
    this.removeItem(key);
    return value;
  },
  removeItem(key: string) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

export default session;
