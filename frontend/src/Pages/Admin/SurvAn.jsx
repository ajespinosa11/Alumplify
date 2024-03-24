import React, { useEffect, useState } from 'react'
import PersonInfo from './AnalSurv/PersonInfo'
import Employee from './AnalSurv/Employee'
import Education from './AnalSurv/Education'
import Job from './AnalSurv/Job'
import cosLog from '../../Assets/png/cosLogo.png'

const SurvAn = () => {
  const [selAnalyt, setSel] = useState(0)
  useEffect(() => {
    setSel(1)
    document.body.style.backgroundColor = '#FCF5E5'
  }, [])

  const dispAnalyst = () => {
    if(selAnalyt === 0){
      
      return  <PersonInfo />
      
    }else if(selAnalyt === 1){
    
      return  <Employee />
  
    }else if(selAnalyt === 2){
     
      return  <Education />
     
    }else if(selAnalyt === 3){
    
      return  <Job />
  
    }
  }

  return (
      <div  style={{width: "100%"}}>
        <div className='headerInpt' style={{width: "100%", borderRadius:"0 0 0 0"}}>
          <div className='flexRow'>
            <div className='flexRow innerHeader'>
              <div className= 'cosPicAdmin'>
                <img src={cosLog} alt="cos logo" width={'100%'} height={'100%'} />
              </div>
              <div>
              <div style={{fontSize: '30px', color: '#BF9745',
                      fontFamily: 'Abhaya Libre, serif', fontWeight: 'bold', 
                      letterSpacing: '5px'}}>
                ALUMPLIFY
              </div>
              <div style={{fontSize: '12px', color: 'white',
                      fontFamily: 'Nunito Sans, sans-serif;',
                      textDecoration: 'italic', fontStyle: 'italic'}}>
                Technological University of the Philippines
              </div>
            </div>
          </div>
        </div>
        <div className='navAnalyt'>
          <div onClick={() => setSel(0)} to="/Personal_information">Personal Information</div>
          <div onClick={() => setSel(1)} to="/Employee">Employment</div>
          <div onClick={() => setSel(2)} to="/Education">Education</div>
          <div onClick={() => setSel(3)} to="/Alumni_job">Job</div>
        </div>
      </div>
      
      <div className='admin-wrapper'>
        {dispAnalyst() }
      </div>
    </div>
  )
}

export default SurvAn