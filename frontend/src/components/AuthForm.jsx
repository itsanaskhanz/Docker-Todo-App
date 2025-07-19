import { useState } from 'react';

export default function AuthForm({ isLogin, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      width: '100%'
    }}>
      {!isLogin && (
        <div>
          <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#4a5568'
          }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '0.375rem',
              border: `1px solid ${errors.name ? '#e53e3e' : '#e2e8f0'}`,
              fontSize: '1rem',
              backgroundColor: '#f8fafc'
            }}
          />
          {errors.name && (
            <p style={{
              color: '#e53e3e',
              fontSize: '0.875rem',
              marginTop: '0.25rem'
            }}>
              {errors.name}
            </p>
          )}
        </div>
      )}

      <div>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: `1px solid ${errors.email ? '#e53e3e' : '#e2e8f0'}`,
            fontSize: '1rem',
            backgroundColor: '#f8fafc'
          }}
        />
        {errors.email && (
          <p style={{
            color: '#e53e3e',
            fontSize: '0.875rem',
            marginTop: '0.25rem'
          }}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
          color: '#4a5568'
        }}>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: `1px solid ${errors.password ? '#e53e3e' : '#e2e8f0'}`,
            fontSize: '1rem',
            backgroundColor: '#f8fafc'
          }}
        />
        {errors.password && (
          <p style={{
            color: '#e53e3e',
            fontSize: '0.875rem',
            marginTop: '0.25rem'
          }}>
            {errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#4299e1',
          color: 'white',
          padding: '0.875rem',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          marginTop: '0.5rem',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#3182ce'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4299e1'}
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
}
