import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8080-baabeefaeaddfaaefdcadeaeaadbdbabf.project.examly.io/',
});

// Default error handler
const errorHandler = (error) => {
  console.error('API Error:', error);
  throw error;
};

// Custom GET method
export const get = async (url, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom POST method
export const post = async (url, data, contentType = 'application/json', token = null) => {
  try {
    const headers = {
      'Content-Type': contentType,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom PUT method
export const put = async (url, data, contentType = 'application/json', token = null) => {
  try {
    const headers = {
      'Content-Type': contentType,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.put(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom DELETE method
export const del = async (url, token = null) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.delete(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};