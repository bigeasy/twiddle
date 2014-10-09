require('proof')(1, require('cadence')(function (step, assert) {
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
    step([function () {
        iterator.unlock(step())
    }], [function () {
        iterator.next(step())
    }, function (_, error) {
        assert(error.message, 'bogus', 'records')
    }])
}))
