import React from 'react'

function navbar() {
  return (
    <header>
      <div className="nav-bar">
      <div className="navblock">
        <img src="/Logo.png" alt="logo" />
        <div className="navtitle">
          <h2>News & Stories</h2>
          <p>Technological university of the Philippines</p>
        </div>
        
        <nav>
          <a href="/">Home</a>
          <a href="/#">About</a>
          <a href="/newsandstories">Gallery</a>
          <a href="/#">Announcements</a>
          <a href="/#">OnlineServices</a>
          <a href="/profile">Profile</a>
        </nav>
      </div>
      </div>
    </header>
  )
}

export default navbar
