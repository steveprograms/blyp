var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var productSchema = mongoose.Schema({
  id: {type: String, unique: true},
  sku: String,
  business: String,
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  name: String,
  categories: Array,
  image: String,

  //Can contain an arbritray number of details. i.e. Album, Artist etc. 
  details: Schema.Types.Mixed
  },
  {
    timestamps: true
  });

productSchema.plugin(uniqueValidator);
var Product = mongoose.model('Product', productSchema);

module.exports = Product;