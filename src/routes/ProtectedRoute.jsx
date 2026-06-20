import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Check localStorage for the flag set by Login.jsx on successful login
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn
    ? children
    : <Navigate to="/login" replace />;
}

export default ProtectedRoute;