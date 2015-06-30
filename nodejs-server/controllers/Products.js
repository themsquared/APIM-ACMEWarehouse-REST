'use strict';

var url = require('url');


var Products = require('./ProductsService');


module.exports.productsGet = function productsGet (req, res, next) {
  

  var result = Products.productsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.productsProductIDGet = function productsProductIDGet (req, res, next) {
  var productID = req.swagger.params['productID'].value;
  

  var result = Products.productsProductIDGet(productID);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
