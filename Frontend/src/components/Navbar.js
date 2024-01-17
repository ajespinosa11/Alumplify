import React from 'react'

function navbar() {
  return (
    <header>
      <div className="navbar">
      <div className="navblock">
        <img src="/Logo.png" alt="logo" />
        <div className="navtitle">
          <h2>News & Stories</h2>
          <p>Technological university of the Philippines</p>
        </div>
        
        <nav>
          <a href="/Home">Home</a>
          <a href="/#">About</a>
          <a href="/newsandstories">Gallery</a>
          <a href="/#">Announcements</a>
          <a href="/#">Online Services</a>
          <a href="/#">Profile</a>
        </nav>
      </div>
      </div>
    </header>
  )
}

export default navbar
