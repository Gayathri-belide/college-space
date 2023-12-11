import React, { useState } from 'react';
import './InterviewForm.css'; 
import { useNavigate } from 'react-router-dom';
export default function Intform()
{const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    companyname: '',
    package: '',
    rounds: '',
    coding: '',
    csconcepts: '',
    hr: '',
    suggestions: '',
    achievements:'',
    projects:'',
  });
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const respons = await fetch("http://localhost:5001/createInt", {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:formData.name,
        email:formData.email,
        companyname:formData.companyname,
        contactno:formData.contactno,
        rounds:formData.rounds,
        coding:formData.coding,
        csconcepts:formData.csconcepts,
        hr:formData.hr,
        suggestions:formData.suggestions,
        projects:formData.projects,
        achievements:formData.achievements,

      })
    });
    
    const j = await respons.json();
    console.log(j);

    if (!j.success) alert('enter correct credentials')
    else {
      navigate('/Interview')
    }
   
   
  };

  return (
    <div className="form-container">
      <h2>Interview Experience Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Contact No:
          <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
        </label>
        <label>
          Company Name:
          <input type="text" name="companyname" value={formData.companyname} onChange={handleChange} />
        </label>
        <label>
          Package:
          <input type="text" name="package" value={formData.package} onChange={handleChange} />
        </label>
        <label>
          Achievements:
          <input type="text" name="achievements" value={formData.achievements} onChange={handleChange} />
        </label>
        <label>
          Projects:
          <input type="text" name="projects" value={formData.projects} onChange={handleChange} />
        </label>
        <label>
          Rounds:
          <input type="text" name="rounds" value={formData.rounds} onChange={handleChange} />
        </label>
        <label>
          Coding:
          <textarea name="coding" value={formData.coding} onChange={handleChange} />
        </label>
        <label>
          CS Concepts:
          <textarea name="csconcepts" value={formData.csconcepts} onChange={handleChange} />
        </label>
        <label>
          HR:
          <textarea name="hr" value={formData.hr} onChange={handleChange} />
        </label>
        <label>
          Suggestions or Extra details:
          <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
