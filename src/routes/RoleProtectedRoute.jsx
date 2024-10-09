import { Navigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";

export const RoleProtectedRoute = ({ roleRequired, children }) => {
  const { role } = useRole();

  if (!role && role !== roleRequired) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
