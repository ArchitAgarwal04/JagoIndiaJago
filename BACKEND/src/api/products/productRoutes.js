import express from 'express';
import { searchProducts, getProductByBarcode } from './productController.js';

const router = express.Router();

router.get('/search', searchProducts);
router.get('/:barcode', getProductByBarcode);

export default router;