import React from 'react'
import '../LoginSignUP.css'
import user_icon from '../Assets/user_icon.png'
import password_icon from '../Assets/password_icon.png'  
import email_icon from '../Assets/email.png'  

export const LoginSignUP = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'>Sign Up</div>
        </div>
        <div className='inputs'>
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="UserIcon" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="Password" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            
        </div>
    </div>
  )
}
