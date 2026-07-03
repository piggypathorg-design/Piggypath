import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AppShell from './components/layout/AppShell';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import AvatarSetupPage from './pages/AvatarSetupPage';
import LandingPage from './pages/landing/LandingPage';
import SignInPage from './pages/SignInPage';
import PathPage from './pages/PathPage';
import GamesPage from './pages/GamesPage';
import QuizPage from './pages/QuizPage';

// Shows a full-screen spinner while auth state is loading
const AuthLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 bg-neo-purple border-[3px] border-black shadow-neo-base rounded-neo flex items-center justify-center animate-bounce">
        <span className="font-black text-white text-2xl">PP</span>
      </div>
      <p className="font-black text-black uppercase tracking-widest text-sm animate-pulse">Loading...</p>
    </div>
  </div>
);

// Redirects to /signin if not authenticated
const ProtectedRoute = ({ children }) => {
  const { session, loading } = useAuth();
  if (loading) return <AuthLoader />;
  if (!session) return <Navigate to="/signin" replace />;
  return children;
};

// Redirects to /app if already authenticated
const PublicOnlyRoute = ({ children }) => {
  const { session, loading } = useAuth();
  if (loading) return <AuthLoader />;
  if (session) return <Navigate to="/app" replace />;
  return children;
};

function App() {
  return (
    <BrowserRouter basename="/trail2">
      <Routes>
        {/* Public Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Pages — redirect to /app if already logged in */}
        <Route path="/signin" element={<PublicOnlyRoute><SignInPage /></PublicOnlyRoute>} />
        <Route path="/signup" element={<PublicOnlyRoute><SignInPage /></PublicOnlyRoute>} />

        {/* Avatar Setup — only for logged-in users */}
        <Route path="/setup-avatar" element={<ProtectedRoute><AvatarSetupPage /></ProtectedRoute>} />

        {/* Protected App Shell */}
        <Route path="/app" element={<ProtectedRoute><AppShell /></ProtectedRoute>}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/quiz" element={<QuizPage />} />
          <Route path="path" element={<PathPage />} />
          <Route path="stocks" element={
            <div className="text-center mt-20 neo-card max-w-md mx-auto p-12">
              <p className="text-4xl font-black text-black uppercase">Stocks</p>
              <p className="font-bold text-gray-500 mt-2">Module Coming Soon</p>
            </div>
          } />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
