import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import {updateProfile} from "../services/authService"


const App = () => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [status, setStatus] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    phone: user?.phone || "",
    location: user?.location || "",
    skills: Array.isArray(user?.skills) ? user.skills.join(", ") : (user?.skills || ""),
    bio: user?.bio || "",
    avatarPreview: user?.avatar || "https://placehold.co/128x128?text=User",
    avatarFile: null,
  });


  

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatarPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate updating the profile (no backend call)
  const handleUpdateProfile = async(e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const updatedUser = await updateProfile(formData);

      // Update redux state
      dispatch(setUser(updatedUser));

      setStatus("✅ Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      setStatus(err.response?.data?.message || "❌ Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Cancel the edit and revert form data
  const cancelEdit = () => {
    setIsEditing(false);
    setFormData({
      phone: user?.phone || "",
      location: user?.location || "",
      skills: Array.isArray(user?.skills) ? user.skills.join(", ") : (user?.skills || ""),
      bio: user?.bio || "",
      avatarPreview: user?.avatar || "https://placehold.co/128x128?text=User",
      avatarFile: null,
    });
  };

  if (!user) {
    return <div className="p-6 text-center">⚠️ No user data found. Please log in.</div>;
  }


  return (
    <div className="flex justify-center p-4 md:p-8 font-sans bg-white dark:text-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden md:flex">
        {/* Left Column: User Info and Avatar */}
        <div className="md:w-1/3 flex flex-col items-center justify-center p-6 md:p-8 bg-[#cc7408] text-white md:rounded-l-3xl rounded-t-3xl md:rounded-t-none">
          <div className="relative mb-6">
            <img
              src={formData.avatarPreview}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-[#cc7408] transition-transform duration-300 transform hover:scale-105"
            />
            {isEditing && (
              <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 p-2 bg-[#A35B07] hover:bg-[#874905] text-white rounded-full cursor-pointer transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.3 2.3 0 0110.15 4.5a2.3 2.3 0 013.323 1.675M16.5 10.5V1.5m0 0l-3 3m3-3l3 3m-4.5 15.5a2.3 2.3 0 01-3.323-1.675M7.5 13.5v9m0 0l-3-3m3 3l3-3m-9.5-2.5h-9m0 0l-3-3m3 3l-3 3m17.5 2.5h-9m0 0l-3-3m3 3l-3 3" />
                </svg>
                <input
                  id="avatar-upload"
                  type="file"
                  name="avatarFile"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <h1 className="text-3xl font-bold text-center">{user.name}</h1>
          <p className="text-md text-white dark:text-gray-200">{user.email}</p>
          <span className="text-sm font-medium px-3 py-1 mt-2 rounded-full bg-[#A35B07] dark:bg-[#874905] text-white">
            {user.role}
          </span>
        </div>

        {/* Right Column: Profile Details and Form */}
        <div className="md:w-2/3 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Profile Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Phone</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408]"
                />
              ) : (
                <p className="text-lg font-medium">{user.phone || 'Not provided'}</p>
              )}
            </div>

            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408]"
                />
              ) : (
                <p className="text-lg font-medium">{user.location || 'Not provided'}</p>
              )}
            </div>

            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Skills</label>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Separate skills with a comma (e.g., React, Tailwind, MongoDB)</p>
              {isEditing ? (
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408]"
                />
              ) : (
                <p className="text-lg font-medium">{Array.isArray(user.skills) ? user.skills.join(', ') : (user.skills || 'Not provided')}</p>
              )}
            </div>

            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408]"
                />
              ) : (
                <p className="text-base leading-relaxed">{user.bio || 'Not provided'}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleUpdateProfile}
                  className="bg-[#cc7408] hover:bg-[#A35B07] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:ring-offset-2"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-[#cc7408] hover:bg-[#A35B07] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:ring-offset-2"
              >
                Update Profile
              </button>
            )}
          </div>
          {status && (
            <div className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

