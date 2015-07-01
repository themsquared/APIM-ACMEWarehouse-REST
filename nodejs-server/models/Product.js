var db = require('./db.js');
var mongoose = db.mongoose;

var productSchema = mongoose.Schema({
    	_id_: Number,
	name: String,
	quantity: Number
});

var Product = mongoose.model('Products', productSchema);

module.exports = {
	getAll: function(callback) 
	{
		Product.find(function (err, products) {
  			if (err) {
				callback(err,null);
				return;
			}
  			callback(null,products);
		});
	},
	getById: function(id, callback) 
	{
		Product.find({_id_:id}, function(err, products){
			if (err) 
                                callback(err,null);
                        callback(null,products);
		});
	}
}	
