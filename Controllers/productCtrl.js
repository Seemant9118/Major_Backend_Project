const Product = require("../Models/Product");
const expressAsyncHandler = require('express-async-handler');
const validateMongoId = require("../util/validateMongoId");



//Create Product 
const createProductCtrl = expressAsyncHandler(async(req, res)=>{
    try {
        const product = await Product.create({
            product_name: req?.body?.product_name,
            price: req?.body?.price,
            // owner: req?.body?.owner,
            description: req?.body?.description,
            image: req?.body?.image,
            isActive: req?.body?.isActive,
        });
        res.json(product);
        // res.send('success');
    } catch (error) {
        res.json(error);
    }
});

//Fetch all products
const fetchAllProductsCtrl = expressAsyncHandler(async(req, res)=>{
    try {
        const fetchProducts = await Product.find({})
        res.json(fetchProducts);        
    } catch (error) {
        res.json(error);
    }
});

//Fetch single product
const fetchProductCtrl = expressAsyncHandler(async(req, res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try {
        const fetchProduct = await Product.findById(id);
        res.json(fetchProduct);
    } catch (error) {
        res.json(error);
    }
});

//Update Product
const updateProductCtrl = expressAsyncHandler(async(req, res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            product_name: req?.body?.product_name,
            price: req?.body?.price,
            description: req?.body?.description,
            image: req?.body?.image,
            isActive: req?.body?.isActive,
        }, {new: true})
        res.json(updatedProduct);
    } catch (error) {
        res.json(error);
    }
});

//Delete Product
const deleteProductCtrl = expressAsyncHandler(async(req, res)=>{
    const {id} = req.params;
    validateMongoId(id);
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.json(deletedProduct);
    } catch (error) {
        res.json(error);
    }
})

module.exports = {
    createProductCtrl, 
    fetchAllProductsCtrl,
    fetchProductCtrl,
    updateProductCtrl,
    deleteProductCtrl,
};