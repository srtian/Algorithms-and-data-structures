/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/')
    let stack = []
    for(let val of arr) {
        if(val === '.' || val === '') {
            continue
        } else if(val === '..') {
            stack.pop()
        } else {
            stack.push(val)
        }
    }
    return `/${stack.join('/')}`
};