// import React, { useState } from 'react';

// const MyPostPage = () => {
//   // Using state to manage the list of posts. This makes the component dynamic.
//   const [posts, setPosts] = useState([
//     { id: 1, title: "Plumbing Fix for Leaky Faucet", status: "Active" },
//     { id: 2, title: "Full House Painting", status: "Completed" },
//     { id: 3, title: "Garden Landscaping", status: "Pending" },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">

//         {/* Header and Call to Action */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">My Posts</h2>
//           <button 
//             className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
//           >
//             New Post
//           </button>
//         </div>

//         {/* Posts Container with a grid layout for potential future design */}
//         <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
//           {posts.map(post => (
//             <div 
//               key={post.id} 
//               className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-white rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:border-blue-300 border border-transparent"
//             >
//               <div className="flex flex-col">
//                 <span className="text-xl font-semibold text-gray-800">{post.title}</span>
//                 <span className="text-sm text-gray-500 mt-1">ID: {post.id}</span>
//               </div>

//               <div className="mt-4 md:mt-0">
//                 <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                   post.status === "Active" 
//                     ? "bg-green-100 text-green-800"
//                     : post.status === "Completed"
//                     ? "bg-gray-200 text-gray-800"
//                     : "bg-yellow-100 text-yellow-800"
//                 }`}>
//                   {post.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyPostPage;
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchClientJobs } from "../features/job/jobSlice";
const MyPostPage = () => {
    // Increased the number of dummy posts to demonstrate the scrollbar functionality
    const dispatch = useDispatch();
    const { clientJobs, loading, error } = useSelector((state) => state.jobs);
   

    useEffect(() => {
        dispatch(fetchClientJobs());
    }, [dispatch]);

    // console.log(clientJobs)

    if (loading) {
        return <div className="p-8 text-center">Loading jobs...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-500">Error: {error}</div>;
    }



    return (
        <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
                {/* Header and Call to Action */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">My Posts</h2>
                    <NavLink to="/client/post/create">
                        <button
                            className="px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
                        >
                            New Post
                        </button>
                    </NavLink>
                </div>

                {/* Posts Container with a fixed height and scrollbar for overflow */}
                <div className="h-[500px] overflow-y-auto pr-2">
                    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                        {clientJobs.map(job => (
                            <NavLink key={job._id} to={`/client/post/${job._id}`}>
                                <div
                                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-white rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:border-blue-300 border border-transparent cursor-pointer"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xl font-semibold text-gray-800">{job.title}</span>
                                        <span className="text-sm text-gray-500 mt-1">Budget: {job.budget}</span>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span
                                            className={`px-4 py-1 text-sm font-medium rounded-full ${job.status === "open"
                                                ? "bg-green-100 text-green-800"
                                                : job.status === "completed"
                                                    ? "bg-gray-200 text-gray-800"
                                                    : job.status === "in_progress"
                                                        ? "bg-blue-100 text-blue-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {job.status}
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostPage;