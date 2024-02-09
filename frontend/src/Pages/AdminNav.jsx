import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Assets/svg/Dashboard.svg'
import Abstract from '../Assets/svg/Abstract.svg'
import Analytics from '../Assets/svg/Analytics.svg'
import Upload from '../Assets/svg/Upload.svg'


const Navbar = () => {
  const [hovPoint, setHovPoint] = useState([false, false, false, false, false])
  const [clickLink, setClickLink] = useState([false, false, false, false, false])

  const handleHov = (cond, index) => {
    const getArrHov = [...hovPoint];
    getArrHov[index] = cond

    setHovPoint(getArrHov)
  }

  const clickTopBar = (index) => {
    const clickArr = [...clickLink]
    for(let i = 0; i < clickArr.length; i++){
        if(i === index){
            clickArr[i] = true
        }else{
            clickArr[i] = false
        }
        setClickLink(clickArr)
    }
  }

  return (
    <div className='navBord'>
        <div className='navItem'>
            <nav className='flexColumn' >
                <Link to= '/Admin/Dashboard'>
                    <div className='flexColumn hovindivNav'
                        onMouseEnter={(e) => handleHov(true, 0)}
                        onMouseLeave={(e) => handleHov(false, 0)}
                        onClick={(e) => clickTopBar(0)}>
                        <div>
                            <img src={Dashboard} alt="Dashboard" />
                        </div>
                        
                    </div>
                </Link>
                <Link to= '/Admin/NsAnn'>
                    <div className='flexColumn hovindivNav'
                        onMouseEnter={(e) => handleHov(true, 1)}
                        onMouseLeave={(e) => handleHov(false, 1)}
                        onClick={(e) => clickTopBar(1)}>
                        <div>
                            <img src={Upload} alt="Content Creator" />
                        </div>

                    </div>
                </Link>
                <Link to= '/Admin/BOA'>
                    <div className='flexColumn hovindivNav'
                        onMouseEnter={(e) => handleHov(true, 2)}
                        onMouseLeave={(e) => handleHov(false, 2)}
                        onClick={(e) => clickTopBar(2)}>
                        <div>
                            <img src={Analytics} alt="Analytics" />
                        </div>
                        
                    </div>
                </Link>
                <Link to= '/Admin/ListAlumn'>
                    <div className='flexColumn hovindivNav'
                        onMouseEnter={(e) => handleHov(true, 3)}
                        onMouseLeave={(e) => handleHov(false, 3)}
                        onClick={(e) => clickTopBar(3)}>
                        <span class="material-symbols-outlined alumni" >
                            school
                        </span>
                        {/* <div>
                            List of Alumni
                        </div> */}
                        
                    </div>
                </Link>
                <Link to= '/Admin/SurvAn'>
                    <div className='flexColumn hovindivNav'
                        onMouseEnter={(e) => handleHov(true, 4)}
                        onMouseLeave={(e) => handleHov(false, 4)}
                        onClick={(e) => clickTopBar(4)}>
                        <div>
                            <img src={Abstract} alt="Abstract" />
                        </div>
                    
                    </div>
                </Link>
            </nav>
        </div>
    </div>
    
  )
}

export default Navbar