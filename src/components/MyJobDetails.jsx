// import React from 'react';
// import { useParams } from 'react-router-dom';

// const MyJobDetailsPage = () => {
//     const { id } = useParams();

//     // Dummy data for a specific job and client
//     const jobDetails = {
//         id: id,
//         clientName: "Jane Doe",
//         address: "123 Main St, Anytown, USA",
//         contactNumber: "123-456-7890",
//         email: "jane.doe@example.com",
//         message: "Hi, I need this plumbing fix done urgently. Please let me know your availability.",
//         title: "Plumbing Fix for Leaky Faucet",
//         description: "Repair a leaky faucet in the kitchen.",
//         status: "In Progress",
//         endDate: "2025-09-15",
//         amountStatus: "Pending" // or "Paid"
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//             <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Request Details</h2>
                
//                 {/* Two-column layout for client and job info */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Left Column: Client Details */}
//                     <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Details</h3>
//                         <div className="space-y-4 text-gray-700">
//                             <div>
//                                 <label className="block font-semibold">Client Name</label>
//                                 [cite_start]<p>{jobDetails.clientName} [cite: 76]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Address</label>
//                                 [cite_start]<p>{jobDetails.address} [cite: 72]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Contact Number</label>
//                                 [cite_start]<p>{jobDetails.contactNumber} [cite: 78]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Email</label>
//                                 [cite_start]<p>{jobDetails.email} [cite: 73]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Message</label>
//                                 [cite_start]<p>{jobDetails.message} [cite: 74]</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column: Job Details & Actions */}
//                     <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-4">Job Info</h3>
//                         <div className="space-y-4 text-gray-700">
//                             <div>
//                                 <label className="block font-semibold">Job Title</label>
//                                 [cite_start]<p>{jobDetails.title} [cite: 77]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Job Description</label>
//                                 [cite_start]<p>{jobDetails.description} [cite: 82]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Status</label>
//                                 [cite_start]<p>{jobDetails.status} [cite: 79]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">End Date</label>
//                                 [cite_start]<p>{jobDetails.endDate} [cite: 80]</p>
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">Amount Status</label>
//                                 [cite_start]<p>{jobDetails.amountStatus} [cite: 83]</p>
//                             </div>
//                         </div>

//                         {/* Action buttons */}
//                         <div className="flex space-x-4 mt-6">
//                             <button className="flex-1 px-4 py-3 font-semibold text-white transition-colors duration-200 rounded-lg shadow-lg bg-green-500 hover:bg-green-600">
//                                 [cite_start]Done [cite: 84]
//                             </button>
//                             <button className="flex-1 px-4 py-3 font-semibold text-white transition-colors duration-200 rounded-lg shadow-lg bg-red-500 hover:bg-red-600">
//                                 [cite_start]Cancel [cite: 84]
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyJobDetailsPage;

import React from 'react';
import { useParams } from 'react-router-dom';

const MyJobDetailsPage = () => {
    const { id } = useParams();

    const jobDetails = {
        id: id,
        clientName: "Jane Doe",
        address: "123 Main St, Anytown, USA",
        contactNumber: "123-456-7890",
        email: "jane.doe@example.com",
        message: "Hi, I need this plumbing fix done urgently. Please let me know your availability.",
        title: "Plumbing Fix for Leaky Faucet",
        description: "Repair a leaky faucet in the kitchen.",
        status: "In Progress",
        endDate: "2025-09-15",
        amountStatus: "Pending"
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Request Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Client Details */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Details</h3>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <label className="block font-semibold">Client Name</label>
                                <p>{jobDetails.clientName}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Address</label>
                                <p>{jobDetails.address}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Contact Number</label>
                                <p>{jobDetails.contactNumber}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Email</label>
                                <p>{jobDetails.email}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Message</label>
                                <p>{jobDetails.message}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Job Details & Actions */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Job Info</h3>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <label className="block font-semibold">Job Title</label>
                                <p>{jobDetails.title}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Job Description</label>
                                <p>{jobDetails.description}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Status</label>
                                <p>{jobDetails.status}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">End Date</label>
                                <p>{jobDetails.endDate}</p>
                            </div>
                            <div>
                                <label className="block font-semibold">Amount Status</label>
                                <p>{jobDetails.amountStatus}</p>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-4 mt-6">
                            <button className="flex-1 px-4 py-3 font-semibold text-white transition-colors duration-200 rounded-lg shadow-lg bg-green-500 hover:bg-green-600">
                                Done
                            </button>
                            <button className="flex-1 px-4 py-3 font-semibold text-white transition-colors duration-200 rounded-lg shadow-lg bg-red-500 hover:bg-red-600">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobDetailsPage;