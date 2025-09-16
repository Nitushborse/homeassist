
import axiosInstance from '../api/axiosInstance';

// Register new user
export const registerUser = async (userData) => {
  const { data } = await axiosInstance.post('/user/register', userData);
  return data;
};

// Login user (cookies automatically stored by server)
export const loginUser = async (credentials) => {
  const { data } = await axiosInstance.post('/user/login', credentials);
  return data; // contains user info + access/refresh tokens (in cookies)
};

// Logout user
export const logoutUser = async () => {
  await axiosInstance.post('/user/logout');
};

// Get currently authenticated user
export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get('/user/currentuser');
  return data.data; // return only user data
};
