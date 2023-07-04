const express = require('express');

const friendsRouter = require('./routes/friends.router')

const messagessRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
});

app.use(express.json());

//Routers


//Mounting a router
app.use('/friends', friendsRouter);
app.use('/messages', messagessRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});