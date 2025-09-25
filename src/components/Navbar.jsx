import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice.js";
import { logoutUser } from "../services/authService.js";
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navLinkClasses = ({ isActive }) =>
    isActive ? "underline font-semibold" : "hover:underline";

  const handleLogout = async () => {
    setIsProfileDropdownOpen(false);
    dispatch(clearUser());
    await logoutUser();
    navigate('/');
  };

  return (
    <nav className="container-centered bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md rounded-sm mt-2">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold tracking-wide">
        HomeAssist
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={navLinkClasses}>
          Home
        </NavLink>


        {/* Role-based links (only when logged in) */}
        {isAuthenticated && user?.role === "client" && (
          <NavLink to="/client/posts" className={navLinkClasses}>
            My Posts
          </NavLink>
        )}
        {isAuthenticated && user?.role === "freelancer" && (
          <>
            <NavLink to="/freelancer/dashboard" className={navLinkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/freelancer/jobs" className={navLinkClasses}>
              My Jobs
            </NavLink>
          </>
        )}

        {isAuthenticated && user?.role === "admin" && (
          <>
            <NavLink to="/admin/dashboard" className={navLinkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/client/posts" className={navLinkClasses}>
              My Posts
            </NavLink>
            <NavLink to="/freelancer/jobs" className={navLinkClasses}>
              My Jobs
            </NavLink>
          </>
        )}

        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>

        {/* If not logged in → show Login/Register */}
        {!isAuthenticated && (
          <>

            <NavLink to="/register" className={navLinkClasses}>
              Register
            </NavLink>
            <NavLink to="/login" className={navLinkClasses}>
              Login
            </NavLink>

            <p className=" mx-[-15px]">|</p>
            <NavLink to="/Adminlogin" className={navLinkClasses}>
              Admin
            </NavLink>

          </>
        )}
      </div>

      {/* Profile Dropdown (only when logged in) */}
      {isAuthenticated && (
        <div className="relative hidden md:block">
          <button
            className="focus:outline-none"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <FaUserCircle size={30} />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2">
              <NavLink
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute mt-2 rounded-sm top-16 left-0 w-full bg-primary text-white flex flex-col items-center gap-4 py-4 md:hidden">
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>


          {/* Role-based links */}
          {isAuthenticated && user?.role === "client" && (
            <NavLink
              to="/client/posts"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              My Posts
            </NavLink>
          )}
          {isAuthenticated && user?.role === "freelancer" && (
            <>
              <NavLink to="/freelancer/dashboard" className={navLinkClasses}>
                Dashboard
              </NavLink>
              <NavLink
                to="/freelancer/jobs"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                My Jobs
              </NavLink>
            </>
          )}
          {isAuthenticated && user?.role === "admin" && (
            <>
              <NavLink
                to="/client/posts"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                My Posts
              </NavLink>
              <NavLink
                to="/freelancer/jobs"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                My Jobs
              </NavLink>
            </>
          )}

          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          {/* If not logged in → show Login/Register */}
          {!isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
