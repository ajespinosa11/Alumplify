import React from 'react'
import { Link } from 'react-router-dom'
import cosLogo from '../Assets/png/cosLogo.png'


const HeaderNavbar = () => {
  return (
    <div className='bgNav flexRow'>
      <div className='flexRow cosTextPic'>
        <div className='cosPic'>
          <img src = {cosLogo} alt = 'COS logo'
              style={{
                width: "100%",
                height: "100%"
              }}></img>
        </div>
        <div className='flexColumn cosText'>
          <h1>COS | ALUMNI</h1>
          <p>Technological University of the Philippines</p>
        </div>
      </div>
      <div className='navBar'>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/BOA">Link</Nav.Link>
        </Nav>
    
      </Container>
    </Navbar> */}
        
        <nav >
          <div className='Links flexRow'>
              <Link to='/'>Home</Link>
              <Link to='/About'>About</Link>
              <Link to='/Gallery'>Gallery</Link>
              <Link to='/AnnEvent'>Announcement</Link>
              <Link to='/OnlServ'>Online Services</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/BOA'>Abstract</Link>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default HeaderNavbar