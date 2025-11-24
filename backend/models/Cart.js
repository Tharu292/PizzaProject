const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  size: String,
  crust: String,
  toppings: [String],
  quantity: Number,
  totalPrice: Number
});

const cartSchema = new Schema({
  items: [cartItemSchema],
  total: Number
});

module.exports = mongoose.model('Cart', cartSchema);