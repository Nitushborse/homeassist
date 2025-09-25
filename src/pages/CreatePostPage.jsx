import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, addJob, resetSuccess } from "../features/job/jobSlice";
import { useNavigate } from "react-router-dom";


const CreatePostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, loading, success, error } = useSelector((state) => state.jobs);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    startDate: "",
    endDate: "",
    categoryId: "",
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      navigate("/client/posts");
      dispatch(resetSuccess());
    }
  }, [success, navigate, dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(formData));
  };

  console.log(formData)

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-2 container-centered">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Create a New Post</h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          onSubmit={handleSubmit}
        >
          {/* Job Title */}
          <div className="col-span-full">
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700">
              Job Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Description */}
          <div className="col-span-full">
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>

          {/* Amount */}
          <div>
            <label htmlFor="budget" className="block text-lg font-semibold text-gray-700">
              Amount
            </label>
            <input
              id="budget"
              type="number"
              placeholder="Amount"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-lg font-semibold text-gray-700">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label htmlFor="categoryId" className="block text-lg font-semibold text-gray-700">
              Category
            </label>
            <select
              id="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select Category</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-lg font-semibold text-gray-700">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          {/* Create Post Button */}
          <div className="col-span-full mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-md shadow-lg bg-primary hover:bg-blue-600 hover:shadow-xl disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create new post"}
            </button>
          </div>
        </form>

        {error && (
          <p className="mt-4 text-red-600 text-center font-medium">
            {error.message || "Something went wrong"}
          </p>
        )}

      </div>
    </div>
  );
};

export default CreatePostPage;
