import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/authService"; 
import { setUser } from "../features/auth/authSlice.js"; 

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await loginUser(formData);
      const user = res?.data?.user;

      if (!user) throw new Error("Login failed: user not found");

      dispatch(setUser(user));

      // role based navigation
      switch (user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "client":
          navigate("/client/posts");
          break;
        case "freelancer":
          navigate("/freelancer/dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      console.error("❌ Login error:", err);

      if (err.response) {
        switch (err.response.status) {
          case 400:
            setError("All fields are required.");
            break;
          case 404:
            setError("User not found. Please register first.");
            break;
          case 401:
            setError("Invalid credentials. Please try again.");
            break;
          default:
            setError(err.response.data?.message || "Something went wrong.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
            disabled={loading}
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cc7408] focus:border-[#cc7408] transition-all duration-200"
            disabled={loading}
            required
          />
          <button
            type="submit"
            className={`w-full font-bold py-2 px-4 rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-[#cc7408] focus:ring-offset-2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#cc7408] hover:bg-[#a35e07] text-white hover:scale-105"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-700">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#cc7408] hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
