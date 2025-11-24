const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  basePrice: Number,
  sizes: [{ name: String, price: Number }],
  crusts: [{ name: String, price: Number }],
  toppings: [{ name: String, price: Number }]
});

module.exports = mongoose.model('Product', productSchema);