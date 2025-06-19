const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail: String,
  product: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model('Order', orderSchema);
