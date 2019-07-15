/* ------------------------------------------ loader加载器 ------------------------------------------ */
const loader: Utils['loader'] = {
  loadImg(imgEle: string | HTMLImageElement) {
    // 如果传过来的是个字符串，则创建image对象去加载
    if (typeof imgEle === 'string') {
      const src = imgEle;
      imgEle = new Image();
      imgEle.src = src;
    }
    return new Promise((resolve, reject) => {
      if ((imgEle as HTMLImageElement).complete) {
        // 已经加载完成
        resolve();
      } else {
        // 还没加载完成
        // 加载完成
        (imgEle as HTMLImageElement).onload = () => {
          resolve();
        };
        // 加载失败
        (imgEle as HTMLImageElement).onerror = () => {
          reject();
        };
      }
    });
  },
  loadImgs(imgList: HTMLImageElement[] | string[] | string) {
    // 非数组转成数组
    if (imgList.constructor !== Array) {
      imgList = [imgList as string];
    }
    // 遍历需要加载的图片列表，生成promise列表
    const promiseList: any[] = [];
    (imgList as any[]).forEach((item: any) => {
      promiseList.push(this.loadImg(item));
    });
    // 返回同时加载的promise
    return Promise.all(promiseList);
  },
  delayPromise(delay?: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay || 300);
    });
  },
};

export default loader;
