const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/my-orders', auth, async (req, res) => {
  const orders = await Order.find({ userEmail: req.session.user });
  res.render('orders', { orders });
});

module.exports = router;
