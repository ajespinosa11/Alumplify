import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cosLogo from '../Assets/png/cosLogo.png'


const HeaderNavbar = (nameCat, selCat) => {
  const [topName, setTopName] = useState('COS | ALUMNI')
  const [arrSel, setArrSel] = useState([null, null, null, null, null, null])
  
  const selStyle = {
    borderBottom: "1px #F4F4F3 solid",
  }

  const clickTopBar = (nameCat, selCat) => {
    const clickSel = [...arrSel]
    setTopName(nameCat)
    for(let i = 0; i < clickSel.length; i++){
      if(i === selCat){
        clickSel[i] = true;
      }else{
        clickSel[i] = null
      }
      setArrSel(clickSel)
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
                                          selCat = 0) }>
                Home
              </Link>
              <Link to='/' 
              className={arrSel[1] ? 'selStyle' : ''}
              onClick={(e) => clickTopBar(nameCat = 'ABOUT US',
                                          selCat = 1) }>
                About
              </Link>
              <Link to='/YearBook' 
              className={arrSel[2] ? 'selStyle' : ''} 
              onClick={(e) => clickTopBar(nameCat = 'COS | ALUMNI',
                                          selCat = 2)}>
                Gallery
                </Link>
              <Link to='/NewsStories' 
                className={arrSel[3] ? 'selStyle' : ''} 
                onClick={(e) => clickTopBar(nameCat = 'NEWS & STORIES', 
                                          selCat= 3)}>
                Stories
              </Link>
              <Link to='/AnnEvent' 
                className={arrSel[4] ? 'selStyle' : ''} 
                onClick={(e) => clickTopBar(nameCat = 'PROGRAMS & EVENTS', 
                                          selCat= 4)}>
                Announcement
                </Link>
              <Link to='/BOA' 
              className={arrSel[5] ? 'selStyle' : ''}
              onClick={(e) => clickTopBar(nameCat = 'BOOK OF ABSTRACT', selCat= 5)}>
                Abstract
              </Link>
              <div className='dropdown'>
                <button className='dropbtn' htmlFor ='selOS'>
                  Online Services
                  <span className="material-symbols-outlined">
                    expand_more
                  </span>
                </button>
                <div className='dropList'>
                  <Link to = '/SurvTrace'>Graduate Tracer Study</Link>
                  <Link to = '/ReqDoc'>Request For Document</Link>
                </div>
              </div>
              <Link to='/profile'>Profile</Link>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default HeaderNavbar