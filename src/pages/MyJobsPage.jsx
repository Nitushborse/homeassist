import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestedJobs } from "../features/job/jobSlice";

const MyJobsPage = () => {

    const dispatch = useDispatch();
    const { requestedJobs, loading, error } = useSelector((state) => state.jobs);

    const [filter, setFilter] = useState("All");

    useEffect(() => {
        dispatch(fetchRequestedJobs());
    }, [dispatch]);


    const filteredJobs =
        filter === "All"
            ? requestedJobs
            : requestedJobs.filter((req) => req.status === filter);

    if (loading) {
        return <div className="p-8 text-center">Loading jobs...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-500">Error: {error}</div>;
    }

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
                            <option value="pending">Pending</option>
                            <option value="accepted">Accepted</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </div>
                </div>

                {/* Job cards in a scrollable container */}
                <div className="h-[700px] overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map(req => (
                            <NavLink key={req.requestId} to={`/freelancer/job/${req.job._id}`}>
                                <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{req.job.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 flex-grow">End Date: {new Date(req.job.endDate).toLocaleDateString()}</p>

                                    <div className="mt-auto">
                                        <span
                                            className={`px-4 py-1 text-sm font-medium rounded-full ${req.status === "in-progress"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : req.status === "accepted"
                                                        ? "bg-green-100 text-green-800"
                                                        : req.status === "completed"
                                                            ? "bg-gray-200 text-gray-800"
                                                            : req.status === "canceled"
                                                                ? "bg-red-100 text-red-800"
                                                                : "bg-yellow-100 text-yellow-800" // pending
                                                }`}
                                        >
                                            {req.status}
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


