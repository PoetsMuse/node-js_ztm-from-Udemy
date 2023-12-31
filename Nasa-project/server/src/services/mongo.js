const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://nasa-api:61UgB2ot84HdnAI1@learnnodejs.cs6aqzt.mongodb.net/nasa?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MongoDB connection set!!!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}