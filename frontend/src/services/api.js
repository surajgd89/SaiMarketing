import axios from 'axios';
import API_URL from './helpers';

const api = axios.create({
   API_URL,
});

export const getProfile = async () => {
   try {
      const response = await api.get('/api/profile');
      return response.data[0];
   } catch (error) {
      console.error('Error fetching profile data:', error.message);
      throw error;
   }
};


export const getProducts = async () => {
   try {
      const response = await api.get('/api/products');
      return response.data;
   } catch (error) {
      console.error('Error fetching products data:', error.message);
      throw error;
   }
};


export const getBrands = async () => {
   try {
      const response = await api.get('/api/brands');
      return response.data;
   } catch (error) {
      console.error('Error fetching brands data:', error.message);
      throw error;
   }
};