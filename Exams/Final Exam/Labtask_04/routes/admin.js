const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Order = require('../models/order');
const adminMiddleware = require('../middleware/admin');

// GET: List Products
router.get('/products', adminMiddleware, async (req, res) => {
  const products = await Product.find();
  res.render('admin/products', { products });
});

// GET: Add Product Form
router.get('/products/add', adminMiddleware, (req, res) => {
  res.render('admin/add-product');
});

// POST: Add Product
router.post('/products/add', adminMiddleware, async (req, res) => {
  const { title, price, description, imageUrl } = req.body;
  await new Product({ title, price, description, imageUrl }).save();
  res.redirect('/admin/products');
});

// GET: Edit Product Form
router.get('/products/edit/:id', adminMiddleware, async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('admin/edit-product', { product });
});

// POST: Edit Product
router.post('/products/edit/:id', adminMiddleware, async (req, res) => {
  const { title, price, description, imageUrl } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { title, price, description, imageUrl });
  res.redirect('/admin/products');
});

// POST: Delete Product
router.post('/products/delete/:id', adminMiddleware, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/admin/products');
});

// GET: View Orders
router.get('/orders', adminMiddleware, async (req, res) => {
  const orders = await Order.find().populate('userId').populate('items.productId');
  res.render('admin/orders', { orders });
});

module.exports = router;
