/* ------------------------------------------ ui相关工具类 ------------------------------------------ */
export const getClientWidth = (): number => {
  let clientWidth = 0;
  if (document.compatMode === 'CSS1Compat') {
    clientWidth = document.documentElement.clientWidth;
  } else {
    clientWidth = document.body.clientWidth;
  }
  return clientWidth;
}

export const getClientHeight = (): number => {
  let clientHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    clientHeight = document.documentElement.clientHeight;
  } else {
    clientHeight = document.body.clientHeight;
  }
  return clientHeight;
}

export const getScrollHeight = (): number => {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0
      ? bodyScrollHeight
      : documentScrollHeight;
  return scrollHeight;
}

export const getScrollTop = (): number => {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

const ui: Utils['ui'] = {
  getClientWidth,
  getClientHeight,
  getScrollHeight,
  getScrollTop
};
export default ui;
