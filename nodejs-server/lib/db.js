// MongoDB Connection

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var db = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/ACMEWarehouse';

// Use connect method to connect to the Server
var collections = ["product", "order"]
var db = require("mongojs").connect(url, collections);

module.exports = {
	product: db.product,
	order: db.order
};
