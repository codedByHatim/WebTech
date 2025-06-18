const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Session setup
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false
}));

// Routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
const auth = require('./middleware/authMiddleware');

app.use(authRoutes);
app.use(orderRoutes);

// Protected dashboard
app.get('/dashboard', auth, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});

// Home
app.get('/', (req, res) => {
  res.redirect('/login');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
