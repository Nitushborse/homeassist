// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const MyJobsPage = () => {
//     // Dummy data for jobs the worker has accepted
//     const [acceptedJobs, setAcceptedJobs] = useState([
//         { id: 1, title: "Plumbing Fix", endDate: "2025-09-15", status: "In Progress" },
//         { id: 2, title: "Full House Painting", endDate: "2025-09-25", status: "Accepted" },
//         { id: 3, title: "Garden Landscaping", endDate: "2025-09-22", status: "Completed" },
//         { id: 4, title: "Electrical Wiring Check-up", endDate: "2025-09-21", status: "In Progress" },
//         { id: 5, title: "Carpet Cleaning Service", endDate: "2025-09-23", status: "Canceled" },
//     ]);

//     return (
//         <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
//             <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">My Accepted Jobs</h2>
                
//                 {/* Job cards in a responsive grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {acceptedJobs.map(job => (
//                         <NavLink key={job.id} to={`/job-details-freelancer/${job.id}`}>
//                             <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
//                                 [cite_start]<h3 className="text-xl font-bold text-gray-800 mb-2">{job.title} [cite: 77]</h3>
//                                 [cite_start]<p className="text-sm text-gray-600 mb-4 flex-grow">End Date: {job.endDate} [cite: 80]</p>
                                
//                                 <div className="mt-auto">
//                                     <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                                         job.status === "In Progress" 
//                                             ? "bg-blue-100 text-blue-800"
//                                             : job.status === "Accepted"
//                                                 ? "bg-green-100 text-green-800"
//                                                 : job.status === "Completed"
//                                                     ? "bg-gray-200 text-gray-800"
//                                                     : "bg-red-100 text-red-800"
//                                     }`}>
//                                         [cite_start]{job.status} [cite: 79]
//                                     </span>
//                                 </div>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyJobsPage;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const MyJobsPage = () => {
//     // Dummy data for jobs the worker has accepted
//     const [acceptedJobs, setAcceptedJobs] = useState([
//         { id: 1, title: "Plumbing Fix", endDate: "2025-09-15", status: "In Progress" },
//         { id: 2, title: "Full House Painting", endDate: "2025-09-25", status: "Accepted" },
//         { id: 3, title: "Garden Landscaping", endDate: "2025-09-22", status: "Completed" },
//         { id: 4, title: "Electrical Wiring Check-up", endDate: "2025-09-21", status: "In Progress" },
//         { id: 5, title: "Carpet Cleaning Service", endDate: "2025-09-23", status: "Canceled" },
//     ]);

//     return (
//         <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
//             <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">My Accepted Jobs</h2>
                
//                 {/* Job cards in a responsive grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {acceptedJobs.map(job => (
//                         <NavLink key={job.id} to={`/job-details-freelancer/${job.id}`}>
//                             <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
//                                 <p className="text-sm text-gray-600 mb-4 flex-grow">End Date: {job.endDate}</p>
                                
