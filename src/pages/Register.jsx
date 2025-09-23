// import { useState } from 'react';
// import { registerUser } from '../services/authService';
// import { useNavigate } from 'react-router-dom';



// export default function Register() {
//   // State variables to store form input values.
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('client'); 
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate()
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to handle form submission.
//   const handleSubmit = async (event) => {    
//     event.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const data = await registerUser({
//         name: username,
//         email,
//         role,
//         password,
//       });

//       console.log("✅ User registered:", data);
//       navigate("/login");
//     } catch (err) {
//       console.error("❌ Registration error:", err);

//       // If backend sends structured error
//       if (err.response) {
//         if (err.response.status === 409) {
//           setError("User already exists. Please login instead.");
//         } else if (err.response.status === 400) {
//           setError("All fields are required.");
//         } else {
//           setError(err.response.data?.message || "Something went wrong.");
//         }
//       } else {
//         setError("Network error. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }

//     setUsername('');
//     setEmail('');
//     setPassword('');
//     setRole('client');
//   };

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//     setIsDropdownOpen(false); 
//   };

//   return (
//     // Main container using flexbox to center the form.
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

//       {/* Form container with styling. */}
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Create an Account
//         </h2>

//         {/* The registration form element. */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Username Input Field */}
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
//             />
//           </div>

//           {/* Email Input Field */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
//             />
//           </div>

//           {/* Password Input Field */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
//             />
//           </div>

//           {/* Custom Role Selection Dropdown */}
//           <div className="relative">
//             <label
//               htmlFor="role-dropdown"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               I am a...
//             </label>
//             {/* The custom dropdown button */}
//             <div
//               id="role-dropdown"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200 cursor-pointer flex justify-between items-center"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               {role.charAt(0).toUpperCase() + role.slice(1)}
//               <svg className={`fill-current h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 9.293l-1.414-1.414L10 11.414l-3.586-3.586L5 9.293z" /></svg>
//             </div>

//             {/* The dropdown options list */}
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
//                 <button
//                   type="button"
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//                   onClick={() => handleRoleSelect('client')}
//                 >
//                   Client
//                 </button>
//                 <button
//                   type="button"
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//                   onClick={() => handleRoleSelect('freelancer')}
//                 >
//                   Freelancer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#cc7408] hover:bg-[#a35e07] text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:ring-offset-2"
//           >
//             Register
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-[#cc7408] hover:underline">Sign In</a>
//         </p>
//       </div>
//     </div>
//   );
// };


import { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await registerUser({
        name: username,
        email,
        role,
        password,
      });

      console.log("✅ User registered:", data);
      navigate("/login");
    } catch (err) {
      console.error("❌ Registration error:", err);

      // If backend sends structured error
      if (err.response) {
        if (err.response.status === 409) {
          setError("User already exists. Please login instead.");
        } else if (err.response.status === 400) {
          setError("All fields are required.");
        } else {
          setError(err.response.data?.message || "Something went wrong.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-600 text-sm font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
            />
          </div>

          {/* Role Dropdown */}
          <div className="relative">
            <label htmlFor="role-dropdown" className="block text-sm font-medium text-gray-700 mb-1">
              I am a...
            </label>
            <div
              id="role-dropdown"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#cc7408]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
              <svg
                className={`fill-current h-4 w-4 transform transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15 9.293l-1.414-1.414L10 11.414l-3.586-3.586L5 9.293z" />
              </svg>
            </div>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleRoleSelect('client')}
                >
                  Client
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleRoleSelect('freelancer')}
                >
                  Freelancer
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-2 px-4 rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:ring-offset-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#cc7408] hover:bg-[#a35e07] text-white hover:scale-105"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#cc7408] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}


