import React from 'react';
import './Chatroom.css';
import Sidebar from './Sidebar'
import Workarea from './Workarea';
export default function Chatrooms()
{
    return <div className="app">
            <div className='sid'><Sidebar/></div>
            <div className='work'>
            <Workarea/></div>
        </div>
   
}