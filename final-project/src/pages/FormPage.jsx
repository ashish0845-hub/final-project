import { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age < 18) newErrors.age = 'Age must be 18 or older';
    else if (formData.age > 100) newErrors.age = 'Age must be less than 100';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      const res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Failed to submit form' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact Form</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name (text input):</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.name ? '1px solid red' : '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</span>}
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email (email input):</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.email ? '1px solid red' : '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Age (number input):</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', border: errors.age ? '1px solid red' : '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.age && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.age}</span>}
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      
      {response && (
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f4f4f4', borderRadius: '4px' }}>
          <h3>Response from httpbin:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FormPage;