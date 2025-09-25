import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice.js";
import { logoutUser } from "../services/authService.js";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

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
    setIsOpen(false); // Close mobile menu on logout
    dispatch(clearUser());
    await logoutUser();
    navigate('/');
  };

  return (
    <nav className="relative container-centered bg-primary text-white px-6 py-4 flex items-center justify-between shadow-md rounded-sm mt-2">
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
            <span className="mx-[-15px] hidden md:inline">|</span>
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
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-20">
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
        className="md:hidden focus:outline-none text-white z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 w-full bg-primary text-white flex flex-col items-center gap-4 py-4 md:hidden rounded-sm z-10">
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          {/* Profile link for mobile */}
          {isAuthenticated && (
            <NavLink
              to="/profile"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              My Profile
            </NavLink>
          )}

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
              <NavLink
                to="/freelancer/dashboard"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
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
                to="/admin/dashboard"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
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
              <NavLink
                to="/Adminlogin"
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                Admin
              </NavLink>
            </>
          )}

          {/* Logout button for mobile */}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="text-red-500 font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}