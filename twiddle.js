module.exports = function (source, twiddle) {
    const iterator = {
        done: false,
        type: source.type,
        next (promises, consume, terminator = iterator) {
            source.next(promises, items => {
                consume(twiddle(items))
            }, terminator)
        }
    }
    return iterator
}
