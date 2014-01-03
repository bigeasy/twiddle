require('proof')(1, function (step, equal) {
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
    step(/* [function () {
        iterator.unlock()
    }], */[function () {
        iterator.next(step())
    }, function (_, error) {
        equal(error.message, 'bogus', 'records')
    }])
})
