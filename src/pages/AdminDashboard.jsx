// import React from 'react';

// const AdminDashboardPage = () => {
//   // Hardcoded placeholder data for design purposes
//   const stats = {
//     jobs: {
//       total: 150,
//       open: 45,
//       in_progress: 70,
//       completed: 30,
//       cancelled: 5
//     },
//     users: {
//       clients: 120,
//       freelancers: 250,
//       admins: 3
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {/* Job Statistics Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Statistics</h2>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Total Jobs</span>
//                 <span className="text-xl font-bold text-blue-600">{stats.jobs.total}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Open Jobs</span>
//                 <span className="text-xl font-bold text-green-600">{stats.jobs.open}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">In-Progress Jobs</span>
//                 <span className="text-xl font-bold text-yellow-600">{stats.jobs.in_progress}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Completed Jobs</span>
//                 <span className="text-xl font-bold text-purple-600">{stats.jobs.completed}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Cancelled Jobs</span>
//                 <span className="text-xl font-bold text-red-600">{stats.jobs.cancelled}</span>
//               </div>
//             </div>
//           </div>

//           {/* User Statistics Section */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Statistics</h2>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Total Clients</span>
//                 <span className="text-xl font-bold text-blue-600">{stats.users.clients}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Total Freelancers</span>
//                 <span className="text-xl font-bold text-teal-600">{stats.users.freelancers}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg text-gray-600">Total Admins</span>
//                 <span className="text-xl font-bold text-gray-800">{stats.users.admins}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;


// import React from 'react';

// const AdminDashboardPage = () => {
//   // Hardcoded placeholder data for design purposes
//   const stats = {
//     jobs: {
//       total: 150,
//       open: 45,
//       in_progress: 70,
//       completed: 30,
//       cancelled: 5
//     },
//     users: {
//       clients: 120,
//       freelancers: 250,
//       admins: 3
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

//         {/* Job Statistics Section */}
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Statistics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Total Jobs</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.jobs.total}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Open Jobs</h3>
//             <span className="text-4xl font-bold text-green-500 mt-2">{stats.jobs.open}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">In-Progress Jobs</h3>
//             <span className="text-4xl font-bold text-yellow-500 mt-2">{stats.jobs.in_progress}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Completed Jobs</h3>
//             <span className="text-4xl font-bold text-purple-500 mt-2">{stats.jobs.completed}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Cancelled Jobs</h3>
//             <span className="text-4xl font-bold text-red-500 mt-2">{stats.jobs.cancelled}</span>
//           </div>
//         </div>

//         {/* User Statistics Section */}
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Statistics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Total Clients</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.clients}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Total Freelancers</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.freelancers}</span>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Total Admins</h3>
//             <span className="text-4xl font-bold text-gray-800 mt-2">{stats.users.admins}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const AdminDashboardPage = () => {
//   // Hardcoded placeholder data for design purposes
//   const stats = {
//     jobs: {
//       total: 150,
//       open: 45,
//       in_progress: 70,
//       completed: 30,
//       cancelled: 5
//     },
//     users: {
//       clients: 120,
//       freelancers: 250,
//       admins: 3
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

//         {/* Job Statistics Section */}
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Statistics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Total Jobs</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.jobs.total}</span>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Open Jobs</h3>
//             <span className="text-4xl font-bold text-green-500 mt-2">{stats.jobs.open}</span>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">In-Progress Jobs</h3>
//             <span className="text-4xl font-bold text-yellow-500 mt-2">{stats.jobs.in_progress}</span>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Completed Jobs</h3>
//             <span className="text-4xl font-bold text-purple-500 mt-2">{stats.jobs.completed}</span>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
//             <h3 className="text-lg font-medium text-gray-600">Cancelled Jobs</h3>
//             <span className="text-4xl font-bold text-red-500 mt-2">{stats.jobs.cancelled}</span>
//           </div>
//         </div>

//         {/* User Statistics Section with NavLinks */}
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Statistics</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <NavLink to="/admin/users/clients" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-lg font-medium text-gray-600">Total Clients</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.clients}</span>
//           </NavLink>
//           <NavLink to="/admin/users/freelancers" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-lg font-medium text-gray-600">Total Freelancers</h3>
//             <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.freelancers}</span>
//           </NavLink>
//           <NavLink to="/admin/users/admins" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-lg font-medium text-gray-600">Total Admins</h3>
//             <span className="text-4xl font-bold text-gray-800 mt-2">{stats.users.admins}</span>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getStats } from '../services/adminService'; 

const AdminDashboardPage = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getStats();
                console.log(response)
                if (response.success) {
                    setStats(response.data);
                } else {
                    setError('Failed to fetch dashboard stats.');
                }
            } catch (err) {
                setError('Failed to connect to the server.');
                console.error("API call error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
                <p className="text-xl text-gray-600">Loading dashboard data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
                <p className="text-xl text-red-500">{error}</p>
            </div>
        );
    }

    if (!stats) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
                <p className="text-xl text-gray-500">No dashboard data available.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

                {/* Job Statistics Section */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Job Statistics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-medium text-gray-600">Total Jobs</h3>
                        <span className="text-4xl font-bold text-orange-500 mt-2">{stats.jobs.total}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-medium text-gray-600">Open Jobs</h3>
                        <span className="text-4xl font-bold text-green-500 mt-2">{stats.jobs.open}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-medium text-gray-600">In-Progress Jobs</h3>
                        <span className="text-4xl font-bold text-yellow-500 mt-2">{stats.jobs.in_progress}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-medium text-gray-600">Completed Jobs</h3>
                        <span className="text-4xl font-bold text-purple-500 mt-2">{stats.jobs.completed}</span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-medium text-gray-600">Cancelled Jobs</h3>
                        <span className="text-4xl font-bold text-red-500 mt-2">{stats.jobs.cancelled}</span>
                    </div>
                </div>

                {/* User Statistics Section with NavLinks */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Statistics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NavLink to="/admin/users/clients" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-gray-600">Total Clients</h3>
                        <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.clients}</span>
                    </NavLink>
                    <NavLink to="/admin/users/freelancers" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-gray-600">Total Freelancers</h3>
                        <span className="text-4xl font-bold text-orange-500 mt-2">{stats.users.freelancers}</span>
                    </NavLink>
                    <NavLink to="/admin/users/admins" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-medium text-gray-600">Total Admins</h3>
                        <span className="text-4xl font-bold text-gray-800 mt-2">{stats.users.admins}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;