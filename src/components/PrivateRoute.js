import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Redirect ke halaman login jika user tidak terautentikasi
    return <Navigate to="/login" replace />;
  }

  // Render children components jika user terautentikasi
  return children;
}

export default PrivateRoute;