import React, { useState } from 'react';

const PostDetailsPage = () => {
  // Dummy data for a single post and a list of requests.
  // In a real application, you would fetch this data from an API based on the post ID.
  const post = {
    id: 1,
    title: "Plumbing Fix for Leaky Faucet",
    description: "I have a persistent leaky faucet in my kitchen that needs to be repaired. The drip is constant and has been a problem for weeks. Looking for a skilled plumber to fix it permanently.",
    status: "Active",
    amount: "₹ 1,500",
    dueDate: "2025-09-15"
  };

  const [requests, setRequests] = useState([
    { username: "Rajesh K.", rating: "4.5 stars" },
    { username: "Priya S.", rating: "5.0 stars" },
    { username: "Amit V.", rating: "3.8 stars" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>
        
        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Left Column: Job Details */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">Job Title</label>
              <p className="text-gray-900">{post.title}</p>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">Job Description</label>
              <p className="text-gray-600">{post.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-lg font-semibold text-gray-700">Amount</label>
                <p className="text-gray-900">{post.amount}</p>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Due Date</label>
                <p className="text-gray-900">{post.dueDate}</p>
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Status</label>
              <span className={`px-4 py-1 text-sm font-medium rounded-full ${
                post.status === "Active" 
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {post.status}
              </span>
            </div>
          </div>

          {/* Right Column: Requests */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
            <div className="space-y-4">
              {requests.map((request, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <span className="font-semibold text-gray-800">{request.username}</span>
                    <p className="text-sm text-gray-500">{request.rating}</p>
                  </div>
                  <div className="flex space-x-2 mt-2 sm:mt-0">
                    <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600">
                      Accept
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;