import express from "express";
// import products from '../data/products.js';
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from '../models/productModel.js';

const router = express.Router();

import { createProduct, deleteProduct, getProductById, getProducts, updateProduct, createProductReview, getTopProducts } from "../controllers/productController.js";
import {protect, admin} from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';
// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async (req, res) => {
//     // const product = products.find((p) => p._id === req.params.id)
//     const product = await Product.findById(req.params.id);

//     if(product){
//         res.json(product);
//     }else{
//         res.status(404);
//         throw new Error('Resource not found')
//     }

// }));

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, checkObjectId, updateProduct).delete(protect, admin, checkObjectId, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;