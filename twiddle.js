module.exports = function (inner, twiddle) {
    const iterator = {
        done: false,
        next (promises, consume, terminator = iterator) {
            inner.next(promises, items => {
                consume(twiddle(items))
            }, terminator)
        }
    }
    return iterator
}
