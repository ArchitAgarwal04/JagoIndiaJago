import axios from 'axios';

const OPENFOOD_BASE_URL = 'https://world.openfoodfacts.org/cgi';
const TIMEOUT = 1000;
const RETRY_ATTEMPTS = 3;

const api = axios.create({
  baseURL: OPENFOOD_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'User-Agent': 'JagoIndiaJago - Node.js - Version 1.0',
    'Accept': 'application/json'
  }
});

const validateProduct = (product) => {
  if (!product) throw new Error('Invalid product data');
  
  // Required fields
  const required = ['_id', 'product_name', 'nutriments'];
  for (const field of required) {
    if (!product[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  return true;
};

export const getProductByBarcode = async (barcode) => {
  try {
    const response = await api.get(`/api/v2/product/${barcode}.json`);
    return response.data;
  } catch (error) {
    console.error('Barcode Error:', error);
    throw new Error('Product not found');
  }
};

export const searchOpenFoodProducts = async (query) => {
  let lastError;

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    try {
      const response = await api.get('/search.pl', {
        params: {
          search_terms: query,
          search_simple: 1,
          action: 'process',
          json: 1,
          page_size: 24
        }
      });

      if (response.data?.products) {
        return {
          products: response.data.products,
          count: response.data.count || 0
        };
      }

      throw new Error('Invalid response format');
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed: ${error.message}`);
      
      if (attempt === RETRY_ATTEMPTS) {
        throw new Error(`Failed to fetch products after ${RETRY_ATTEMPTS} attempts`);
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
};

function formatSearchParams(filters = {}) {
  const params = {};
  if (filters.category) {
    params.tagtype_0 = 'categories';
    params.tag_contains_0 = 'contains';
    params.tag_0 = filters.category;
  }
  return params;
}