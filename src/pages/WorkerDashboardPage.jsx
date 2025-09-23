import { useState, useEffect, use } from 'react';
import { NavLink } from 'react-router-dom';
import { getAvailablejobs } from '../services/jobsService';


const WorkerDashboardPage = () => {
  // Dummy data for available jobs

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getjobs = async () => {
      const data = await getAvailablejobs()
      setJobs(data)
      console.log(data)
    }

    getjobs()
  }, [])


  return (
    <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2 mb-0">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h2>

        {/* Job cards displayed in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            // The NavLink makes the entire card clickable
            <NavLink key={job._id} to={`/freelancer/job-details/${job._id}`}>
              <div className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-b-4 border-primary">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{job.description}</p>

                <div className="grid grid-cols-2 gap-y-2 mt-auto text-sm text-gray-500">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">Start Date</span>
                    <span className="text-gray-600"> {new Date(job.startDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-700">End Date</span>
                    <span className="text-gray-600">{new Date(job.endDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}</span>
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