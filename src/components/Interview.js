import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';
import InterviewCard from './InterviewCard';
import './style.css'
import './Whatwedo.css'


export default function Interview()
{const [students, setStudents] = useState([]);
    const navigate=useNavigate();
    const handle=()=>{navigate("/IntForm")}
    useEffect(()=>
    {axios.get('http://localhost:5001/interview')
      .then(response => {
       const responseData = response.data;
       setStudents(responseData)
        console.log(responseData)
      })
      .catch(error => {
        console.error(error);
      });
    })
    return <div><nav>
    <div id="cont">
      CollegeSpace
    </div>
    <div>
      <ul id="navbar">
        <li  id='f'><Link to="/Interview">Interview Experiences</Link></li>
        <li  id='f'><Link to="http://localhost:5000">Chatrooms</Link></li>
        <li  id='f'><Link to="/">Student Profiles</Link></li>
        <button onClick={()=>navigate("/")}>Logout</button>
      </ul>
    </div>
  </nav>
        <h3 id="cen">Interview Experiences</h3>
        <div className='grid'>{students.map(student => (
        <InterviewCard key={student._id} student={student} />
      ))}
        </div>
      <button id="add" onClick={handle}>Add Interview Experience</button>
    </div>
}