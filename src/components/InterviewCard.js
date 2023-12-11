import React from 'react';
import './style.css'

export default function InterviewCard(props) {

  return (

    <div className="card" >
      <ul className="">
        <li className="item"><h5>Name : <span className='fo'>{props.student.name}</span > </h5></li>
        <li className="item"><h5>Companyname : <span className='fo'>{props.student.companyname} </span></h5></li>
        <li className="item"><h5>No of rounds  :<span className='fo'>{props.student.rounds}</span> </h5></li>
       <li className="item"><h5>Coding  : <span className='fo'>{props.student.coding} </span></h5></li>
        <li className="item"><h5>Cs concepts :<span className='fo'>{props.student.csconcepts} </span></h5></li>
       <li className="item"><h5> Hrquestions : <span className='fo'>{props.student.hr} </span></h5></li>
       <li className="item"><h5>Suggestions : <span className='fo'>{props.student.suggestions} </span></h5></li>
       <li className="item"><h5>Projects : <span className='fo'>{props.student.projects} </span></h5></li>
       <li className="item"><h5>Achievements : <span className='fo'>{props.student.achievements} </span></h5></li>      
      
      </ul>
    </div>

  );
};
