const path  = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: "Messages to friends",
        friend: "Elon Musk",
    })
   // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'smile.png'));
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}