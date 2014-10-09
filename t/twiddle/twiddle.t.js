require('proof')(2, require('cadence')(function (step, assert) {
    var twiddle = require('../..'), advance = require('advance'),
        records = [], keys = [], iterator
    iterator = advance([ 1, 2, 3 ], function (element, callback) {
        callback(null, element, element)
    })
    iterator = twiddle(iterator, function (record, key, callback) {
        callback(null, record + 1, key * 2)
    })
    step([function () {
        iterator.unlock(step())
    }], function () {
        step(function () {
            iterator.next(step())
        }, function (record, key) {
            if (record && key) {
                records.push(record)
                keys.push(key)
            } else {
                return [ step ]
            }
        })()
    }, function () {
        assert(records, [ 2, 3, 4 ], 'records')
        assert(keys, [ 2, 4, 6 ], 'keys')
    })
}))
