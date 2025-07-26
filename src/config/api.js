import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (category = '') => {
  try {
    const url = category ? `${API_BASE_URL}/products/category/womens-jewellery${category}` : `${API_BASE_URL}/products`;
    const response = await axios.get(url);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};