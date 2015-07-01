var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ACMEWarehouse');

module.exports.mongoose = mongoose;
