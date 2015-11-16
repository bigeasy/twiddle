require('proof')(1, require('cadence')(prove))

function prove (async, assert) {
    var twiddle = require('../..')
    var advance = require('advance')
    var records = [], keys = [], iterator
    function Bogus () {
    }
    Bogus.prototype.next = function (callback) {
        callback(new Error('bogus'))
    }
    Bogus.prototype.unlock = function (callback) {
    }
    iterator = new Bogus
    iterator = twiddle(iterator, function () {})
    async([function () {
        iterator.unlock(async())
    }], [function () {
        iterator.next(async())
    }, function (error) {
        assert(error.message, 'bogus', 'records')
    }])
}
