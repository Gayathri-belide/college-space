import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Login()
{let navigate=useNavigate();
    const [formData, setFormData] = useState({username: '',password: '',});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  };
const handleSubmit = async(e) => {
    e.preventDefault();

    console.log('Login Data:', formData);
    const respons = await fetch("http://localhost:5001/loginUser", {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        password: formData.password,
        
      })
    });

    const j = await respons.json();
    console.log("response2", j);
    
    if (!j.success) alert('enter correct credentials')
    else {
      
      navigate("/Afterlogin")
    }

  };

  return (<>
    <div><button style={styles.button1} onClick={()=>navigate('/Adminloginf')}>Adminstrator Login</button></div>
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          name="name"
          value={formData.username}
          onChange={handleInputChange}
          style={styles.input}
        />

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={styles.input}
        />
        

        <button type="submit" onClick={handleSubmit} onstyle={styles.button}>
          Login
        </button>
      </form>
    </div></>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '50px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none',
  },
  button1:
  {
    margin:'20px',
  }
};


