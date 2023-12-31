const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe, Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations! You are the best!');
    }
});

//Subscribe, Observer 2
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('I could have better');
    }
});

process.on('exit', (code) =>{
    console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');