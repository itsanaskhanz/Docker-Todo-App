import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../api';
import { useState } from 'react';

export default function ProfilePage({ user, setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This will remove all your data permanently.')) {
      try {
        const token = localStorage.getItem('token');
        await deleteAccount(token);
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
      } catch (err) {
        setError(err.message || 'Failed to delete account');
      }
    }
  };

  return (
   <div style={{
    maxWidth: '500px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }}>
  <h2 style={{
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#4299e1',
    fontSize: '1.5rem',
    fontWeight: '500'
  }}>
    Your Profile
  </h2>

  {error && (
    <div style={{
      color: '#e53e3e',
      textAlign: 'center',
      padding: '0.75rem',
      backgroundColor: '#fff5f5',
      borderRadius: '0.375rem',
      marginBottom: '1.5rem',
      border: '1px solid #fed7d7'
    }}>
      {error}
    </div>
  )}

  <div style={{
    marginBottom: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.5rem'
  }}>
    <p style={{
      fontSize: '1.125rem',
      marginBottom: '1rem',
      color: '#4a5568'
    }}>
      <strong style={{
        color: '#4299e1',
        fontWeight: '500'
      }}>Name:</strong> {user.name}
    </p>
    <p style={{
      fontSize: '1.125rem',
      color: '#4a5568'
    }}>
      <strong style={{
        color: '#4299e1',
        fontWeight: '500'
      }}>Email:</strong> {user.email}
    </p>
  </div>

  <button
    onClick={handleDeleteAccount}
    style={{
      backgroundColor: '#f56565',
      color: 'white',
      padding: '0.875rem 1.5rem',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      width: '100%',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'background-color 0.2s'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#e53e3e'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#f56565'}
  >
    Delete My Account
  </button>
  </div>
  );
}
