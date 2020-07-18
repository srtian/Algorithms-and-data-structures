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