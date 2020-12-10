const mongoose = require('mongoose');

const Record = mongoose.model('Record', new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
}));

exports.Record = Record;
