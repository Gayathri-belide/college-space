import React from 'react';
import App from './App'
import Login from './components/Login'
import Afterlogin from './components/Afterlogin';
import Signup from './components/Signup';
import Chatrooms from './components/Chatrooms';
import Interview from './components/Interview'
import Intform from './components/Intform'
import Adminlogin from './components/Adminlogin';
import Adminloginform from './components/Adminloginform'
import Placements from './components/Placements';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function Main()
{ return <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/Login"  element={<Login/>}/>
          <Route exact path="/Afterlogin"  element={<Afterlogin/>}/>
          <Route exact path="/Signup"  element={<Signup/>}/>
          <Route exact path="/Chatrooms" element={<Chatrooms/>}/>
          <Route exact path="/Adminlogin" element={<Adminlogin/>}/>
          <Route exact path="/Adminloginf" element={<Adminloginform/>}/>
          <Route exact path='/Interview' element={<Interview/>}/>
          <Route exact path='/Intform' element={<Intform/>}/>
          <Route exact path='/Placements' element={<Placements/>}/>

        </Routes>
      </div>
    </Router>
}