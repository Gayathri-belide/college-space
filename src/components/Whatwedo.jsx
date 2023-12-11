import React from 'react'
import './Whatwedo.css'
export default function Whatwedo()
{ 
    return <div className='cont'>
        <div className='left'>
        <ul id='des'>
            <li><h4>>>  Placements</h4></li>
            <li><h4>>> Interview Experiences</h4></li>
            <li><h4>>> Job and Internship Alerts</h4></li>
            <li><h4>>> Upcoming events</h4></li>
            <li><h4>>>ChatRooms</h4></li>
        </ul>
        </div>
          <div className='right'>
            <h5 id="des">
                Our application is designed to meet the requirements of students 
                and the placement team of a college.Placement team can collect the interview 
                experiences of placed students and display them on the website.
                Students can see the experiences of the past students and prepare for 
                the interview process accordingly.Chatrooms designed to 
                connect to members .Notifications about upcoming events.

            </h5>
          </div>
    </div>
}