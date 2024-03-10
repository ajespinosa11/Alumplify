import CosLogo from '../../Assets/png/cosLogo.png'
import { Link } from 'react-router-dom'
import React from 'react'

const SignUp = () => {
  return (
    <div className='log_style'>
        <div className="left-col">
            <img className="logo" src={CosLogo} alt="cos_logo"/>
            <h1 className="left-text">COS | ALUMNI</h1>
            <p className="left-text">
                <i>
                Once a part of this remarkable <br/>
                institution, forever a part of its enduring <br/>
                legacy
                </i>
            </p>
            <footer><p><strong>est. 2023</strong></p></footer>
        </div>

        <div className="right-col">

        <div className="right-text">
            <h2 className="right-text"><strong>Create new Account </strong></h2>
            <span className="right-text">To keep you connected with us please sign in</span> 
        </div>

        <div className="form-container">
                <div className="form-container1">
                    <input className="SU-box" type="text" placeholder="First Name" />
                    <input className="SU-box" type="text" placeholder="Last Name" />
                    <input className="SU-box" type="text" placeholder="Course" />
                    <input className="SU-box" type="text" placeholder="Year Graduated" />
                </div>
            
                <div className="form-container2">
                    <input className="SU-box1" type="text" placeholder="Email" />
                    <input className="SU-box1" type="password" placeholder="Password" />
                </div>

                <Link to='/' className="a-btn">
                    <button className="SU-box2">
                        Sign Up
                    </button>
                </Link>
                <p className="user-sign-btn">Already a member? 
                <Link to='/' className="b-btn" >Sign In</Link>
                </p>
                <p className="right-text3">Access the website for free</p>
            </div>    
        </div>
    </div>
  )
}

export default SignUp