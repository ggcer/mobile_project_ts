
// utils接口定义
declare interface Utils {
  // loader
  loader: {
    /**
     * 加载单张图片
     * @param imgEle 图片src或者图片ele对象
     */
    loadImg(imgEle: string | HTMLImageElement): Promise<any>
    /**
     * 加图多张图片
     * @param imgList 图片ele对象数组 | 图片src数组 | 单张图片src
     */
    loadImgs(imgList: HTMLImageElement[] | string[] | string): Promise<any>
    /**
     * 返回一个延迟指定毫秒的promise
     * @param delay 指定的毫秒数，默认300毫秒
     */
    delayPromise(delay?: number): Promise<any>
  }
  // local工具类
  local: {
    /**
     * localStorage按键设置缓存
     * @param key 键
     * @param value 值
     */
    set(key: string, value: any): void
    /**
     * localStorage按键获取缓存
     * @param key 键
     */
    get(key: string): any
    /**
     * localStorage按键获取缓存后删除
     * @param key 键
     */
    getThenRemove(key: string): any
    /**
     * localStorage按键删除缓存
     * @param key
     */
    removeItem(key: string): void
    /**
     * localStorage按键清除全部缓存
     */
    clear(): void
  }
  // session工具类
  session: {
    /**
     * sessionStorage按键设置缓存
     * @param key 键
     * @param value 值
     */
    set(key: string, value: any): void
    /**
     * sessionStorage按键获取缓存
     * @param key 键
     */
    get(key: string): any
    /**
     * sessionStorage按键获取缓存后删除
     * @param key 键
     */
    getThenRemove(key: string): any
    /**
     * sessionStorage按键删除缓存
     * @param key
     */
    removeItem(key: string): void
    /**
     * sessionStorage按键清除全部缓存
     */
    clear(): void
  }
  // ui工具类
  ui: {
    /**
     * 获取浏览器视口宽度
     */
    getClientWidth(): number
    /**
     * 获取浏览器视口高度
     */
    getClientHeight(): number
    /**
     * 获取当前页面总高度
     */
    getScrollHeight(): number
    /**
     * 获取当前页面滚动高度
     */
    getScrollTop(): number
  }
  // 验证
  regExp: {
    /**
     * 获取正则表达式
     * @param key 要获取的正则表达式名称
     */
    getExp(key: string): RegExp
  }
  // http
  http: {

  }
}
