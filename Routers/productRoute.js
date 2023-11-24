const express = require('express');
const {createProductCtrl, fetchAllProductsCtrl, fetchProductCtrl, updateProductCtrl, deleteProductCtrl} = require('../Controllers/productCtrl');

const productRouters = express.Router();


productRouters.post('/create', createProductCtrl);
productRouters.get('/', fetchAllProductsCtrl);
productRouters.get('/:id', fetchProductCtrl);
productRouters.put('/update/:id', updateProductCtrl);
productRouters.delete('/delete/:id', deleteProductCtrl);

module.exports = productRouters;