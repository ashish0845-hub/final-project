function Features() {
    const features = [
      { title: "React", description: "Component-based UI library" },
      { title: "Vite", description: "Fast build tool" },
      { title: "Docker", description: "Containerized development" }
    ];
  
    return (
      <section style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '2rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '8px',
            flex: 1,
            minWidth: '200px'
          }}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default Features;