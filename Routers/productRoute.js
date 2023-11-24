const express = require('express');
const {createProductCtrl, fetchAllProductsCtrl, fetchProductCtrl} = require('../Controllers/productCtrl');

const productRouters = express.Router();


productRouters.post('/create', createProductCtrl);
productRouters.get('/', fetchAllProductsCtrl);
productRouters.get('/:id', fetchProductCtrl);


module.exports = productRouters;