const path  = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'smile.png'));
    // res.send('<ul><li>Hey there!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}