const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },       // 🧠 Matches your EJS
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
