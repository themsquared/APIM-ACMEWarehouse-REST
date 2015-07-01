'use strict';

var Product = require('../models/Product.js');

exports.productsGet = function(callback) {
  	Product.getAll(function(err, products){
  		callback(err, products);
  	});
}

exports.productsProductIDGet = function(productID,callback) {
	Product.getById(productID, function(err,products) {
		callback(err,products);
	}); 
}
