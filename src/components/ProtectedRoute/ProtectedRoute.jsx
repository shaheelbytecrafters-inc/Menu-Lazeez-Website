import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ children }) => {
  // Retrieve token from localStorage
  const isAuthenticated =
    JSON.parse(localStorage.getItem("protectedToken")) || false;
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated, show toast and navigate
    if (!isAuthenticated) {
      toast.error("Please log in first!");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // If authenticated, render the children components
  return isAuthenticated ? children : null;
};
