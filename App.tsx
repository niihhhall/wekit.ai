import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { UserDashboard } from './components/UserDashboard';
import { PricingPage } from './components/PricingPage';
import { ProfilePage } from './components/ProfilePage';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { ToastContainer } from './components/ToastContainer';
import { authService } from './services/authService';
import './index.css';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Wrapper for pages that should have Navbar
const PageWithNavbar: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Public Routes - No Navbar */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Public Routes - With Navbar */}
        <Route path="/pricing" element={<PageWithNavbar><PricingPage /></PageWithNavbar>} />

        {/* Protected Routes - With Navbar */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageWithNavbar><UserDashboard /></PageWithNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <PageWithNavbar><ProfilePage /></PageWithNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <PageWithNavbar><ProfilePage /></PageWithNavbar>
            </ProtectedRoute>
          }
        />

        {/* Content Dashboard (Admin) */}
        <Route
          path="/content-dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;