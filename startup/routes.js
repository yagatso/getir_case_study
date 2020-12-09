const express = require('express');
const records = require('../routes/records');

module.exports = function(app) {
	app.use(express.json());
	app.use('/', records);
}

