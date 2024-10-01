import axios from 'axios';

const API_URL = 'http://10.13.49.157:5000/'; // Use this for Android emulator
// const API_URL = 'http://localhost:5000';  // Use this for iOS simulator

const apiService = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHello = async () => {
  try {
    const response = await apiService.get('/api/hello');
    return response.data;
  } catch (error) {
    console.error('Error fetching hello:', error);
    throw error;
  }
};
export const createItem = async item => {
  try {
    const response = await apiService.post('/api/items', item);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};


export const createUser = async user => {
  try {
    const response = await apiService.post('/api/user', user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getItems = async () => {
  try {
    const response = await apiService.get('/api/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getItem = async id => {
  try {
    const response = await apiService.get(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await apiService.put(`/api/items/${id}`, item);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

export const deleteItem = async id => {
  try {
    const response = await apiService.delete(`/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

// Add more API functions here as needed

export default apiService;
