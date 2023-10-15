const express = require('express');
const router = express.Router();

// Example data model
const vendors = [
    {
        id: 1,
        name: 'EcoWear',
        products: [1], // array of product IDs
    },
    // ... more vendors
];

// Fetch all vendors
router.get('/', (req, res) => {
    res.json(vendors);
});

// Fetch specific vendor
router.get('/:id', (req, res) => {
    const vendor = vendors.find(v => v.id === parseInt(req.params.id));
    if (!vendor) return res.status(404).send('Vendor not found.');
    res.json(vendor);
});

module.exports = router;
