const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received ${name} and ${age}`)
})
// We can call as many responses to the same emit
customEmitter.on('response', (name, age) => {
    console.log(`some other logic`)
})

// must be emitted AFTER we're listening for it
customEmitter.emit('response', 'john', 35)