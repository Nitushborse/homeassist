

const CreatePostPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-2 container-centered">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Create a New Post</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Job Title */}
          <div className="col-span-full">
            <label htmlFor="jobTitle" className="block text-lg font-semibold text-gray-700">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              placeholder="Job Title"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Description */}
          <div className="col-span-full">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              rows="4"
              placeholder="Job Description"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="amount" className="block text-lg font-semibold text-gray-700">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Amount"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-lg font-semibold text-gray-700">Start Date</label>
            <input
              id="startDate"
              type="date"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-lg font-semibold text-gray-700">End Date</label>
            <input
              id="endDate"
              type="date"
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Create Post Button */}
          <div className="col-span-full mt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl"
            >
              Create new post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;