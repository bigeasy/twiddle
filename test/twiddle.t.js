require('proof')(1, async okay => {
    const advance = require('advance')
    const twiddle = require('..')
    const gathered = []
    for await (const items of twiddle(advance.forward([[ 1, 2, 3 ]]), item => item + 1)) {
        for (const item of items) {
            gathered.push(item)
        }
    }
    okay(gathered, [ 2, 3, 4 ], 'twiddle')
})
