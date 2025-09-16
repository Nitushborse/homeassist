// import React, { useState } from 'react';

// // Mock user data for initial display
// const MOCK_USER = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   role: "freelancer",
//   phone: "123-456-7890",
//   location: "New York, NY",
//   skills: "React, Node.js, JavaScript, MongoDB",
//   bio: "A passionate full-stack developer with over 5 years of experience building scalable web applications.",
//   avatar: "https://placehold.co/128x128/3B82F6/ffffff?text=JD"
// };

// const Profile = () => {
//   const [userProfile, setUserProfile] = useState(MOCK_USER);
//   const [status, setStatus] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     phone: MOCK_USER.phone,
//     location: MOCK_USER.location,
//     skills: MOCK_USER.skills,
//     bio: MOCK_USER.bio,
//     avatarPreview: MOCK_USER.avatar
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle avatar file selection
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData(prev => ({
//           ...prev,
//           avatarPreview: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Simulate updating the profile (no backend call)
//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     setStatus('Updating profile...');

//     // Simulate a successful update by updating the local state
//     setTimeout(() => {
//       setUserProfile({
//         ...userProfile,
//         ...formData,
//         skills: formData.skills,
//         avatar: formData.avatarPreview,
//       });
//       setStatus('Profile updated successfully!');
//       setIsEditing(false);
//     }, 1500); // Simulate network latency
//   };

//   // Cancel the edit and revert form data
//   const cancelEdit = () => {
//     setIsEditing(false);
//     // Reset form data to the current user profile state
//     setFormData({
//       ...userProfile,
//       skills: Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : userProfile.skills,
//       avatarPreview: userProfile.avatar
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
//       <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8">
//         <div className="flex flex-col items-center">
//           <div className="relative mb-4">
//             <img
//               src={formData.avatarPreview || userProfile.avatar || "https://placehold.co/128x128/9CA3AF/ffffff?text=User"}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700"
//             />
//             {isEditing && (
//               <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full cursor-pointer transition-colors duration-200">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.3 2.3 0 0110.15 4.5a2.3 2.3 0 013.323 1.675M16.5 10.5V1.5m0 0l-3 3m3-3l3 3m-4.5 15.5a2.3 2.3 0 01-3.323-1.675M7.5 13.5v9m0 0l-3-3m3 3l3-3m-9.5-2.5h-9m0 0l-3-3m3 3l-3 3m17.5 2.5h-9m0 0l-3-3m3 3l-3 3" />
//                 </svg>
//                 <input
//                   id="avatar-upload"
//                   type="file"
//                   name="avatarFile"
//                   accept="image/*"
//                   onChange={handleAvatarChange}
//                   className="hidden"
//                 />
//               </label>
//             )}
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{userProfile.name}</h1>
//           <p className="text-lg text-gray-600 dark:text-gray-400">{userProfile.email}</p>
//           <span className="text-sm font-medium px-3 py-1 mt-2 rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
//             {userProfile.role}
//           </span>
//         </div>

//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
//               <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Phone</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-gray-900 dark:text-white">{userProfile.phone || 'Not provided'}</p>
//               )}
//             </div>

//             <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner">
//               <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Location</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-gray-900 dark:text-white">{userProfile.location || 'Not provided'}</p>
//               )}
//             </div>

//             <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner col-span-1 md:col-span-2">
//               <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Skills</label>
//               <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Separate skills with a comma (e.g., React, Tailwind, MongoDB)</p>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-gray-900 dark:text-white">{Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : (userProfile.skills || 'Not provided')}</p>
//               )}
//             </div>

//             <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-inner col-span-1 md:col-span-2">
//               <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1">Bio</label>
//               {isEditing ? (
//                 <textarea
//                   name="bio"
//                   value={formData.bio}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-3 py-2 bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-gray-900 dark:text-white">{userProfile.bio || 'Not provided'}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-end gap-4">
//           {isEditing ? (
//             <>
//               <button
//                 onClick={handleUpdateProfile}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={cancelEdit}
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Update Profile
//             </button>
//           )}
//         </div>
//         {status && (
//           <div className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
//             {status}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// 2

// import React, { useState } from 'react';

// // Mock user data for initial display
// const MOCK_USER = {
//   name: "Jane Doe",
//   email: "jane.doe@example.com",
//   role: "freelancer",
//   phone: "123-456-7890",
//   location: "New York, NY",
//   skills: "React, Node.js, JavaScript, MongoDB",
//   bio: "A passionate full-stack developer with over 5 years of experience building scalable web applications.",
//   avatar: "https://placehold.co/128x128/3B82F6/ffffff?text=JD"
// };

// const App = () => {
//   const [userProfile, setUserProfile] = useState(MOCK_USER);
//   const [status, setStatus] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     phone: MOCK_USER.phone,
//     location: MOCK_USER.location,
//     skills: MOCK_USER.skills,
//     bio: MOCK_USER.bio,
//     avatarPreview: MOCK_USER.avatar
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle avatar file selection
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData(prev => ({
//           ...prev,
//           avatarPreview: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Simulate updating the profile (no backend call)
//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     setStatus('Updating profile...');

//     // Simulate a successful update by updating the local state
//     setTimeout(() => {
//       setUserProfile({
//         ...userProfile,
//         ...formData,
//         skills: formData.skills,
//         avatar: formData.avatarPreview,
//       });
//       setStatus('Profile updated successfully!');
//       setIsEditing(false);
//     }, 1500); // Simulate network latency
//   };

//   // Cancel the edit and revert form data
//   const cancelEdit = () => {
//     setIsEditing(false);
//     // Reset form data to the current user profile state
//     setFormData({
//       ...userProfile,
//       skills: Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : userProfile.skills,
//       avatarPreview: userProfile.avatar
//     });
//   };

//   return (
//     <div className="flex justify-center p-4 md:p-8 font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
//       <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden md:flex">
//         {/* Left Column: User Info and Avatar */}
//         <div className="md:w-1/3 flex flex-col items-center justify-center p-6 md:p-8 bg-blue-600 dark:bg-blue-900 text-white md:rounded-l-3xl rounded-t-3xl md:rounded-t-none">
//           <div className="relative mb-6">
//             <img
//               src={formData.avatarPreview || userProfile.avatar || "https://placehold.co/128x128/ffffff/3B82F6?text=JD"}
//               alt="User Avatar"
//               className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-blue-700 transition-transform duration-300 transform hover:scale-105"
//             />
//             {isEditing && (
//               <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 p-2 bg-blue-800 hover:bg-blue-900 text-white rounded-full cursor-pointer transition-colors duration-200">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.3 2.3 0 0110.15 4.5a2.3 2.3 0 013.323 1.675M16.5 10.5V1.5m0 0l-3 3m3-3l3 3m-4.5 15.5a2.3 2.3 0 01-3.323-1.675M7.5 13.5v9m0 0l-3-3m3 3l3-3m-9.5-2.5h-9m0 0l-3-3m3 3l-3 3m17.5 2.5h-9m0 0l-3-3m3 3l-3 3" />
//                 </svg>
//                 <input
//                   id="avatar-upload"
//                   type="file"
//                   name="avatarFile"
//                   accept="image/*"
//                   onChange={handleAvatarChange}
//                   className="hidden"
//                 />
//               </label>
//             )}
//           </div>
//           <h1 className="text-3xl font-bold text-center">{userProfile.name}</h1>
//           <p className="text-md text-blue-100 dark:text-blue-300">{userProfile.email}</p>
//           <span className="text-sm font-medium px-3 py-1 mt-2 rounded-full bg-blue-700 dark:bg-blue-800 text-white">
//             {userProfile.role}
//           </span>
//         </div>

//         {/* Right Column: Profile Details and Form */}
//         <div className="md:w-2/3 p-6 md:p-8">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Profile Details</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
//               <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Phone</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-lg font-medium">{userProfile.phone || 'Not provided'}</p>
//               )}
//             </div>

//             <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
//               <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Location</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-lg font-medium">{userProfile.location || 'Not provided'}</p>
//               )}
//             </div>

//             <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 col-span-1 md:col-span-2">
//               <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Skills</label>
//               <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Separate skills with a comma (e.g., React, Tailwind, MongoDB)</p>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-lg font-medium">{Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : (userProfile.skills || 'Not provided')}</p>
//               )}
//             </div>

//             <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 col-span-1 md:col-span-2">
//               <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">Bio</label>
//               {isEditing ? (
//                 <textarea
//                   name="bio"
//                   value={formData.bio}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ) : (
//                 <p className="text-base leading-relaxed">{userProfile.bio || 'Not provided'}</p>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-end gap-4">
//             {isEditing ? (
//               <>
//                 <button
//                   onClick={handleUpdateProfile}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={cancelEdit}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => setIsEditing(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Update Profile
//               </button>
//             )}
//           </div>
//           {status && (
//             <div className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
//               {status}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';

// Mock user data for initial display
const MOCK_USER = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  role: "freelancer",
  phone: "123-456-7890",
  location: "New York, NY",
  skills: "React, Node.js, JavaScript, MongoDB",
  bio: "A passionate full-stack developer with over 5 years of experience building scalable web applications.",
  avatar: "https://placehold.co/128x128/3B82F6/ffffff?text=JD"
};

const App = () => {
  const [userProfile, setUserProfile] = useState(MOCK_USER);
  const [status, setStatus] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: MOCK_USER.phone,
    location: MOCK_USER.location,
    skills: MOCK_USER.skills,
    bio: MOCK_USER.bio,
    avatarPreview: MOCK_USER.avatar
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
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setStatus('Updating profile...');

    // Simulate a successful update by updating the local state
    setTimeout(() => {
      setUserProfile({
        ...userProfile,
        ...formData,
        skills: formData.skills,
        avatar: formData.avatarPreview,
      });
      setStatus('Profile updated successfully!');
      setIsEditing(false);
    }, 1500); // Simulate network latency
  };

  // Cancel the edit and revert form data
  const cancelEdit = () => {
    setIsEditing(false);
    // Reset form data to the current user profile state
    setFormData({
      ...userProfile,
      skills: Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : userProfile.skills,
      avatarPreview: userProfile.avatar
    });
  };

  return (
    <div className="flex justify-center p-4 md:p-8 font-sans bg-white dark:text-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden md:flex">
        {/* Left Column: User Info and Avatar */}
        <div className="md:w-1/3 flex flex-col items-center justify-center p-6 md:p-8 bg-[#cc7408] text-white md:rounded-l-3xl rounded-t-3xl md:rounded-t-none">
          <div className="relative mb-6">
            <img
              src={formData.avatarPreview || userProfile.avatar || "https://placehold.co/128x128/ffffff/3B82F6?text=JD"}
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
          <h1 className="text-3xl font-bold text-center">{userProfile.name}</h1>
          <p className="text-md text-white dark:text-gray-200">{userProfile.email}</p>
          <span className="text-sm font-medium px-3 py-1 mt-2 rounded-full bg-[#A35B07] dark:bg-[#874905] text-white">
            {userProfile.role}
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
                <p className="text-lg font-medium">{userProfile.phone || 'Not provided'}</p>
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
                <p className="text-lg font-medium">{userProfile.location || 'Not provided'}</p>
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
                <p className="text-lg font-medium">{Array.isArray(userProfile.skills) ? userProfile.skills.join(', ') : (userProfile.skills || 'Not provided')}</p>
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
                <p className="text-base leading-relaxed">{userProfile.bio || 'Not provided'}</p>
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
