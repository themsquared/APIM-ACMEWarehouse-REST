'use strict';

exports.orderGet = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "accountid" : 123,
  "amount" : 123,
  "productid" : 123,
  "orderid" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.orderNewGet = function() {

  var examples = {};
  
  examples['application/json'] = "{}";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.orderOrderidPut = function(orderid) {

  var examples = {};
  

  
}
