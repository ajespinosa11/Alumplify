import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='log_style' >
        <div className="left-col">
            {/* <img className="logo" src="/Logins/imgs/cos_logo.png" alt="cos_logo"/> */}
            <h1 className="left-text">COS | ALUMNI</h1>
            <p className="left-text"><i>
                Once a part of this remarkable<br/>
                institution, forever a part of its enduring <br/>
                legacy
                </i>
            </p>
                
            <footer><p><strong>est. 2023</strong></p></footer>
        </div>
    
        <div className="right-col">
    
        <div className="right-text">
            <p className="right-text1"><strong>Welcome Alumni! </strong></p>
            <span className="right-text2">To keep you connected with us please sign in</span>
        </div>
    
        <div className="form-container">
            <input className="box" type="text" placeholder="Username" />
            <input className="box" type="password" placeholder="Password" />
            <Link to='/Home' className="a-btn box2" >
                <button className="box2">Sign In</button>
            </Link>
            <p className="admin-login-btn">If you're an admin. 
                <Link to='Admin' className="b-btn" >Click here</Link> 
            </p>
            <p className="user-sign-btn">Don't have an account? 
                <Link className="b-btn" to='/Logins/SignUp'>Sign Up</Link></p>
            <p className="right-text3">Access the website for free</p>
        </div>
        </div>  
    </div>
  )
}

export default Login