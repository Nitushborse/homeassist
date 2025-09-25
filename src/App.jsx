// import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./features/auth/authSlice"; 
import { fetchClientJobs, fetchRequestedJobs } from "./features/job/jobSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const location = useLocation();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  const hideLayout = ["/register", "/login"].includes(location.pathname);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "client") {
        dispatch(fetchClientJobs());
      } else if (user.role === "freelancer") {
        dispatch(fetchRequestedJobs());
      } else if(user.role === "admin"){
        dispatch(fetchClientJobs());
        dispatch(fetchRequestedJobs());
      }
      // admin case: you can preload admin-specific data if needed
    }
  }, [dispatch, isAuthenticated, user]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
