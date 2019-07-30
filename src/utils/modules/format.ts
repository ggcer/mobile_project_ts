/* ------------------------------------------ format格式化工具 ------------------------------------------ */
const format: Utils['format'] = {
  strToDate(str: string): Date {
    return new Date(str.replace(/\.|-/g, '/'));
  },
  dateToStr(date: Date, pattern?: string): string {
    if (!pattern) {
      pattern = 'yyyy-MM-dd HH:mm:ss'
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    };
    if (/(y+)/.test(pattern)) {
      pattern = pattern.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(pattern)) {
        const v = (o as any)[k];
        pattern = pattern.replace(RegExp.$1, (RegExp.$1.length === 1) ? v : (('00' + v).substr(('' + v).length)));
      }
    }
    return pattern;
  }
}

export default format
