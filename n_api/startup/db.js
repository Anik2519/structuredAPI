const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/n_api')
    .then(() => winston.info('Connected to MongoDB...'));
}