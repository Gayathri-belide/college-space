import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notes() {
  const [d, setD] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/note')
      .then(response => {
        const td = response.data;
        setD(td);
        console.log(td);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <form action="http://localhost:5001/upload" method="POST" encType="multipart/form-data">
      <input type="text" id="title" name="title" />
      <input type="file" name="pdf" accept=".pdf" required />
      <button type="submit">Upload</button>

      {/* Render student titles */}
      {d.map(student => (
        <div key={student._id}>
          <h1>{student.data.data}</h1>
          {/* Render other properties if needed */}
        </div>
      ))}
    </form>
  );
}
