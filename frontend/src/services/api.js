import axios from 'axios';
import { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async () => {

   try {
      const profile_res = await axios.get(`${API_URL}/api/profile`);
      const products_res = await axios.get(`${API_URL}/api/products`);
      const brands_res = await axios.get(`${API_URL}/api/brands`);
      return { "getProfile": profile_res.data[0], "getProducts": products_res.data, "getBrands": brands_res.data };

   } catch (error) {

      console.error('Error fetching data:', error.message);

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


