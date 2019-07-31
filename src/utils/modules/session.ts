/* ------------------------------------------ sessionStorage缓存工具类 ------------------------------------------ */
export const set = (key: string, value: any) => {
  if (typeof value === 'string') {
    sessionStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export const get = (key: string) => {
  let value = sessionStorage.getItem(key);
  if (value && (value.substr(0, 1) === '{' || value.substr(0, 1) === '[')) {
    try {
      value = eval('(' + value + ')');
    } catch (e) {
      console.log('error in get cache key:' + key + ', value:' + value);
    }
  }
  return value;
}

export const getThenRemove = (key: string) => {
  const value = get(key);
  removeItem(key);
  return value;
}

export const removeItem = (key: string) => {
  sessionStorage.removeItem(key);
}

export const clear = () => {
  sessionStorage.clear();
}

const session: Utils['session'] = {
  set,
  get,
  getThenRemove,
  removeItem,
  clear
};
export default session;
