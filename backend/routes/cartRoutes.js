const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// GET cart
router.get('/', async (req, res) => {
  try {
    const cart = await Cart.findOne(); // Assume one cart for simplicity
    res.json(cart || { items: [], total: 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add to cart
router.post('/add', async (req, res) => {
  // Logic: Find or create cart, add item, calculate price
  // For example:
  let cart = await Cart.findOne();
  if (!cart) cart = new Cart({ items: [], total: 0 });
  cart.items.push(req.body); // req.body = { productId, size, etc. }
  cart.total += req.body.totalPrice * req.body.quantity; // Simple calc
  await cart.save();
  res.json(cart);
});

module.exports = router;