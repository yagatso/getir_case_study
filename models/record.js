const mongoose = require('mongoose');

const Record = mongoose.model('record', new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
}));

exports.Record = Record;
