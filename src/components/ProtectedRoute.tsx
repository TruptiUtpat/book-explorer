import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import type{ ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;