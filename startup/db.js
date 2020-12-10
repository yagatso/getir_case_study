const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function () {
    mongoose
        .connect(process.env.db, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(console.log('connected to db successfully'))
            .catch(err => { console.err(err.message);
     });
}