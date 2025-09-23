// import React, { useState } from 'react';

// const PostDetailsPage = () => {
//   // Dummy data for a single post and a list of requests.
//   // In a real application, you would fetch this data from an API based on the post ID.
//   const post = {
//     id: 1,
//     title: "Plumbing Fix for Leaky Faucet",
//     description: "I have a persistent leaky faucet in my kitchen that needs to be repaired. The drip is constant and has been a problem for weeks. Looking for a skilled plumber to fix it permanently.",
//     status: "Active",
//     amount: "₹ 1,500",
//     dueDate: "2025-09-15"
//   };

//   const [requests, setRequests] = useState([
//     { username: "Rajesh K.", rating: "4.5 stars" },
//     { username: "Priya S.", rating: "5.0 stars" },
//     { username: "Amit V.", rating: "3.8 stars" },
//   ]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         {/* Two-Column Layout */}
//         <div className="flex flex-col md:flex-row gap-6">

//           {/* Left Column: Job Details */}
//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{post.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{post.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">{post.amount}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{post.dueDate}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                 post.status === "Active" 
//                   ? "bg-green-100 text-green-800"
//                   : "bg-yellow-100 text-yellow-800"
//               }`}>
//                 {post.status}
//               </span>
//             </div>
//           </div>

//           {/* Right Column: Requests */}
//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//             <div className="space-y-4">
//               {requests.map((request, index) => (
//                 <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                   <div>
//                     <span className="font-semibold text-gray-800">{request.username}</span>
//                     <p className="text-sm text-gray-500">{request.rating}</p>
//                   </div>
//                   <div className="flex space-x-2 mt-2 sm:mt-0">
//                     <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600">
//                       Accept
//                     </button>
//                     <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600">
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getfulljobdetail, acceptJobRequest } from '../services/jobsService';
// import { getUserById } from '../services/authService';

// const PostDetailsPage = () => {
//   // Use useParams to get the job ID from the URL
//   const { id } = useParams();

//   const [jobDetails, setJobDetails] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAccepting, setIsAccepting] = useState(false);
//   const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);


//   const fetchJobDetails = async () => {
//     try {
//       const data = await getfulljobdetail(id);
//       setJobDetails(data.job);
//       setRequests(data.jobRequests);
//     } catch (err) {
//       setError('Failed to fetch job details.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchJobDetails();
//     }
//   }, [id]);

//   const handleAccept = async (requestId) => {
//     setIsAccepting(true);
//     try {
//       await acceptJobRequest(requestId);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to accept job request:', err);
//     } finally {
//       setIsAccepting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-600 text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-500 text-lg">Job not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         {/* Two-Column Layout */}
//         <div className="flex flex-col md:flex-row gap-6">

//           {/* Left Column: Job Details */}
//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{jobDetails.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{jobDetails.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">₹ {jobDetails.budget}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{new Date(jobDetails.endDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${jobDetails.status === "open"
//                 ? "bg-green-100 text-green-800"
//                 : "bg-yellow-100 text-yellow-800"
//                 }`}>
//                 {jobDetails.status}
//               </span>
//             </div>
//           </div>

//           {/* Right Column: Requests */}

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//             <div className="space-y-4">
//               {requests.length > 0 ? (
//                 requests.map((request) => (
//                   <div key={request._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                     <div>
//                       <span className="font-semibold text-gray-800">{request.freelancerId.name}</span>
//                       <p className="text-sm text-gray-500">Email: {request.freelancerId.email}</p>
//                       <p className="text-sm text-gray-500">Status: {request.status}</p>
//                     </div>
//                     <div className="flex space-x-2 mt-2 sm:mt-0">
//                       <button
//                         onClick={() => handleAccept(request._id)}
//                         disabled={isAccepting || request.status !== 'pending'}
//                         className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isAccepting ? 'Accepting...' : 'Accept'}
//                       </button>
//                       <button
//                         disabled={isAccepting || request.status !== 'pending'}
//                         className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         Reject
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-500">No requests yet.</p>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getfulljobdetail, acceptJobRequest, markJobComplete, markJobCancel } from '../services/jobsService';
// import { getUserById } from '../services/authService';

// const PostDetailsPage = () => {
//   // Change jobId to id here
//   const { id } = useParams();

