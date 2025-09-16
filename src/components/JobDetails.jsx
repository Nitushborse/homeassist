
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
    // We use useParams to get the job ID from the URL.
    // In a real application, you would use this ID to fetch data from an API.
    const { id } = useParams();

    // Dummy data for a single job
    // This is the data that would be fetched from your backend
    const job = {
        id: id,
        title: "Plumbing Fix for Leaky Faucet",
        description: "I have a persistent leaky faucet in my kitchen that needs to be repaired. The drip is constant and has been a problem for weeks. Looking for a skilled plumber to fix it permanently.",
        amount: "₹ 1,500",
        startDate: "2025-09-15",
        endDate: "2025-09-15"
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 container-centered mt-2">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Details</h2>
                
                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Column: Job Description */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h3>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700">Description</label>
                            <p className="text-gray-600 mt-1">{job.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <label className="block font-semibold text-gray-700">Amount</label>
                                <p className="text-gray-900 font-bold">{job.amount}</p>
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700">Start Date</label>
                                <p className="text-gray-900">{job.startDate}</p>
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700">End Date</label>
                                <p className="text-gray-900">{job.endDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Send Request Form */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Your Proposal</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="proposal" className="block text-lg font-semibold text-gray-700">Your Message</label>
                                <textarea
                                    id="proposal"
                                    rows="6"
                                    placeholder="Tell the client why you're the right person for this job..."
                                    className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
                            >
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;