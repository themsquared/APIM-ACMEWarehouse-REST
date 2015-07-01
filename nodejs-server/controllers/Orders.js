'use strict';

var url = require('url');


var Orders = require('./OrdersService');

module.exports.orderGet = function orderGet (req, res, next) {
    Orders.orderGet(function(err,result){
        if(typeof result !== 'undefined') {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result || {}, null, 2));
        }
        else
                res.end();
    });
};

module.exports.orderNewGet = function orderNewGet (req, res, next) {
  Orders.orderNewGet(function(err,result){
  	if(typeof result !== 'undefined') {
    		res.setHeader('Content-Type', 'application/json');
  	 	res.end(JSON.stringify(result || {}, null, 2));
  	}
  	else
    		res.end();
  });
};

module.exports.orderOrderidPut = function orderOrderidPut (req, res, next) {
  var orderid = req.swagger.params['orderid'].value; 

  var order = req.swagger.params['order'].value; 
  order._id_ = orderid;

  Orders.orderOrderidPut(order,function(err,result){
        if(typeof result !== 'undefined') {
                res.setHeader('Content-Type', 'application/json');
                res.end("");
        }
        else
                res.end();
  });
};
