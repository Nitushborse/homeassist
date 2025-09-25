// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
// import LandingPage from "./pages/LandingPage.jsx"
// import Register from "./pages/Register.jsx"
// import Login from './pages/Login.jsx'
// import { Provider } from 'react-redux';
// import store from "./store/store.js";
// import MyPostPage from './pages/Mypost.jsx'
// import PostDetailsPage from './components/PostDetailsPage.jsx'
// import CreatePostPage from './pages/CreatePostPage.jsx'
// import AboutPage from './pages/AboutPage.jsx'
// import WorkerDashboardPage from './pages/WorkerDashboardPage.jsx'
// import JobDetails from './components/JobDetails.jsx'
// import MyJobsPage from './pages/MyJobsPage.jsx'
// import MyJobDetails from './components/MyJobDetails.jsx'
// import FeedbackPage from './pages/FeedbackPage.jsx'
// import Profile from "./pages/Profile.jsx"

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<LandingPage />} />
//       <Route path='register' element={<Register />} />
//       <Route path='about' element={<AboutPage />} />
//       <Route path='login' element={<Login />} />
//       <Route path='mypost' element={<MyPostPage />} />
//       <Route path='post/:id' element={<PostDetailsPage />} />
//       <Route path='newpost' element={<CreatePostPage />} />
//       <Route path='myjobs' element={<WorkerDashboardPage />} />
//       <Route path='job-details/:id' element={<JobDetails />} />
//       <Route path='jobrequests' element={<MyJobsPage />} />
//       <Route path='job-details-freelancer/:id' element={<MyJobDetails />} />
//       <Route path='feedback' element={<FeedbackPage />} />
//       <Route path='profile' element={<Profile />} />
//     </Route>
//   )
// )




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>,
// )



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store.js';

// Public Pages
import LandingPage from './pages/LandingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import AdminLogin from './pages/AdminLogin.jsx'

// Common User Pages
import ProfilePage from './pages/Profile.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';

// Client (Job Poster) Pages
import MyPostsPage from './pages/Mypost.jsx';
import PostDetailsPage from './components/PostDetailsPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';

// Freelancer (Worker) Pages
import WorkerDashboardPage from './pages/WorkerDashboardPage.jsx';
import MyJobsPage from './pages/MyJobsPage.jsx';
import MyJobDetailsPage from './components/MyJobDetails.jsx';
import JobDetailsPage from './components/JobDetails.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminDashboardPage from './pages/AdminDashboard.jsx';
import UserListPage from './pages/UserListPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* Public Routes */}
      <Route index element={<LandingPage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='Adminlogin' element={<AdminLogin />} />

      {/* Protected Routes for All Authenticated Users */}
      <Route element={<ProtectedRoute />}>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='feedback' element={<FeedbackPage />} />
      </Route>

      {/* admin Routes (only admin) */}
      <Route element={<ProtectedRoute allowedRoles={["client", "admin"]} />}>
        <Route path='admin/dashboard' element={<AdminDashboardPage />} />
        <Route path="admin/users/:userType" element={<UserListPage />} />
      </Route>

      {/* Client Routes (only clients) */}
      <Route element={<ProtectedRoute allowedRoles={["client", "admin"]} />}>
        <Route path='client/posts' element={<MyPostsPage />} />
        <Route path='client/post/:id' element={<PostDetailsPage />} />
        <Route path='client/post/create' element={<CreatePostPage />} />
      </Route>

      {/* Freelancer Routes (only freelancers) */}
      <Route element={<ProtectedRoute allowedRoles={["freelancer", "admin"]} />}>
        <Route path='freelancer/dashboard' element={<WorkerDashboardPage />} />
        <Route path='freelancer/jobs' element={<MyJobsPage />} />
        <Route path='freelancer/job/:id' element={<MyJobDetailsPage />} />
        <Route path='freelancer/job-details/:id' element={<JobDetailsPage />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
