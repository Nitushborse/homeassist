import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const WorkerDashboardPage = () => {
  // Dummy data for available jobs
  const [jobs, setJobs] = useState([
    { id: 1, title: "Plumbing Fix", description: "Repair a leaky faucet in the kitchen.", startDate: "2025-09-15", endDate: "2025-09-15", amount: "₹ 1,500" },
    { id: 2, title: "Full House Painting", description: "Paint a 3-bedroom house, interior walls only.", startDate: "2025-09-20", endDate: "2025-09-25", amount: "₹ 20,000" },
    { id: 3, title: "Garden Landscaping", description: "Design and plant a new garden bed.", startDate: "2025-09-18", endDate: "2025-09-22", amount: "₹ 8,000" },
    { id: 4, title: "Electrical Wiring Check-up", description: "Inspect and update wiring in an old apartment.", startDate: "2025-09-21", endDate: "2025-09-21", amount: "₹ 3,500" },
    { id: 5, title: "Carpet Cleaning", description: "Deep clean carpets in two large rooms.", startDate: "2025-09-23", endDate: "2025-09-23", amount: "₹ 2,000" },
    { id: 6, title: "AC Repair", description: "Troubleshoot and fix a central AC unit.", startDate: "2025-09-26", endDate: "2025-09-27", amount: "₹ 5,000" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2 mb-0">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h2>
        
        {/* Job cards displayed in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            // The NavLink makes the entire card clickable
            <NavLink key={job.id} to={`/job-details/${job.id}`}>
              <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{job.description}</p>
                
                <div className="grid grid-cols-2 gap-y-2 mt-auto text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">Start Date</span>
                    <span className="text-gray-600">{job.startDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">End Date</span>
                    <span className="text-gray-600">{job.endDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="font-bold text-lg text-primary">{job.amount}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboardPage;