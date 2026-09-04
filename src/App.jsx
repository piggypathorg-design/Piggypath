import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppShell from './components/layout/AppShell';

// Lazy loaded page components
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PathPage = lazy(() => import('./pages/PathPage'));
const AvatarSetupPage = lazy(() => import('./pages/AvatarSetupPage'));
const LandingPage = lazy(() => import('./pages/landing/LandingPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CodeOfConductPage = lazy(() => import('./pages/CodeOfConductPage'));
const GameLibraryPage = lazy(() => import('./pages/GameLibraryPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#18181B]">
    <div className="w-8 h-8 border-4 border-[#00E599] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/code-of-conduct" element={<CodeOfConductPage />} />

            {/* Auth */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignInPage />} />

            {/* Protected App Routes */}
            <Route 
              path="/setup-avatar" 
              element={
                <ProtectedRoute>
                  <AvatarSetupPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/app" 
              element={
                <ProtectedRoute>
                  <AppShell />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="games" element={<GameLibraryPage />} />
              <Route path="path" element={<PathPage />} />
              <Route path="stocks" element={<div className="text-center mt-20 text-xl font-bold text-gray-400">Stocks Module Coming Soon</div>} />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
