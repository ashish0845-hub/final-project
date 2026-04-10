import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/form" style={{ color: 'white', textDecoration: 'none' }}>
        Form Page
      </Link>
    </nav>
  );
}

export default Navbar;