//                                 <div className="mt-auto">
//                                     <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                                         job.status === "In Progress" 
//                                             ? "bg-blue-100 text-blue-800"
//                                             : job.status === "Accepted"
//                                                 ? "bg-green-100 text-green-800"
//                                                 : job.status === "Completed"
//                                                     ? "bg-gray-200 text-gray-800"
//                                                     : "bg-red-100 text-red-800"
//                                     }`}>
//                                         {job.status}
//                                     </span>
//                                 </div>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyJobsPage;]


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const MyJobsPage = () => {
//     // Dummy data for jobs the worker has accepted
//     const [acceptedJobs, setAcceptedJobs] = useState([
//         { id: 1, title: "Plumbing Fix", endDate: "2025-09-15", status: "In Progress" },
//         { id: 2, title: "Full House Painting", endDate: "2025-09-25", status: "Accepted" },
//         { id: 3, title: "Garden Landscaping", endDate: "2025-09-22", status: "Completed" },
//         { id: 4, title: "Electrical Wiring Check-up", endDate: "2025-09-21", status: "In Progress" },
//         { id: 5, title: "Carpet Cleaning Service", endDate: "2025-09-23", status: "Canceled" },
//     ]);

//     // New state to manage the selected filter
//     const [filter, setFilter] = useState('All');

//     // Filter the jobs based on the selected status
//     const filteredJobs = filter === 'All' 
//         ? acceptedJobs 
//         : acceptedJobs.filter(job => job.status === filter);

//     return (
//         <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
//             <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                
//                 {/* Header with Title and Filter Dropdown */}
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-3xl font-bold text-gray-800">My Accepted Jobs</h2>
                    
//                     {/* Filter Dropdown */}
//                     <div className="flex items-center space-x-2">
//                         <label htmlFor="status-filter" className="text-gray-600 font-medium">Filter by Status:</label>
//                         <select
//                             id="status-filter"
//                             className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                             onChange={(e) => setFilter(e.target.value)}
//                             value={filter}
//                         >
//                             <option value="All">All</option>
//                             <option value="Accepted">Accepted</option>
//                             <option value="In Progress">In Progress</option>
//                             <option value="Completed">Completed</option>
//                             <option value="Canceled">Canceled</option>
//                         </select>
//                     </div>
//                 </div>
                
//                 {/* Job cards in a responsive grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {filteredJobs.map(job => (
//                         <NavLink key={job.id} to={`/job-details-freelancer/${job.id}`}>
//                             <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
//                                 <p className="text-sm text-gray-600 mb-4 flex-grow">End Date: {job.endDate}</p>
                                
//                                 <div className="mt-auto">
//                                     <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                                         job.status === "In Progress" 
//                                             ? "bg-blue-100 text-blue-800"
//                                             : job.status === "Accepted"
//                                                 ? "bg-green-100 text-green-800"
//                                                 : job.status === "Completed"
//                                                     ? "bg-gray-200 text-gray-800"
//                                                     : "bg-red-100 text-red-800"
//                                     }`}>
//                                         {job.status}
//                                     </span>
//                                 </div>
//                             </div>
//                         </NavLink>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyJobsPage;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MyJobsPage = () => {
    // Dummy data for jobs the worker has accepted (40 total)
    const [acceptedJobs, setAcceptedJobs] = useState([
        { id: 1, title: "Plumbing Fix", endDate: "2025-09-15", status: "In Progress" },
        { id: 2, title: "Full House Painting", endDate: "2025-09-25", status: "Accepted" },
        { id: 3, title: "Garden Landscaping", endDate: "2025-09-22", status: "Completed" },
        { id: 4, title: "Electrical Wiring Check-up", endDate: "2025-09-21", status: "In Progress" },
        { id: 5, title: "Carpet Cleaning Service", endDate: "2025-09-23", status: "Canceled" },
        { id: 6, title: "Window Installation", endDate: "2025-09-28", status: "Accepted" },
        { id: 7, title: "Deck Repair", endDate: "2025-09-30", status: "In Progress" },
        { id: 8, title: "Fence Painting", endDate: "2025-10-02", status: "Accepted" },
        { id: 9, title: "Gutter Cleaning", endDate: "2025-10-05", status: "Completed" },
        { id: 10, title: "Roof Inspection", endDate: "2025-10-07", status: "In Progress" },
        { id: 11, title: "Bathroom Remodeling", endDate: "2025-10-10", status: "Accepted" },
        { id: 12, title: "Kitchen Cabinet Refacing", endDate: "2025-10-15", status: "In Progress" },
        { id: 13, title: "Pressure Washing", endDate: "2025-10-18", status: "Completed" },
        { id: 14, title: "Appliance Repair", endDate: "2025-10-20", status: "Accepted" },
        { id: 15, title: "Tile Installation", endDate: "2025-10-25", status: "In Progress" },
        { id: 16, title: "Drywall Repair", endDate: "2025-10-28", status: "Completed" },
        { id: 17, title: "Pest Control", endDate: "2025-10-30", status: "Accepted" },
        { id: 18, title: "Chimney Sweeping", endDate: "2025-11-01", status: "In Progress" },
        { id: 19, title: "Garage Door Repair", endDate: "2025-11-05", status: "Completed" },
        { id: 20, title: "Insulation Installation", endDate: "2025-11-08", status: "Accepted" },
        { id: 21, title: "Lawn Mowing", endDate: "2025-11-10", status: "In Progress" },
        { id: 22, title: "Hedge Trimming", endDate: "2025-11-12", status: "Canceled" },
        { id: 23, title: "Tree Removal", endDate: "2025-11-15", status: "Accepted" },
        { id: 24, title: "Siding Repair", endDate: "2025-11-18", status: "In Progress" },
        { id: 25, title: "Concrete Paving", endDate: "2025-11-20", status: "Completed" },
        { id: 26, title: "Pool Maintenance", endDate: "2025-11-22", status: "Accepted" },
        { id: 27, title: "Hot Tub Repair", endDate: "2025-11-25", status: "In Progress" },
        { id: 28, title: "Water Heater Installation", endDate: "2025-11-28", status: "Completed" },
        { id: 29, title: "Electrical Panel Upgrade", endDate: "2025-11-30", status: "Accepted" },
        { id: 30, title: "Flooring Installation", endDate: "2025-12-05", status: "In Progress" },
        { id: 31, title: "Cabinet Painting", endDate: "2025-12-08", status: "Completed" },
        { id: 32, title: "Lighting Fixture Installation", endDate: "2025-12-10", status: "Accepted" },
        { id: 33, title: "Smart Home Setup", endDate: "2025-12-15", status: "In Progress" },
        { id: 34, title: "Security Camera Installation", endDate: "2025-12-18", status: "Completed" },
        { id: 35, title: "Furniture Assembly", endDate: "2025-12-20", status: "Accepted" },
        { id: 36, title: "Window Cleaning", endDate: "2025-12-22", status: "In Progress" },
        { id: 37, title: "Car Detailing", endDate: "2025-12-25", status: "Completed" },
        { id: 38, title: "Power Washing", endDate: "2025-12-28", status: "Accepted" },
        { id: 39, title: "Tree Trimming", endDate: "2025-12-30", status: "In Progress" },
        { id: 40, title: "Junk Removal", endDate: "2026-01-02", status: "Completed" },
    ]);

    const [filter, setFilter] = useState('All');

    const filteredJobs = filter === 'All' 
        ? acceptedJobs 
        : acceptedJobs.filter(job => job.status === filter);

    return (
        <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                
                {/* Header with Title and Filter Dropdown */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">My Accepted Jobs</h2>
                    
                    {/* Filter Dropdown */}
                    <div className="flex items-center space-x-2">
                        <label htmlFor="status-filter" className="text-gray-600 font-medium">Filter by Status:</label>
                        <select
                            id="status-filter"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                        >
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                    </div>
                </div>
                
                {/* Job cards in a scrollable container */}
                <div className="h-[700px] overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map(job => (
                            <NavLink key={job.id} to={`/job-details-freelancer/${job.id}`}>
                                <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">End Date: {job.endDate}</p>
                                    
                                    <div className="mt-auto">
                                        <span className={`px-4 py-1 text-sm font-medium rounded-full ${
                                            job.status === "In Progress" 
                                                ? "bg-blue-100 text-blue-800"
                                                : job.status === "Accepted"
                                                    ? "bg-green-100 text-green-800"
                                                    : job.status === "Completed"
                                                        ? "bg-gray-200 text-gray-800"
                                                        : "bg-red-100 text-red-800"
                                        }`}>
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

export default MyJobsPage;