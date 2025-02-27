import { Navigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";

export const RoleProtectedRoute = ({ roleRequired, children }) => {
  const { role } = useRole();

  if (!role && role !== roleRequired) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

// ____________________________________

// import { Navigate } from "react-router-dom";
// import { useRole } from "../context/RoleContext";

// export const RoleProtectedRoute = ({ roleRequired, children }) => {
//   const { role, setRole } = useRole();

//   // For testing purposes, set role to 'admin' by default
//   if (!role) {
//     setRole("parents");  // Setting default role to admin for testing
//   }
 
//   // Allow access without redirecting to sign-in during testing
//   if (role && role !== roleRequired) {
//     return <Navigate to="/sign-in" replace />;
//   }

//   return children;
// };

