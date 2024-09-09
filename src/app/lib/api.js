import axios from 'axios';

const API_URL = 'http://20.198.254.137:1337/api';
const TOKEN = '2e43ac089dd70dac30cd66bdf5a086dcd5f1b797855015c47fc12df18f15342f2e630eeb78189e93bb43f4ef25074f032ca2a7c04e313305105ee642430c42d10297effca76113edc8e34326e445dc74a079494c4525bc5bc659ced00dcbaf53e9e9f3bcc89277c62643b1076d6129c5a1f29bbf62bf8cd842b08b470a3075c4';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchProductCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(
      `/products?filters[category][id][$eq]=${categoryId}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const fetchProductCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/categories/${categoryId}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product category:', error);
    throw error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const fetchProductPricing = async (productId) => {
  try {
    const response = await axiosInstance.get(`/pricings?filters[product][id][$eq]=${productId}&populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product pricing:', error);
    throw error;
  }
};