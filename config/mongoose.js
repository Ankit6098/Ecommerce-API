const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Create a connection object
const db = mongoose.connection;

// error handler
db.on('error', console.error.bind(console, 'connection error:'));

// open connection
db.once('open', (err) => {
    console.log('Connected to MongoDB');
});