/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1'
  const recv = a => {
    let m = 1
    let res = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        m++
      } else {
        res = res + m + a[i]
        m = 1
      }
    }
    n--
    return n === 1 ? res : recv(res)
  }
  return recv('1')
}
