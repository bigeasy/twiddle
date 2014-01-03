function Twiddle (iterator, fixup) {
    this._iterator = iterator
    this._fixup = fixup
}

Twiddle.prototype.next = function (callback) {
    var fixup = this._fixup
    this._iterator.next(function (error, record, key) {
        if (error) callback(error)
        else fixup(record, key, callback)
    })
}

Twiddle.prototype.unlock = function () {
    this._iterator.unlock()
}

module.exports = function (iterator, fixup) {
    return new Twiddle(iterator, fixup)
}
