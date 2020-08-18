function Twiddle {
    constructor (collection, twiddle) {
        this._outer = collection[Symbol.asyncIterator]()
        this._inner = null
        this._twiddle = twiddle
    }

    async next () {
        const inner = this._outer.next()
        if (inner.done) {
            return { done: true, value: null }
        }
        return {
            done: false,
            value: next.value.map(item => this._twiddle.call(null, item))
        }
    }

    return () {
        this._outer['return']()
    }
}

module.exports = Twiddle
