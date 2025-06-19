const Vehicle = require('../models/Vehicle');
const path = require('path');

// Show all
exports.getAll = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.render('vehicles/index', { vehicles });
};

// Form to add new
exports.newForm = (req, res) => {
  res.render('vehicles/new');
};

// Create
exports.create = async (req, res) => {
  const { name, brand, price, type } = req.body;
  const image = req.file ? '/uploads/' + req.file.filename : '';
  await Vehicle.create({ name, brand, price, type, image });
  res.redirect('/admin/vehicles');
};

// Form to edit
exports.editForm = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.render('vehicles/edit', { vehicle });
};

// Update
exports.update = async (req, res) => {
  const { name, brand, price, type } = req.body;
  const updateData = { name, brand, price, type };
  if (req.file) {
    updateData.image = '/uploads/' + req.file.filename;
  }
  await Vehicle.findByIdAndUpdate(req.params.id, updateData);
  res.redirect('/admin/vehicles');
};

// Delete
exports.delete = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.redirect('/admin/vehicles');
};
