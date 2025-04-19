import React from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'  
import email_icon from '../Assets/email.png'  

const LoginSignUP = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text' >Saurabh </div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className="submit-container">
                <div className="submit">Login</div>
                <div className="submit">Signup</div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            
        </div>
    </div>
  )
}

export default LoginSignUP
