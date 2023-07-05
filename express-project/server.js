const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router')

const messagessRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
});


app.use('/site', express.static(path.join(__dirname,'public')));
app.use(express.json());

//Routers

//Mounting a router
app.get('/', (req, res) => {
    res. render('index.hbs', {
        title: "Serving websited with node, express, routes",
        caption: "Smile Often!!",
    });
})
app.use('/friends', friendsRouter);
app.use('/messages', messagessRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});