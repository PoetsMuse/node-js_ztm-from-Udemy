const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is blocked...

    }
}

app.get('/', (req, res) => {

  //slow / blocking functions / influencing performance  

    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    //[5, 9, 7, 6, 8].sort()
    //key derivation functions crypto...
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(9000);
    res.send(`Ring! Ring! Ring! ${process.pid}`);
});

//for master and forks the same file and code is run: server.js
console.log('Running server.js...');
if (cluster.isMaster){
    console.log('Master has been started...');
    cluster.fork();
    cluster.fork();
} else {
    console.log('Worker process started...');
    app.listen(3000);
}


