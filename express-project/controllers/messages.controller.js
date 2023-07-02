function getMessages(req, res) {
    res.send('<ul><li>Hey there!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}