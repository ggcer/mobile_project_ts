/* ------------------------------------------ localStorage缓存工具类 ------------------------------------------ */
const local: Utils['local'] = {
  set(key: string, value: any) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  get(key: string) {
    let value = localStorage.getItem(key);
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
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default local;
