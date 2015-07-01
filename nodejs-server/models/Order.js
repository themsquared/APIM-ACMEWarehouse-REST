var db = require('./db.js');
var mongoose = db.mongoose;

var shortid = require("shortid");

var orderSchema = mongoose.Schema({
    	_id_: String,
	accountid: Number,
	amount: Number,
	productid: Number,
	price: Number
});

var Order = mongoose.model('Orders', orderSchema);

module.exports = {
	// Get all orders
	getAll: function(callback) 
	{
		Order.find(function (err, orders) {
  			if (err) {
				callback(err,null);
				return;
			}
  			callback(null,orders);
		});
	},

	// Generate a new order in the db and return the ID for working with 
	getNew: function(callback) 
	{
		var id = shortid.generate();
		var newOrder = new Order({_id_:id});
		newOrder.save();
		callback(null,{_id_:newOrder._id_});
	},

	// Add a new order based on an existing order ID
	addOrder: function(order, callback)
	{
		Order.findOneAndUpdate({_id_:order._id_},{productid: order.productid, amount: order.amount, price: order.price}, function(err, order) {
			callback(err,order);
		});     	
	}
}	
