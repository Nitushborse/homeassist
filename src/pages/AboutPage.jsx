import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 container-centered">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About HomeAssist
          </h1>
          <p className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            Your online service-based marketplace connecting clients with skilled freelancers for any job.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Post a Job</h3>
              <p className="text-gray-600">
                Clients post a job with details and budget for a specific task.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v10m8-10v10M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Proposals</h3>
              <p className="text-gray-600">
                Workers submit their proposals and quotes for the job.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accept & Complete</h3>
              <p className="text-gray-600">
                Clients choose the best proposal and the work begins!
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-16 bg-primary text-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            [cite_start]Our mission is to build a reliable online service marketplace where user(client) post the jobs and worker(freelancer) give the proposel(request) to jobs then client accept best from list or requests[cite: 1].
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing community and find the perfect match for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink to="/create-post" className="w-full sm:w-auto px-8 py-3 font-bold text-white transition-colors duration-300 rounded-full shadow-lg bg-green-500 hover:bg-green-600">
              Post a Job
            </NavLink>
            <NavLink to="/register" className="w-full sm:w-auto px-8 py-3 font-bold text-white transition-colors duration-300 rounded-full shadow-lg bg-yellow-500 hover:bg-yellow-600">
              Join as a Worker
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;