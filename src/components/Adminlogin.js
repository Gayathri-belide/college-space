import React, { useState } from 'react';
import axios from 'axios';

export default function Adminlogin() {
    const [formData, setFormData] = useState({
        companyName: '',
        description: '',
        companyType: '',
        websiteUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("vbn")
        axios.post('http://localhost:5001/company', formData)
            .then(response => {
                console.log('Submission successful:', response.data);
                // Optionally, you can redirect the user or perform other actions after successful submission.
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };
    return <div>
        <nav>
            <div id="cont">
                CollegeSpace
            </div>
            <div>
                <ul id="navbar">

                    <button >Logout</button>
                </ul>
            </div>
        </nav>
        <div>
            <h2>Company/Institution/Organization Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                        type="text"
                        name="companyType"
                        value={formData.companyType}
                        onChange={handleChange} placeholder='Placement/Hackaton/Coding/Event'
                        required
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange} placeholder='details like package,
                        expectations,skills required'
                        required
                    />
                </label>
                <br />

                <label>
                    Website URL:
                    <input
                        type="text"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
}