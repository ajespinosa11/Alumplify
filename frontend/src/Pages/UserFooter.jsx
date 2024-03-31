import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import footerPic from '../Assets/jpg/footer.jpg'

const UserFooter = () => {
  return (
      <div className="home-footer">
        <div className="footer-left">
          <h1>COS | ALUMNI</h1>
          <p>Technological University of the Philippines San Marcelino St, Ayala Blvd, Ermita, Manila, 1000</p>
          <p>Lorem ipsum dolor sit amet consectetur. </p>
          <h2>Follow us</h2>
          <div className="footer-icon">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size='2xl' style={{ color: "#f9ba39", }} /></a>
          </div>
          <div className="footer-icon">
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#ffe1a4", }} /></a>
          </div>
        </div>
        <div className="footer-right">
          <img src={footerPic} alt="" />
        </div>
      </div>
  )
}

export default UserFooter