const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const auth = require('../middlewares/authMiddleware');
const vehicleCtrl = require('../controllers/vehicleController');

// Admin Routes
router.get('/admin/vehicles', auth, vehicleCtrl.getAll);
router.get('/admin/vehicles/new', auth, vehicleCtrl.newForm);
router.post('/admin/vehicles', auth, upload.single('image'), vehicleCtrl.create);
router.get('/admin/vehicles/:id/edit', auth, vehicleCtrl.editForm);
router.post('/admin/vehicles/:id', auth, upload.single('image'), vehicleCtrl.update);
router.post('/admin/vehicles/:id/delete', auth, vehicleCtrl.delete);

const Vehicle = require('../models/Vehicle');

// Public route to get all vehicles
router.get('/api/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
