import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cosLogo from '../Assets/png/cosLogo.png'


const HeaderNavbar = (nameCat, selCat) => {
  const [topName, setTopName] = useState('COS | ALUMNI')
  const [arrSel, setArrSel] = useState([null, null, null, null, null, null, null])
  
  const selStyle = {
    borderBottom: "1px #F4F4F3 solid",
  }

  const clickTopBar = (nameCat, selCat) => {
    setTopName(nameCat)
    if(selCat === 'Home'){
      setArrSel([true, false, false, false, false, false, false])
    }
    else if(selCat === 'About'){
      setArrSel([false, true, false, false, false, false, false])
    }
    else if(selCat === 'Gallery'){
      setArrSel([false, false, true, false, false, false, false])
    }
    else if(selCat === 'AnnEvent'){
      setArrSel([false, false, false, true, false, false, false])
    }else if(selCat === 'OnlService'){
      setArrSel([false, false, false, false, true, false, false])
    }
  }

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
          <h1>{topName}</h1>
          <p>Technological University of the Philippines</p>
        </div>
      </div>
      <div className='navBar'>
        <nav >
          <div className='Links flexRow'>
              <Link to='/' 
              className={arrSel[0] ? 'selStyle' : ''}
              onClick={(e) => clickTopBar(nameCat = 'COS | ALUMNI',
                                          selCat = 'Home') }>
                Home
              </Link>
              <Link to='/About' 
              className={arrSel[1] ? 'selStyle' : ''}
              onClick={(e) => clickTopBar(nameCat = 'ABOUT US',
                                          selCat = 'About') }>
                About
              </Link>
              <Link to='/Gallery' 
              className={arrSel[2] ? 'selStyle' : ''} 
              onClick={(e) => clickTopBar(nameCat = 'COS | ALUMNI',
                                          selCat = 'Gallery')}>
                Gallery
                </Link>
              <Link to='/AnnEvent' 
                className={arrSel[3] ? 'selStyle' : ''} 
                onClick={(e) => clickTopBar(nameCat = 'PROGRAMS & EVENTS', 
                                          selCat= 'AnnEvent')}>
                Announcement
                </Link>
              <Link to='/OnlServ' 
              className={arrSel[4] ? 'selStyle' : ''} 
              onClick={(e) => clickTopBar(nameCat = 'ONLINE SERVICE',
                                          selCat= 'OnlService')}>
                Online Services
              </Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/BOA' onClick={(e) => clickTopBar(nameCat = 'BOOK OF ABSTRACT')}>
                Abstract
                </Link>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default HeaderNavbar