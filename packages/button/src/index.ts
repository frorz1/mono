export const getTime = () => {
  return Date.now()
}

export const getCookie = (name: string) => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (const item of ca) {
    let c = item
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return ''
}

const testUa = (reg: string) =>
  new RegExp(reg.toLowerCase()).test(navigator.userAgent.toLowerCase())

export const getUserAgent = () => navigator.userAgent

export const isIOS = () => testUa('iP(hone|od|ad)')

export const isIPhone = () => testUa('iP(hone|od)')

export const isIPad = () => testUa('iPad')

export const isAndroid = () => testUa('Android')

export const isWechat = () => testUa('micromessenger')

export const isQQ = () => testUa('QQ')

export const isWeibo = () => testUa('weibo')