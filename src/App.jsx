import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import PathPage from './pages/PathPage';
import AvatarSetupPage from './pages/AvatarSetupPage';
import LandingPage from './pages/landing/LandingPage';
import SignInPage from './pages/SignInPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />

        {/* Auth */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignInPage />} />

        {/* Existing App */}
        <Route path="/setup-avatar" element={<AvatarSetupPage />} />
        
        <Route path="/app" element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="games" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Games Module Coming Soon</div>} />
          <Route path="path" element={<PathPage />} />
          <Route path="stocks" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Stocks Module Coming Soon</div>} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
