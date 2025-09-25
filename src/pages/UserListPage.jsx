import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserListTable from '../components/UserListTable'; // Import the new component
import { getClients, getFreelancers, getAdmins } from '../services/adminService';

const UserListPage = () => {
  const { userType } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        if (userType === 'clients') {
          response = await getClients();
        } else if (userType === 'freelancers') {
          response = await getFreelancers();
        } else if (userType === 'admins') {
          response = await getAdmins();
        }
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch user data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (userType) {
      fetchUsers();
    }
  }, [userType]);

  const getTitle = () => {
    switch(userType) {
      case 'clients':
        return 'Clients List';
      case 'freelancers':
        return 'Freelancers List';
      case 'admins':
        return 'Admins List';
      default:
        return 'Users List';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Loading {getTitle()}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <UserListTable 
      title={getTitle()} 
      users={users} 
    />
  );
};

export default UserListPage;