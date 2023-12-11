import React from 'react';
import './Chatroom.css';

export default function Sidebar()
{
    return <div className="sid">
        <div className='sb-header'>
            <button>PersonAdd</button>
            <button>GroupAdd</button>
        </div>
        <div className='sb-search'></div>
        <input type="text" placeholder='search'/>
        <div className='sb-chats'>
            <div className="chat">
                <h4>Text1</h4>
                Last Message#1
            </div>
            <div className="chat">
                <h4>Text1</h4>
                Last Message#1
            </div>
        </div>
    </div>
}