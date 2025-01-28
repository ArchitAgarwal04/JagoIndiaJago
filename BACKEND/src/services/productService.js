import { searchOpenFoodProducts, getProductByBarcode } from '../utils/openFoodApi.js';

export const searchFoodProducts = async (query, options = {}) => {
  const results = await searchOpenFoodProducts(query, options);
  return {
    products: results.products.map(formatProduct),
    count: results.count,
    page: results.page,
    pageSize: results.pageSize
  };
};

const formatProduct = (product) => ({
  id: product._id,
  name: product.product_name,
  brand: product.brands,
  image: product.image_url,
  nutrients: {
    calories: product.nutriments['energy-kcal_100g'],
    protein: product.nutriments.proteins_100g,
    carbs: product.nutriments.carbohydrates_100g,
    fat: product.nutriments.fat_100g,
  },
  ingredients: product.ingredients_text,
  allergens: product.allergens,
  servingSize: product.serving_size,
});

export const getProductDetails = async (barcode) => {
  const result = await getProductByBarcode(barcode);
  const product = result.product;
  
  return {
    id: product._id,
    name: product.product_name,
    brand: product.brands,
    image: product.image_url,
    nutrients: {
      calories: product.nutriments['energy-kcal_100g'],
      protein: product.nutriments.proteins_100g,
      carbs: product.nutriments.carbohydrates_100g,
      fat: product.nutriments.fat_100g,
    },
    ingredients: product.ingredients_text,
    allergens: product.allergens,
    servingSize: product.serving_size,
  };
};