function Hero() {
    return (
      <section style={{
        backgroundColor: '#f4f4f4',
        padding: '3rem',
        textAlign: 'center'
      }}>
        <h2>Welcome to My Website</h2>
        <p>This is a React application running in Docker!</p>
        <p>No Node.js installed - Docker handles everything!</p>
      </section>
    );
  }
  
  export default Hero;