import axios from 'axios';
import { useSelector } from 'react-redux';


const token=localStorage.getItem("token")
console.log('token',token);

const api = axios.create({
  baseURL: 'https://ide-ecbfbfbcfaaaefdcadeaeaadbdbabf.project.examly.io/proxy/8080',
});

// Default error handler
const errorHandler = (error) => {
  console.error('API Error:', error);
  throw error;
};

// Custom GET method
export const get = async (url) => {

  try {
    // const token=localStorage.getItem("token")
    // console.log("tokennnnn",token);
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom POST method
export const post = async (url, data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom PUT method
export const put = async (url, data,) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.put(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom PUT method
export const putFile = async (url, data) => {
  try {
    const headers = {
      'Content-Type':  'multipart/form-data',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.put(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom DELETE method
export const del = async (url) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.delete(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};