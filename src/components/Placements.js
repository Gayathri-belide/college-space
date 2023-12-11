import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';
import axios from 'axios';

export default function Placements(){
    const [students, setStudents] = useState([]);
    useEffect(()=>
    {axios.get('http://localhost:5001/load')
      .then(response => {
       const responseData = response.data;
       setStudents(responseData)
        console.log(responseData);
      })
      .catch(error => {
        console.error(error);
      });
    })
return (<div>
      <h1>Student Cards</h1>

      {students.map(student => (
        <StudentCard key={student._id} student={student} />
      ))}
      
    </div>
  );
};

