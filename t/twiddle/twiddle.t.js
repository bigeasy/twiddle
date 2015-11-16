require('proof')(1, require('cadence')(prove))

function prove (async, assert) {
    var twiddle = require('../..')
    var advance = require('advance')
    var values = [], iterator
    iterator = advance.forward(null, [ 1, 2, 3 ])
    iterator = twiddle(iterator, function (item) { return item + 1 })
    async([function () {
        iterator.unlock(async())
    }], function () {
        var loop = async(function () {
            iterator.next(async())
        }, function (more) {
            if (!more) return [ loop.break ]
            var got
            while (got = iterator.get()) {
                values.push(got)
            }
        })()
    }, function () {
        assert(values, [ 2, 3, 4 ], 'twiddled')
    })
}
