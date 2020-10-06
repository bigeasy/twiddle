require('proof')(1, async okay => {
    const advance = require('advance')
    const twiddle = require('..')
    const gathered = [], promises = []
    const iterator = twiddle(advance.forward([[ 1, 2, 3 ]]), items => {
        return items.map(item => item + 1)
    })
    while (! iterator.done) {
        iterator.next(promises, items => {
            for (const item of items) {
                gathered.push(item)
            }
        })
        while (promises.length != 0) {
            await promises.shift()
        }
    }
    okay(gathered, [ 2, 3, 4 ], 'twiddle')
})
