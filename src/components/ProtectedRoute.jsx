import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles = [] }) {
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <div>Loading...</div>; // Optional loader while checking auth

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
