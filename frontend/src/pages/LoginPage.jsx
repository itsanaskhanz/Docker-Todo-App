import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api';
import AuthForm from '../components/AuthForm';

export default function LoginPage({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setError('');
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const response = await login(formData.email, formData.password);
        localStorage.setItem('token', response.token);
        setUser(response.user);
        navigate('/');
      } else {
        await signup(formData.name, formData.email, formData.password);
        setIsLogin(true);
        setError('');
        alert('Signup successful! Please login with your credentials');
      }
    } catch (err) {
      setError(err.message || (isLogin ? 'Login failed' : 'Signup failed'));
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
<div style={{
  maxWidth: '28rem', // 450px -> 28rem
  margin: '3rem auto', // 50px -> 3rem
  padding: '1.875rem', // 30px -> 1.875rem
  backgroundColor: 'white',
  borderRadius: '0.75rem', // 12px -> 0.75rem
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)' // Softer shadow
}}>
  <h2 style={{
    textAlign: 'center',
    marginBottom: '1.5rem', // 25px -> 1.5rem
    color: '#4299e1', // Purple -> Blue
    fontSize: '1.75rem', // 28px -> 1.75rem
    fontWeight: '500'
  }}>
    {isLogin ? 'Welcome Back' : 'Create Account'}
  </h2>

  {error && (
    <div style={{
      backgroundColor: '#fff5f5', // Lighter red background
      color: '#e53e3e', // Softer red text
      padding: '0.75rem', // 12px -> 0.75rem
      borderRadius: '0.375rem', // 6px -> 0.375rem
      marginBottom: '1.25rem', // 20px -> 1.25rem
      textAlign: 'center',
      fontSize: '0.9375rem', // 15px -> 0.9375rem
      border: '1px solid #fed7d7' // Subtle border
    }}>
      {error}
    </div>
  )}

  <AuthForm
    isLogin={isLogin}
    onSubmit={handleSubmit}
    isSubmitting={isSubmitting}
  />

  <div style={{
    textAlign: 'center',
    marginTop: '1.25rem', // 20px -> 1.25rem
    color: '#718096', // Darker gray
    fontSize: '0.9375rem' // 15px -> 0.9375rem
  }}>
    {isLogin ? "Don't have an account? " : "Already have an account? "}
    <button
      onClick={() => {
        setIsLogin(!isLogin);
        setError('');
      }}
      style={{
        background: 'none',
        border: 'none',
        color: '#4299e1', // Purple -> Blue
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: '500',
        fontSize: '0.9375rem', // 15px -> 0.9375rem
        padding: '0 0.25rem', // 4px -> 0.25rem
        transition: 'color 0.2s'
      }}
      disabled={isSubmitting}
      onMouseOver={(e) => !isSubmitting && (e.target.style.color = '#3182ce')} // Darker blue on hover
      onMouseOut={(e) => !isSubmitting && (e.target.style.color = '#4299e1')}
    >
      {isLogin ? 'Sign up' : 'Login'}
    </button>
  </div>
</div>
  );
}
