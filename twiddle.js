module.exports = function (untwiddled, twiddle) {
    const iterator = {
        done: false,
        next (promises, consume, terminator = iterator) {
            untwiddled.next(promises, items => {
                consume(twiddle(items))
            }, terminator)
        }
    }
    return iterator
}
