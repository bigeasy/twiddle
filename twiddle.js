module.exports = function (paginator, twiddle) {
    const outer = paginator[Symbol.asyncIterator]()
    return {
        [Symbol.asyncIterator]: function () {
            return this
        },
        next: async function () {
            const inner = await outer.next()
            if (inner.done) {
                return { done: true, value: null }
            }
            return {
                done: false,
                value: inner.value.map(item => twiddle(item))
            }
        }
    }
}