//   const [jobDetails, setJobDetails] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAccepting, setIsAccepting] = useState(false);

//   const fetchJobDetails = async () => {
//     setLoading(true);
//     try {
//       const data = await getfulljobdetail(id);
//       setJobDetails(data.job);
//       setRequests(data.jobRequests);

//       const acceptedReq = data.jobRequests.find(req => req.status === 'accepted');
//       if (acceptedReq) {
//         const freelancerData = await getUserById(acceptedReq.freelancerId._id);
//         setAcceptedFreelancer(freelancerData);
//       } else {
//         setAcceptedFreelancer(null);
//       }

//     } catch (err) {
//       setError('Failed to fetch job details.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Use id in the dependency array
//     if (id) {
//       fetchJobDetails();
//     }
//   }, [id]);

//   const handleAccept = async (requestId) => {
//     setIsAccepting(true);
//     try {
//       await acceptJobRequest(requestId);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to accept job request:', err);
//     } finally {
//       setIsAccepting(false);
//     }
//   };

//   const handleComplete = () => {
//     console.log('Job marked as complete');
//     // API call to mark job as complete
//   };

//   const handleCancel = () => {
//     console.log('Job cancelled');
//     // API call to cancel job
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-600 text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-500 text-lg">Job not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         <div className="flex flex-col md:flex-row gap-6">

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{jobDetails.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{jobDetails.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">₹ {jobDetails.budget}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{new Date(jobDetails.endDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                 jobDetails.status === "open"
//                   ? "bg-green-100 text-green-800"
//                   : "bg-yellow-100 text-yellow-800"
//               }`}>
//                 {jobDetails.status}
//               </span>
//             </div>
//           </div>

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">

//             {acceptedFreelancer ? (
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Accepted Freelancer</h3>
//                 <div className="p-4 bg-white rounded-lg shadow-sm">
//                   <span className="font-semibold text-gray-800">{acceptedFreelancer.name}</span>
//                   <p className="text-sm text-gray-500">Email: {acceptedFreelancer.email}</p>
//                   <p className="text-sm text-gray-500">Phone: {acceptedFreelancer.phone}</p>
//                   <p className="text-sm text-gray-500">Bio: {acceptedFreelancer.bio}</p>
//                   <p className="text-sm text-gray-500">Location: {acceptedFreelancer.location}</p>
//                   <p className="text-sm text-gray-500">Skills: {acceptedFreelancer.skills.join(', ')}</p>
//                 </div>

//                 <div className="flex space-x-4 mt-6">
//                   <button 
//                     onClick={handleComplete}
//                     className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600"
//                   >
//                     Mark as Complete
//                   </button>
//                   <button 
//                     onClick={handleCancel}
//                     className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600"
//                   >
//                     Cancel Job
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//                 <div className="space-y-4">
//                   {requests.length > 0 ? (
//                     requests.map((request) => (
//                       <div key={request._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                         <div>
//                           <span className="font-semibold text-gray-800">{request.freelancerId.name}</span>
//                           <p className="text-sm text-gray-500">Email: {request.freelancerId.email}</p>
//                           <p className="text-sm text-gray-500">Status: {request.status}</p>
//                         </div>
//                         <div className="flex space-x-2 mt-2 sm:mt-0">
//                           <button
//                             onClick={() => handleAccept(request._id)}
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             {isAccepting ? 'Accepting...' : 'Accept'}
//                           </button>
//                           <button
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No requests yet.</p>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getfulljobdetail, acceptJobRequest, markJobComplete, markJobCancel } from '../services/jobsService';
// import { getUserById } from '../services/authService';

// const PostDetailsPage = () => {
//   const { id } = useParams();

//   const [jobDetails, setJobDetails] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAccepting, setIsAccepting] = useState(false);
//   const [isProcessingJob, setIsProcessingJob] = useState(false); // New state for processing job actions

//   const fetchJobDetails = async () => {
//     setLoading(true);
//     try {
//       const data = await getfulljobdetail(id);
//       setJobDetails(data.job);
//       setRequests(data.jobRequests);

//       const acceptedReq = data.jobRequests.find(req => req.status === 'accepted');
//       if (acceptedReq) {
//         const freelancerData = await getUserById(acceptedReq.freelancerId._id);
//         setAcceptedFreelancer(freelancerData);
//       } else {
//         setAcceptedFreelancer(null);
//       }

//     } catch (err) {
//       setError('Failed to fetch job details.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchJobDetails();
//     }
//   }, [id]);

//   const handleAccept = async (requestId) => {
//     setIsAccepting(true);
//     try {
//       await acceptJobRequest(requestId);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to accept job request:', err);
//     } finally {
//       setIsAccepting(false);
//     }
//   };

//   // Handler for marking job as complete
//   const handleComplete = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobComplete(id);
//       await fetchJobDetails(); // Re-fetch to update status to 'completed'
//     } catch (err) {
//       console.error('Failed to mark job as complete:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   // Handler for cancelling the job
//   const handleCancel = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobCancel(id);
//       await fetchJobDetails(); // Re-fetch to update status to 'cancelled'
//     } catch (err) {
//       console.error('Failed to cancel job:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-600 text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-500 text-lg">Job not found.</p>
//       </div>
//     );
//   }

//   // Determine if the job is in a final state
//   const isJobFinal = jobDetails.status === 'completed' || jobDetails.status === 'cancelled';

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         <div className="flex flex-col md:flex-row gap-6">

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{jobDetails.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{jobDetails.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">₹ {jobDetails.budget}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{new Date(jobDetails.endDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${
//                 jobDetails.status === "open"
//                   ? "bg-green-100 text-green-800"
//                   : jobDetails.status === "in_progress"
//                   ? "bg-blue-100 text-blue-800"
//                   : jobDetails.status === "completed"
//                   ? "bg-purple-100 text-purple-800"
//                   : "bg-red-100 text-red-800"
//               }`}>
//                 {jobDetails.status.replace('_', ' ')}
//               </span>
//             </div>
//           </div>

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">

//             {/* Conditional rendering based on job status */}
//             {jobDetails.status === 'in_progress' && acceptedFreelancer ? (
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Accepted Freelancer</h3>
//                 <div className="p-4 bg-white rounded-lg shadow-sm">
//                   <span className="font-semibold text-gray-800">{acceptedFreelancer.name}</span>
//                   <p className="text-sm text-gray-500">Email: {acceptedFreelancer.email}</p>
//                   <p className="text-sm text-gray-500">Phone: {acceptedFreelancer.phone}</p>
//                   <p className="text-sm text-gray-500">Bio: {acceptedFreelancer.bio}</p>
//                   <p className="text-sm text-gray-500">Location: {acceptedFreelancer.location}</p>
//                   <p className="text-sm text-gray-500">Skills: {acceptedFreelancer.skills.join(', ')}</p>
//                 </div>

//                 <div className="flex space-x-4 mt-6">
//                   <button 
//                     onClick={handleComplete}
//                     disabled={isProcessingJob}
//                     className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isProcessingJob ? 'Completing...' : 'Mark as Complete'}
//                   </button>
//                   <button 
//                     onClick={handleCancel}
//                     disabled={isProcessingJob}
//                     className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isProcessingJob ? 'Cancelling...' : 'Cancel Job'}
//                   </button>
//                 </div>
//               </div>
//             ) : isJobFinal ? (
//               // Display a final status message for completed or canceled jobs
//               <div className="p-6 text-center text-lg font-semibold text-gray-700">
//                 Job has been {jobDetails.status.replace('_', ' ')}.
//               </div>
//             ) : (
//               // Display pending requests for open jobs
//               <>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//                 <div className="space-y-4">
//                   {requests.length > 0 ? (
//                     requests.map((request) => (
//                       <div key={request._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                         <div>
//                           <span className="font-semibold text-gray-800">{request.freelancerId.name}</span>
//                           <p className="text-sm text-gray-500">Email: {request.freelancerId.email}</p>
//                           <p className="text-sm text-gray-500">Status: {request.status}</p>
//                         </div>
//                         <div className="flex space-x-2 mt-2 sm:mt-0">
//                           <button
//                             onClick={() => handleAccept(request._id)}
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             {isAccepting ? 'Accepting...' : 'Accept'}
//                           </button>
//                           <button
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No requests yet.</p>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;


// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import {
//   getfulljobdetail,
//   acceptJobRequest,
//   markJobComplete,
//   markJobCancel
// } from '../services/jobsService';
// import { getUserById } from '../services/authService';

// const PostDetailsPage = () => {
//   const { id } = useParams();

//   const [jobDetails, setJobDetails] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAccepting, setIsAccepting] = useState(false);
//   const [isProcessingJob, setIsProcessingJob] = useState(false);

//   const fetchJobDetails = async () => {
//     setLoading(true);
//     try {
//       const data = await getfulljobdetail(id);
//       setJobDetails(data.job);
//       setRequests(data.jobRequests);

//       const acceptedReq = data.jobRequests.find(req => req.status === 'accepted');
//       if (acceptedReq) {
//         const freelancerData = await getUserById(acceptedReq.freelancerId._id);
//         setAcceptedFreelancer(freelancerData);
//       } else {
//         setAcceptedFreelancer(null);
//       }
//     } catch (err) {
//       setError('Failed to fetch job details.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchJobDetails();
//     }
//   }, [id]);

//   const handleAccept = async (requestId) => {
//     setIsAccepting(true);
//     try {
//       await acceptJobRequest(requestId);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to accept job request:', err);
//     } finally {
//       setIsAccepting(false);
//     }
//   };

//   const handleComplete = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobComplete(id);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to mark job as complete:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   const handleCancel = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobCancel(id);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to cancel job:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-600 text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-500 text-lg">Job not found.</p>
//       </div>
//     );
//   }

//   const isJobFinal = jobDetails.status === 'completed' || jobDetails.status === 'cancelled';

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{jobDetails.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{jobDetails.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">₹ {jobDetails.budget}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{new Date(jobDetails.endDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${jobDetails.status === "open"
//                 ? "bg-green-100 text-green-800"
//                 : jobDetails.status === "in_progress"
//                   ? "bg-blue-100 text-blue-800"
//                   : jobDetails.status === "completed"
//                     ? "bg-purple-100 text-purple-800"
//                     : "bg-red-100 text-red-800"
//                 }`}>
//                 {jobDetails.status.replace('_', ' ')}
//               </span>
//             </div>
//           </div>

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">

//             {/* Conditional rendering for accepted freelancer details */}
//             {acceptedFreelancer ? (
//               <div>
//                 <div>
//                   <h3 className="mb-4 text-2xl font-bold text-gray-800">Accepted Freelancer</h3>
//                   <div className="p-4 bg-white rounded-lg shadow-sm">
//                     <span className="font-semibold text-gray-800">{acceptedFreelancer.name}</span>
//                     <p className="text-sm text-gray-500">Email: {acceptedFreelancer.email}</p>
//                     <p className="text-sm text-gray-500">Phone: {acceptedFreelancer.phone}</p>
//                     <p className="text-sm text-gray-500">Bio: {acceptedFreelancer.bio}</p>
//                     <p className="text-sm text-gray-500">Location: {acceptedFreelancer.location}</p>
//                     <p className="text-sm text-gray-500">Skills: {acceptedFreelancer.skills.join(', ')}</p>
//                   </div>

//                   {/* Action buttons are only displayed if the job is in progress */}
//                   {jobDetails.status === 'in_progress' && (
//                     <div className="flex space-x-4 mt-6">
//                       <button
//                         onClick={handleComplete}
//                         disabled={isProcessingJob}
//                         className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isProcessingJob ? 'Completing...' : 'Mark as Complete'}
//                       </button>
//                       <button
//                         onClick={handleCancel}
//                         disabled={isProcessingJob}
//                         className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isProcessingJob ? 'Cancelling...' : 'Cancel Job'}
//                       </button>
//                     </div>
//                   )}

//                   {/* Final status message for completed or cancelled jobs */}
//                   {isJobFinal && (
//                     <div>
//                       <div className="p-6 text-center text-lg font-semibold text-gray-700">
//                         Job has been {jobDetails.status.replace('_', ' ')}.
//                       </div>
//                       <div className="mt-4">
//                         <NavLink
//                           to={`/feedback`}
//                           className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-blue-600 hover:bg-blue-700"
//                         >
//                           Give Feedback
//                         </NavLink>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               // Display pending requests if no freelancer is accepted
//               <>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//                 <div className="space-y-4">
//                   {requests.length > 0 ? (
//                     requests.map((request) => (
//                       <div key={request._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                         <div>
//                           <span className="font-semibold text-gray-800">{request.freelancerId.name}</span>
//                           <p className="text-sm text-gray-500">Email: {request.freelancerId.email}</p>
//                           <p className="text-sm text-gray-500">Status: {request.status}</p>
//                         </div>
//                         <div className="flex space-x-2 mt-2 sm:mt-0">
//                           <button
//                             onClick={() => handleAccept(request._id)}
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             {isAccepting ? 'Accepting...' : 'Accept'}
//                           </button>
//                           <button
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No requests yet.</p>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;




// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import {
//   getfulljobdetail,
//   acceptJobRequest,
//   markJobComplete,
//   markJobCancel
// } from '../services/jobsService';
// import { getUserById } from '../services/authService';

// const PostDetailsPage = () => {
//   const { id } = useParams();

//   const [jobDetails, setJobDetails] = useState(null);
//   const [requests, setRequests] = useState([]);
//   const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAccepting, setIsAccepting] = useState(false);
//   const [isProcessingJob, setIsProcessingJob] = useState(false);

//   const fetchJobDetails = async () => {
//     setLoading(true);
//     try {
//       const data = await getfulljobdetail(id);
//       setJobDetails(data.job);
//       setRequests(data.jobRequests);

//       const acceptedReq = data.jobRequests.find(req => req.status === 'accepted');
//       if (acceptedReq) {
//         const freelancerData = await getUserById(acceptedReq.freelancerId._id);
//         setAcceptedFreelancer(freelancerData);
//       } else {
//         setAcceptedFreelancer(null);
//       }
//     } catch (err) {
//       setError('Failed to fetch job details.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchJobDetails();
//     }
//   }, [id]);

//   const handleAccept = async (requestId) => {
//     setIsAccepting(true);
//     try {
//       await acceptJobRequest(requestId);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to accept job request:', err);
//     } finally {
//       setIsAccepting(false);
//     }
//   };

//   const handleComplete = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobComplete(id);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to mark job as complete:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   const handleCancel = async () => {
//     setIsProcessingJob(true);
//     try {
//       await markJobCancel(id);
//       await fetchJobDetails();
//     } catch (err) {
//       console.error('Failed to cancel job:', err);
//     } finally {
//       setIsProcessingJob(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-600 text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
//         <p className="text-gray-500 text-lg">Job not found.</p>
//       </div>
//     );
//   }

//   const isJobFinal = jobDetails.status === 'completed' || jobDetails.status === 'cancelled';

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//         <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Title</label>
//               <p className="text-gray-900">{jobDetails.title}</p>
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-semibold text-gray-700">Job Description</label>
//               <p className="text-gray-600">{jobDetails.description}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Amount</label>
//                 <p className="text-gray-900">₹ {jobDetails.budget}</p>
//               </div>
//               <div>
//                 <label className="block text-lg font-semibold text-gray-700">Due Date</label>
//                 <p className="text-gray-900">{new Date(jobDetails.endDate).toLocaleDateString()}</p>
//               </div>
//             </div>
//             <div>
//               <label className="block text-lg font-semibold text-gray-700">Status</label>
//               <span className={`px-4 py-1 text-sm font-medium rounded-full ${jobDetails.status === "open"
//                 ? "bg-green-100 text-green-800"
//                 : jobDetails.status === "in_progress"
//                   ? "bg-blue-100 text-blue-800"
//                   : jobDetails.status === "completed"
//                     ? "bg-purple-100 text-purple-800"
//                     : "bg-red-100 text-red-800"
//                 }`}>
//                 {jobDetails.status.replace('_', ' ')}
//               </span>
//             </div>
//           </div>

//           <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
//             {/* Main conditional logic based on job status */}
//             {jobDetails.status === 'open' ? (
//               // Display pending requests if the job is open
//               <>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Requests</h3>
//                 <div className="space-y-4">
//                   {requests.length > 0 ? (
//                     requests.map((request) => (
//                       <div key={request._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm">
//                         <div>
//                           <span className="font-semibold text-gray-800">{request.freelancerId.name}</span>
//                           <p className="text-sm text-gray-500">Email: {request.freelancerId.email}</p>
//                           <p className="text-sm text-gray-500">Status: {request.status}</p>
//                         </div>
//                         <div className="flex space-x-2 mt-2 sm:mt-0">
//                           <button
//                             onClick={() => handleAccept(request._id)}
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             {isAccepting ? 'Accepting...' : 'Accept'}
//                           </button>
//                           <button
//                             disabled={isAccepting || request.status !== 'pending'}
//                             className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No requests yet.</p>
//                   )}
//                 </div>
//               </>
//             ) : (
//               // If job is in_progress, completed, or cancelled, show freelancer details
//               <div>
//                 <h3 className="mb-4 text-2xl font-bold text-gray-800">Accepted Freelancer</h3>
//                 <div className="p-4 bg-white rounded-lg shadow-sm">
//                   {acceptedFreelancer ? (
//                     <>
//                       <span className="font-semibold text-gray-800">{acceptedFreelancer.name}</span>
//                       <p className="text-sm text-gray-500">Email: {acceptedFreelancer.email}</p>
//                       <p className="text-sm text-gray-500">Phone: {acceptedFreelancer.phone}</p>
//                       <p className="text-sm text-gray-500">Bio: {acceptedFreelancer.bio}</p>
//                       <p className="text-sm text-gray-500">Location: {acceptedFreelancer.location}</p>
//                       <p className="text-sm text-gray-500">Skills: {acceptedFreelancer.skills.join(', ')}</p>
//                     </>
//                   ) : (
//                     <p className="text-gray-500">No freelancer was accepted for this job.</p>
//                   )}
//                 </div>

//                 {/* Action buttons are only displayed if the job is in progress */}
//                 {jobDetails.status === 'in_progress' && (
//                   <div className="flex space-x-4 mt-6">
//                     <button
//                       onClick={handleComplete}
//                       disabled={isProcessingJob}
//                       className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isProcessingJob ? 'Completing...' : 'Mark as Complete'}
//                     </button>
//                     <button
//                       onClick={handleCancel}
//                       disabled={isProcessingJob}
//                       className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isProcessingJob ? 'Cancelling...' : 'Cancel Job'}
//                     </button>
//                   </div>
//                 )}

//                 {/* Final status message and feedback link */}
//                 {isJobFinal && (
//                   <div className="p-6 text-center">
//                     <p className="text-lg font-semibold text-gray-700">
//                       Job has been {jobDetails.status.replace('_', ' ')}.
//                     </p>
//                     {jobDetails.status === 'completed' && (
//                       <div className="mt-4">
//                         <NavLink
//                           to={`/feedback/${id}`}
//                           className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-blue-600 hover:bg-blue-700"
//                         >
//                           Give Feedback
//                         </NavLink>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetailsPage;





import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import {
  getfulljobdetail,
  acceptJobRequest,
  markJobComplete,
  markJobCancel,
} from "../services/jobsService";
import { getUserById } from "../services/authService";

const PostDetailsPage = () => {
  const { id } = useParams();

  const [jobDetails, setJobDetails] = useState(null);
  const [requests, setRequests] = useState([]);
  const [acceptedFreelancer, setAcceptedFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isProcessingJob, setIsProcessingJob] = useState(false);

  const fetchJobDetails = async () => {
    setLoading(true);
    try {
      const data = await getfulljobdetail(id);
      setJobDetails(data.job);
      setRequests(data.jobRequests);

      const acceptedReq = data.jobRequests.find(
        (req) => req.status === "accepted"
      );
      if (acceptedReq) {
        const freelancerData = await getUserById(acceptedReq.freelancerId._id);
        setAcceptedFreelancer(freelancerData);
      } else {
        setAcceptedFreelancer(null);
      }
    } catch (err) {
      setError("Failed to fetch job details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  const handleAccept = async (requestId) => {
    setIsAccepting(true);
    try {
      await acceptJobRequest(requestId);
      await fetchJobDetails();
    } catch (err) {
      console.error("Failed to accept job request:", err);
    } finally {
      setIsAccepting(false);
    }
  };

  const handleComplete = async () => {
    setIsProcessingJob(true);
    try {
      await markJobComplete(id);
      await fetchJobDetails();
    } catch (err) {
      console.error("Failed to mark job as complete:", err);
    } finally {
      setIsProcessingJob(false);
    }
  };

  const handleCancel = async () => {
    setIsProcessingJob(true);
    try {
      await markJobCancel(id);
      await fetchJobDetails();
    } catch (err) {
      console.error("Failed to cancel job:", err);
    } finally {
      setIsProcessingJob(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!jobDetails) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <p className="text-gray-500 text-lg">Job not found.</p>
      </div>
    );
  }

  const isJobFinal =
    jobDetails.status === "completed" || jobDetails.status === "cancelled";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Post Details</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column: Job Details */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">
                Job Title
              </label>
              <p className="text-gray-900">{jobDetails.title}</p>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold text-gray-700">
                Job Description
              </label>
              <p className="text-gray-600">{jobDetails.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Amount
                </label>
                <p className="text-gray-900">₹ {jobDetails.budget}</p>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Due Date
                </label>
                <p className="text-gray-900">
                  {new Date(jobDetails.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Status
              </label>
              <span
                className={`px-4 py-1 text-sm font-medium rounded-full ${
                  jobDetails.status === "open"
                    ? "bg-green-100 text-green-800"
                    : jobDetails.status === "in_progress"
                    ? "bg-blue-100 text-blue-800"
                    : jobDetails.status === "completed"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {jobDetails.status.replace("_", " ")}
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 p-6 bg-gray-50 rounded-lg shadow-md">
            {/* If job is still open → show requests */}
            {jobDetails.status === "open" ? (
              <>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Requests
                </h3>
                <div className="space-y-4">
                  {requests.length > 0 ? (
                    requests.map((request) => (
                      <div
                        key={request._id}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <div>
                          <span className="font-semibold text-gray-800">
                            {request.freelancerId.name}
                          </span>
                          <p className="text-sm text-gray-500">
                            Email: {request.freelancerId.email}
                          </p>
                          <p className="text-sm text-gray-500">
                            Status: {request.status}
                          </p>
                        </div>
                        <div className="flex space-x-2 mt-2 sm:mt-0">
                          <button
                            onClick={() => handleAccept(request._id)}
                            disabled={
                              isAccepting || request.status !== "pending"
                            }
                            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isAccepting ? "Accepting..." : "Accept"}
                          </button>
                          <button
                            disabled
                            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 cursor-not-allowed"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No requests yet.</p>
                  )}
                </div>
              </>
            ) : (
              // Show accepted freelancer details when job is not open
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Accepted Freelancer
                </h3>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  {acceptedFreelancer ? (
                    <>
                      <span className="font-semibold text-gray-800">
                        {acceptedFreelancer.name}
                      </span>
                      <p className="text-sm text-gray-500">
                        Email: {acceptedFreelancer.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        Phone: {acceptedFreelancer.phone}
                      </p>
                      <p className="text-sm text-gray-500">
                        Bio: {acceptedFreelancer.bio}
                      </p>
                      <p className="text-sm text-gray-500">
                        Location: {acceptedFreelancer.location}
                      </p>
                      <p className="text-sm text-gray-500">
                        Skills:{" "}
                        {acceptedFreelancer.skills?.length > 0
                          ? acceptedFreelancer.skills.join(", ")
                          : "No skills added"}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-500">
                      No freelancer was accepted for this job.
                    </p>
                  )}
                </div>

                {/* Job in progress → action buttons */}
                {jobDetails.status === "in_progress" && (
                  <div className="flex space-x-4 mt-6">
                    <button
                      onClick={handleComplete}
                      disabled={isProcessingJob}
                      className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessingJob ? "Completing..." : "Mark as Complete"}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isProcessingJob}
                      className="flex-1 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessingJob ? "Cancelling..." : "Cancel Job"}
                    </button>
                  </div>
                )}

                {/* Final states */}
                {isJobFinal && (
                  <div className="p-6 text-center">
                    <p className="text-lg font-semibold text-gray-700">
                      Job has been {jobDetails.status.replace("_", " ")}.
                    </p>
                    {jobDetails.status === "completed" && (
                      <div className="mt-4">
                        <NavLink
                          to={`/feedback/${id}`}
                          className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-full bg-blue-600 hover:bg-blue-700"
                        >
                          Give Feedback
                        </NavLink>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
