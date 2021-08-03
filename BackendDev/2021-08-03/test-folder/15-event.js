const EventEmitter = require('events');
const instEvEmitter = new EventEmitter();


// console.log(instEvEmitter);

instEvEmitter.on('start', ()=>{
    console.log('Data received.')
})

instEvEmitter.on('start', (a, b)=>{
    console.log('Addition of argument.')
    console.log(` a + b is equal to ${a + b}.`);
})

instEvEmitter.emit('start', 3, 4);
