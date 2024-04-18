
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
 
function ProtectedRoute({ children }) {
  const isToken = localStorage.getItem('ShopSwiftlyToken');
 
  if (!isToken) {
    return <Navigate to="/login" replace />;
  }
 
  return children;
}
export default ProtectedRoute