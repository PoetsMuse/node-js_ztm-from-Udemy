const express = require('express');

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
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(9000);
    res.send('Ring! Ring! Ring!');
});

app.listen(3000);
