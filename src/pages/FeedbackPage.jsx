import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
            <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Give Your Feedback</h2>
                <p className="text-center text-gray-600 mb-8">We would love to hear about your experience.</p>
                
                {/* Star Rating Section */}
                <div className="flex justify-center mb-8">
                    {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    className="hidden"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    className="cursor-pointer transition-colors duration-200"
                                    size={40}
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(0)}
                                />
                            </label>
                        );
                    })}
                </div>

                {/* Feedback Form */}
                <form>
                    <div className="mb-6">
                        <label htmlFor="jobTitle" className="block text-lg font-semibold text-gray-700 mb-2">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            placeholder="Enter the job title"
                            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="feedbackMessage" className="block text-lg font-semibold text-gray-700 mb-2">Your Feedback</label>
                        <textarea
                            id="feedbackMessage"
                            rows="6"
                            placeholder="Share your thoughts on the service..."
                            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackPage;