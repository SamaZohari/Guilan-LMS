import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  allowedRole,
}: any) {
  const {
    role,
    loading,
  } = useAuth();

  if (loading)
    return (
      <h1>
        Loading...
      </h1>
    );

  if (
    role !==
    allowedRole
  ) {
    return (
      <Navigate
        to="/login"
      />
    );
  }

  return children;
}