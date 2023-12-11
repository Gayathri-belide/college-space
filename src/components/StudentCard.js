import React from 'react';

const StudentCard = (props) => {
  return (
    <div className="student-card">
      <h2>{props.student.answer}</h2>
      <p>Roll Number: {props.student.answer}</p>
    </div>
  );
};

export default StudentCard;
