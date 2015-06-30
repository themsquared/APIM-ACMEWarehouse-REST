'use strict';

var url = require('url');


var Orders = require('./OrdersService');


module.exports.orderGet = function orderGet (req, res, next) {
  

  var result = Orders.orderGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.orderNewGet = function orderNewGet (req, res, next) {
  

  var result = Orders.orderNewGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.orderOrderidPut = function orderOrderidPut (req, res, next) {
  var orderid = req.swagger.params['orderid'].value;
  

  var result = Orders.orderOrderidPut(orderid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
