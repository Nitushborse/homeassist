import axiosInstance from '../api/axiosInstance';

export const getStats = async () => {
  const { data } = await axiosInstance.get('/admin/stats');
  return data;
};

export const getClients = async () => {
  const { data } = await axiosInstance.get('/admin/clients');
  return data;
};

export const getFreelancers = async () => {
  const { data } = await axiosInstance.get('/admin/freelancers');
  return data;
};

export const getAdmins = async () => {
  const { data } = await axiosInstance.get('/admin/admins');
  return data;
};