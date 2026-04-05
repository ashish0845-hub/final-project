function Header() {
    return (
      <header style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        textAlign: 'center'
      }}>
        <h1>My React Website</h1>
        <nav>
          <a href="#" style={{color: 'white', margin: '0 1rem'}}>Home</a>
          <a href="#" style={{color: 'white', margin: '0 1rem'}}>About</a>
          <a href="#" style={{color: 'white', margin: '0 1rem'}}>Contact</a>
        </nav>
      </header>
    );
  }
  
  export default Header;