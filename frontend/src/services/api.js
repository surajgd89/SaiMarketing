import axios from 'axios';
import API_URL from './helpers';



export const getProfile = async () => {
   try {
      const response = await axios.get(`${API_URL}/api/profile`);
      return response.data[0];

   } catch (error) {
      console.error('Error fetching profile data:', error.message);
      throw error;
   }
};


export const getProducts = async () => {
   try {
      const response = await axios.get(`${API_URL}/api/products`);
      return response.data;
   } catch (error) {
      console.error('Error fetching products data:', error.message);
      throw error;
   }
};


export const getBrands = async () => {
   try {
      const response = await axios.get(`${API_URL}/api/brands`);
      return response.data;
   } catch (error) {
      console.error('Error fetching brands data:', error.message);
      throw error;
   }
};

export const sendEmail = async (formData) => {
   try {
      await axios.post(`${API_URL}/api/send-email`, formData);
   } catch (error) {
      console.error('Error sending email:', error);
   }
};


