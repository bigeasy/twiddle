require('proof')(1, require('cadence')(prove))

function prove (async, assert) {
    function Bogus () {
    }
    Bogus.prototype.next = function (callback) {
        callback(new Error('bogus'))
    }
    Bogus.prototype.unlock = function (callback) {
    }
    var twiddle = require('../..'), advance = require('advance'),
        records = [], keys = [], iterator
    iterator = new Bogus
    iterator = twiddle(iterator, function () {})
    async([function () {
        iterator.unlock(async())
    }], [function () {
        iterator.next(async())
    }, function (_, error) {
        assert(error.message, 'bogus', 'records')
    }])
}
