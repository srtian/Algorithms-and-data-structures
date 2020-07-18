const news = function(ctor, ...args) {
    let obj = new Object()
    obj.__proto__ = Object.create(ctor.prototype)
    const result = ctor.apply(obj, ...args)
    return typeof ctor ==='object' ? result : obj
}
const create = function(proto) {
    function F() {}
    F.prototype = proto
    return F
}

const bind = function(ctx, ...args) {
    const self = this
    const bound = function() {
        self.apply(this instanceof self ? this : ctx, args.concat(Array.prototype.slice.call(arguments)))
    }
    bound = Object.create(this.prototype)
    return bound
}

const apply = function(ctx, args) {
    const that = ctx || window
    that.fn = this
    var result = eval('that.fn(args)')
    delete that.fn
    return result
}

const debounce = (fn, delay) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const bigNumberAdd = (a, b) => {
    const maxLength = Math.max(a.length, b.length)
    a = a.padStart(maxLength, 0)
    b = b.padStart(maxLength, 0)
    let f = 0
    let t = 0
    let sum
    for(let i = 0; i < maxLength; i++) {
        t = a[i] + b[i] + f
        f = Math.floor(t % 10)
        sum = t % 10 + sum
    }
    if(f == 1) {
        sum = "1" + sum
    }
    return sum
}