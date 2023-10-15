const express = require('express');
const router = express.Router();

// Example data model
const products = [
    {
        id: 1,
        name: 'Organic T-Shirt',
        vendor: 'EcoWear',
        ecoRating: 5
    },
    // ... more products
];

// Fetch all products
router.get('/', (req, res) => {
    res.json(products);
});

// Fetch specific product
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    res.json(product);
});

module.exports = router;
