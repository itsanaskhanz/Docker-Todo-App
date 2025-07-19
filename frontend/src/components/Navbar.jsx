import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav style={{
      backgroundColor: '#ffffff', // Changed to white
      padding: '15px 20px',
      color: '#2d3748', // Dark gray text
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Added subtle shadow
      borderBottom: '1px solid #e2e8f0' // Light border
    }}>
      <Link to="/" style={{
        color: '#4a5568', // Medium gray
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: '600' // Slightly bolder
      }}>
        Todo App
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/profile" style={{
              color: '#4a5568', // Medium gray
              marginRight: '15px',
              textDecoration: 'none',
              fontWeight: '500' // Medium weight
            }}>
              {user.name}'s Profile
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: 'transparent',
                border: '1px solid #e2e8f0', // Light border
                color: '#4a5568', // Medium gray
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontWeight: '500'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f8f9fa'; // Light hover
                e.target.style.borderColor = '#cbd5e0'; // Slightly darker border on hover
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#e2e8f0';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{
            color: '#4a5568', // Medium gray
            textDecoration: 'none',
            fontWeight: '500',
            padding: '5px 10px',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f8f9fa'; // Light hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
