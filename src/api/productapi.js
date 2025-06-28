// src/api/productApi.js
import instance from './baseApi';

// 🛍 Get all products
export const fetchAllProducts = async () => {
  const res = await instance.get('/products');
  return res.data.products;
};

// 📚 Get all categories
export const fetchCategories = async () => {
  const res = await instance.get('/products/categories');
  return res.data;
};

// 📦 Get products by category
export const fetchProductsByCategory = async category => {
  try {
    const res = await instance.get(`/products/category/${category}`);
    return res.data?.products ?? []; // ✅ Always return an array
  } catch (err) {
    console.log('API error:', err.message);
    return []; // ✅ Fallback to empty array on error
  }
};

// 🔍 Get product by ID
export const fetchProductById = async id => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};
export const fetchRecommendedProducts = async () => {
  const res = await instance.get('/products?limit=10');
  return res.data.products; // because the response has a "products" array
};
