// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
//   withCredentials: true, // IMPORTANT: send cookies with requests
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });


// axiosInstance.interceptors.response.use(
//     (response) => response,
//   async (error) => {
//     if (error.response?.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//       try {
//         // Attempt to refresh access token
//         await axios.get(`${axiosInstance.defaults.baseURL}/user/refreshaccesstoken`, {
//             withCredentials: true,
//         });

//         // Retry original request
//         return axiosInstance(error.config);
//     } catch (refreshError) {
//         console.error('Refresh token expired or invalid:', refreshError);
//         // Optional: redirect to login
//     }
// }
//     return Promise.reject(error);
//   }
// );


// export default axiosInstance;















// src/api/axiosInstance.js
// import axios from 'axios';
// import store from '../store/store'; // import your Redux store
// import { clearUser } from '../features/auth/authSlice'; // to clear user on refresh expiry

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
//   withCredentials: true, // send cookies
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//       try {
//         // Attempt to refresh token
//         await axios.get(`${axiosInstance.defaults.baseURL}/user/refreshaccesstoken`, {
//           withCredentials: true,
//         });

//         // Retry original request
//         return axiosInstance(error.config);
//       } catch (refreshError) {
//         console.error('Refresh token expired or invalid:', refreshError);

//         // Dispatch logout and redirect
//         store.dispatch(clearUser());
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;













// // src/api/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
//   withCredentials: true, // send cookies
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//       try {
//         // Try refreshing token
//         await axios.get(`${axiosInstance.defaults.baseURL}/user/refreshaccesstoken`, {
//           withCredentials: true,
//         });

//         // Retry the original request
//         return axiosInstance(error.config);
//       } catch (refreshError) {
//         console.error('Refresh token expired or invalid:', refreshError);
//         // Pass error to be handled by slice/thunk
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;



// src/api/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
//   withCredentials: true, // send cookies automatically
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Response interceptor for token refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If access token expired (401), try refreshing once
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // This will refresh cookies (new access token set by backend)
//         await axiosInstance.post('/user/refreshaccesstoken');

//         // Retry the original request (cookies now updated)
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error('Refresh token expired or invalid:', refreshError);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  withCredentials: true, // send cookies automatically
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not retried, and not the refresh request itself
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/user/refreshaccesstoken')
    ) {
      originalRequest._retry = true;
      try {
        // Refresh cookies (new access token set by backend)
        const data = await axiosInstance.post('/user/refreshaccesstoken');

        // Retry the original request
        console.log(data)
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired or invalid:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
