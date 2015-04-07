function Twiddle (iterator, twiddle) {
    this._iterator = iterator
    this._twiddle = twiddle
}

Twiddle.prototype.next = function (callback) {
    this._iterator.next(callback)
}

Twiddle.prototype.get = function () {
    var twiddle = this._twiddle
    var got = this._iterator.get()
    if (got != null) {
        return twiddle(got)
    }
    return got
}

Twiddle.prototype.unlock = function (callback) {
    this._iterator.unlock(callback)
}

module.exports = function (iterator, twiddle) {
    return new Twiddle(iterator, twiddle)
}
