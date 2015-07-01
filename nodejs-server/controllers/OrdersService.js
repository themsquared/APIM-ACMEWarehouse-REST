'use strict';

var Order = require('../models/Order.js');

exports.orderGet = function(callback) {
	Order.getAll(function(err,orders){
                callback(err,orders);
        });  
}

exports.orderNewGet = function(callback) {
	Order.getNew(function(err,newOrder){
		callback(err,newOrder);
	});
}

exports.orderOrderidPut = function(order, callback) {
	Order.addOrder(order,function(err,newOrder) {
		callback(err,newOrder);
	});
}
