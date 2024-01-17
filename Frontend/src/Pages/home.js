import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function home() {
  return (
    <div className='HomeBG'>
      <h1 className='title'>News & Stories</h1>
      <div className="divider"></div>
      <div className="home-cards">

        <div className="homecard">
          <div className='image-container'>
            <img src="sample.jpg" alt="" />
          </div>
          <div className="homecard-content">
            <h3>Latest news Hot chili pepper</h3>
            <p>The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over.
            </p>
          </div>
        </div>

        <div className="homecard">
          <div className='image-container'>
            <img src="sample.jpg" alt="" />
          </div>
          <div className="homecard-content">
            <h3>Latest news Hot chili pepper</h3>
            <p>The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over.
            </p>
          </div>
        </div>

        <div className="homecard">
          <div className='image-container'>
            <img src="sample.jpg" alt="" />
          </div>
          <div className="homecard-content">
            <h3>Latest news Hot chili pepper</h3>
            <p>The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over.
            </p>
          </div>
        </div>

      </div>

      <div className="lm-btn">
        <p>LEARN MORE <span class="material-symbols-outlined"> line_end_arrow </span></p>
      </div>

      <div className="contain-2">
        <h1>Upcoming events</h1>
        <p>Take a look at some alumni events happening just around the corner.</p>
        <div className="event-grid">
          <div className="calendar-event">
            <div className="calendar">
              <div className="month">Feb</div>
              <div className="day">19</div>
            </div>
            <div className="calendar-details">
              <p>College Of Science</p>
              <p className='bold'>2024 Upcoming alumni Homecoming</p>
              <p>TUP-COS Alumni</p>
            </div>
          </div>
          <div className="calendar-event">
            <div className="calendar">
              <div className="month">Feb</div>
              <div className="day">19</div>
            </div>
            <div className="calendar-details">
              <p>College Of Science</p>
              <p className='bold'>2024 Upcoming alumni Homecoming</p>
              <p>TUP-COS Alumni</p>
            </div>
          </div>
          <div className="calendar-event">
            <div className="calendar">
              <div className="month">Feb</div>
              <div className="day">19</div>
            </div>
            <div className="calendar-details">
              <p>College Of Science</p>
              <p className='bold'>2024 Upcoming alumni Homecoming</p>
              <p>TUP-COS Alumni</p>
            </div>
          </div>

        </div>
        <div className="event-btn">
          <p>View all upcoming Events</p>
        </div>
      </div>

      <div className="contain-3">
        <div className="contain-left">
          <div className="img-center">
            <img src="samp.jpg" alt="" />
          </div>
          <div className="img-left">
            <img src="sample.jpg" alt="" />
          </div>
          <div className="img-right">
            <img src="cover.jpg" alt="" />
          </div>
        </div>
        <div className="contain-right">
          <div className="gallery-title">
            <h1>Gallery</h1>
          </div>
          <div className="gallery-details">
            <p>The clowns had taken over. And yes, they were literally clowns. Over 100 had appeared out of a small VW bug that had been driven up to the bank. Now they were all inside and had taken it over. </p>
          </div>
          <div className="gallery-btn">
            <p>LEARN MORE <span class="material-symbols-outlined"> line_end_arrow </span></p>
          </div>
        </div>
      </div>

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
          <img src="footer.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default home
