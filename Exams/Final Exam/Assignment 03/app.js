const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB (cleaned up without deprecated options)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false
}));

// EJS and Layouts
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

// Routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
