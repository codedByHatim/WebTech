const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // if needed
const Cart = require('../models/cart');

router.get('/add/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.add(product, product._id);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/', (req, res) => {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  res.render('cart', { cart: cart });
});

router.post('/update', (req, res) => {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.update(req.body.id, parseInt(req.body.qty));
  req.session.cart = cart;
  res.redirect('/cart');
});

router.post('/remove', (req, res) => {
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.remove(req.body.id);
  req.session.cart = cart;
  res.redirect('/cart');
});

module.exports = router;
