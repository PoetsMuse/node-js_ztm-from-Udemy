const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    }
]
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain',
    // });
    // res.end('Hello! Sir Isaac Newton is your friend!');
    server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res); // pipe converts readable into writeable
    }else if (req.method === 'GET' && items[1] === 'friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3){
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        }else{
            res.end(JSON.stringify(friends));
        }
       
    }else if (req.method === 'GET' && items[1] === 'messages'){
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>How are you doing?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
});  //127.0.0.1 => localhost