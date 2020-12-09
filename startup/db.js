const mongoose = require('mongoose');
require('dotenv').config();


module.exports = function () {
    const db = process.env.db;
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected'))
}