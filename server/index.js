const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/products');
const vendorRoutes = require('./routes/vendors');
const transactionRoutes = require('./routes/transactions');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
