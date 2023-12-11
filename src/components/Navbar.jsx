import React from 'react'
import './Navbarcss.css'
import {Link,useNavigate} from 'react-router-dom'
export default function Navbar()
{let navigate = useNavigate()
  const handleLogin=()=>
  {
    navigate('/Login')
  }
  const handleSignup=()=>
  {
    navigate('/Signup')
  }
  return<div>
      <nav>
      <div id="cont">
        CollegeSpace
      </div>
      <div>
        <ul id="navbar">
          
          <li><button id='n' onClick={handleLogin}>Login</button></li>
          <li><button id='n'onClick={handleSignup}>Signup</button></li>
         </ul>
      </div>
    </nav>
    </div>
}