import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { checkAuth } from './api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await checkAuth(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navbar user={user} setUser={setUser} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          <Routes>
            <Route
              path="/"
              element={user ? <HomePage user={user} /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage setUser={setUser} /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={user ? <ProfilePage user={user} setUser={setUser} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
