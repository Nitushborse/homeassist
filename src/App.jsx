// import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/auth/authSlice"; 

function App() {
  const location = useLocation();
  const hideLayout = ["/register", "/login"].includes(location.pathname);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  )
}

export default App
