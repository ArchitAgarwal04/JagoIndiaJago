import { searchFoodProducts, getProductDetails } from '../../services/productService.js';
import { saveSearchHistory } from '../../services/searchHistoryService.js';

export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const results = await searchFoodProducts(query);
    res.json(results);
  } catch (error) {
    console.error('Search Error:', error);
    res.status(503).json({ 
      error: 'Service temporarily unavailable. Please try again later.' 
    });
  }
};

export const getProductByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;
    const userId = req.auth?.userId;
    
    // Validate barcode format
    if (!/^\d{8,13}$/.test(barcode)) {
      return res.status(400).json({ 
        error: 'Invalid barcode format. Must be 8-13 digits.' 
      });
    }

    const product = await getProductDetails(barcode);
    
    if (userId) {
      await saveSearchHistory(userId, product);
    }

    res.json(product);
    
  } catch (error) {
    console.error('Product Detail Error:', error);
    
    if (error.message === 'Product not found') {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.status(500).json({ error: 'Failed to get product details' });
  }
};