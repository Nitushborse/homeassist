import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getfulljobdetail, createRequest } from "../services/jobsService";

const JobDetailsPage = () => {
    const { id } = useParams();
    const { user } = useSelector((state) => state.auth);

    const [jobDetails, setJobDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [alreadyRequested, setAlreadyRequested] = useState(false);
    const [requestStatus, setRequestStatus] = useState(null);

    const fetchJobDetails = async () => {
        try {
            setLoading(true);
            const data = await getfulljobdetail(id); // response: { job, jobRequests }
            setJobDetails(data.job);

            if (user) {
                const request = data.jobRequests.find(
                    (req) => req.freelancerId?._id === user._id
                );
                if (request) {
                    setAlreadyRequested(true);
                    setRequestStatus(request.status); // pending / accepted / rejected
                }
            }
        } catch (err) {
            console.error("Failed to fetch job details:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobDetails();
    }, [id, user]);


    const handleRequest = async () => {
        try {
            const res = await createRequest(id);
            setAlreadyRequested(true);
            setRequestStatus(res.status); // backend returns { status: "pending" }
            await fetchJobDetails();
        } catch (err) {
            console.error("Request failed:", err);
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    if (loading) return <p className="p-8 text-center">Loading job details...</p>;
    if (!jobDetails) return <p className="p-8 text-center">Job not found</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 container-centered mt-2">
            <div className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                    Job Details
                </h2>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column: Job Description */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                            {jobDetails.title}
                        </h3>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700">
                                Description
                            </label>
                            <p className="text-gray-600 mt-1">{jobDetails.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                            <div>
                                <label className="block font-semibold text-gray-700">Amount</label>
                                <p className="text-gray-900 font-bold">₹ {jobDetails.budget}</p>
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700">Start Date</label>
                                <p className="text-gray-900">
                                    {new Date(jobDetails.startDate).toLocaleDateString("en-GB")}
                                </p>
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700">End Date</label>
                                <p className="text-gray-900">
                                    {new Date(jobDetails.endDate).toLocaleDateString("en-GB")}
                                </p>
                            </div>
                            <div>
                                <label className="block font-semibold text-gray-700">Status</label>
                                <p className="capitalize text-gray-900">{jobDetails.status}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col gap-6">
                        {/* Client Details Card */}
                        {jobDetails.clientId && (
                            <div className="p-4 bg-white border rounded-lg shadow-sm">
                                <h4 className="text-lg font-bold text-gray-800 mb-3">
                                    Client Details
                                </h4>
                                <div className="flex items-center mb-3">
                                    <img
                                        src={jobDetails.clientId.avatar}
                                        alt={jobDetails.clientId.name}
                                        className="w-12 h-12 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold">{jobDetails.clientId.name}</p>
                                        <p className="text-sm text-gray-600">{jobDetails.clientId.email}</p>
                                    </div>
                                </div>
                                <p>
                                    <span className="font-semibold">Phone:</span>{" "}
                                    {jobDetails.clientId.phone}
                                </p>
                                <p>
                                    <span className="font-semibold">Location:</span>{" "}
                                    {jobDetails.clientId.location}
                                </p>
                                <p>
                                    <span className="font-semibold">Bio:</span>{" "}
                                    {jobDetails.clientId.bio}
                                </p>
                            </div>
                        )}

                        {/* Request Button - Hide if status is completed */}
                        {jobDetails.status !== "completed" && (
                            alreadyRequested ? (
                                <p className="text-lg font-semibold text-blue-600 text-center">
                                    You have already requested this job (
                                    <span className="capitalize">{requestStatus}</span>)
                                </p>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleRequest}
                                    className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
                                >
                                    Send Request
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
