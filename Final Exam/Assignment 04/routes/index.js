const express = require('express');
const router = express.Router();

const products = [
    { name: 'Oxford Shoe', price: 120 },
    { name: 'Chelsea Boot', price: 150 },
    { name: 'Loafer', price: 110 }
];

// Middleware to protect routes
function isAuth(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/auth/login');
}

router.get('/', (req, res) => {
    res.render('index', { products });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/products', (req, res) => {
    res.render('products', { products });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
