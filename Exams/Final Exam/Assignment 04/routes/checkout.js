const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Cart = require('../models/cart');

router.get('/', (req, res) => {
  if (!req.session.cart) return res.redirect('/cart');
  let cart = new Cart(req.session.cart);
  res.render('checkout', { total: cart.totalPrice });
});

router.post('/', async (req, res) => {
  if (!req.session.cart) return res.redirect('/cart');

  const cart = new Cart(req.session.cart);
  const { name, phone, address } = req.body;

  const order = new Order({
    name,
    phone,
    address,
    cart: cart,
    totalPrice: cart.totalPrice,
  });

  await order.save();
  req.session.cart = null;
  res.render('success');
});

module.exports = router;
