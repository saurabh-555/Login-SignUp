import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'  
import email_icon from '../Assets/email.png'  

const LoginSignUP = () => {
    const [action,setAction] = useState("Sign Up")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text' >{action} </div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>  
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?
            <span> Click Here!</span></div>}
            <div className="submit-button">
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Signup</div>
            </div>
    </div>
  )
}

export default LoginSignUP
