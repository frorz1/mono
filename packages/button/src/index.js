import _ from 'loadsh'

export const getTime = () => {
  return _.now()
}

export const getCookie = (name) => {
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