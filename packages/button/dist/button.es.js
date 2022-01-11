const getTime = () => {
  return Date.now();
};
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (const item of ca) {
    let c = item;
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
};
const testUa = (reg) => new RegExp(reg.toLowerCase()).test(navigator.userAgent.toLowerCase());
const getUserAgent = () => navigator.userAgent;
const isIOS = () => testUa("iP(hone|od|ad)");
const isIPhone = () => testUa("iP(hone|od)");
const isIPad = () => testUa("iPad");
const isAndroid = () => testUa("Android");
const isWechat = () => testUa("micromessenger");
const isQQ = () => testUa("QQ");
const isWeibo = () => testUa("weibo");
export { getCookie, getTime, getUserAgent, isAndroid, isIOS, isIPad, isIPhone, isQQ, isWechat, isWeibo };
