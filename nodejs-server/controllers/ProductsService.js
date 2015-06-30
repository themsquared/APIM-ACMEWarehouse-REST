'use strict';

exports.productsGet = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "product_id" : 123,
  "available" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.productsProductIDGet = function(productID) {

  var examples = {};
  
  examples['application/json'] = [ {
  "product_id" : 123,
  "available" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
