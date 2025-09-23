
import axiosInstance from '../api/axiosInstance';

// Register new user
export const registerUser = async (userData) => {
  const { data } = await axiosInstance.post('/user/register', userData);
  return data;
};


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
  return data.data; 
};

export const updateProfile = async (userData) => {
  const formData = new FormData();
  if (userData.phone) formData.append("phone", userData.phone);
  if (userData.location) formData.append("location", userData.location);
  if (userData.skills) formData.append("skills", userData.skills);
  if (userData.bio) formData.append("bio", userData.bio);
  if (userData.avatarFile) formData.append("avatar", userData.avatarFile);

  const { data } = await axiosInstance.patch("/user/profile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data; // updated user
};

export const getUserById = async (userId) => {
  const { data } = await axiosInstance.get(`/user/getuserbyid/${userId}`);
  return data.data; 
};

