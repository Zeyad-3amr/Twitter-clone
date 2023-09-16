import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserIdStore } from '../../store/userStorage';

const ProtectedRoute = ({ children }) => {
  const user = useUserIdStore((state) => state.userProfile);

  if (!user._id) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
