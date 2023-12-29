// Component for Display the Book of Abstract from the database

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'

const DispBoa = ({ boa, amount, condLoad}) => {

  const [trig, setTrig] = useState(false)
  const clickTrigAdd = () => {
    if(!trig){
      setTrig(true)
    }else{
      setTrig(false)
    }
  }
  
  return (
    <div style= {{display: amount > 2 && condLoad === false ? 'none' : ''}} 
    className='abstractContBord'>
      <div className='flexColumn abstractCont' 
      style={{
        height: trig === true ? '406px': '270px'
      }}>
        <div className='flexRow upperBoaCont'>
          <div className= 'plusIconBoa' >
            <span onClick={(e) => clickTrigAdd()} 
            className="material-symbols-outlined">
              {trig === false ? 'add' : 'remove'}
              </span>
          </div>
          <div>
            <div>
              <h2>ALUMPLIFY: {boa.Title}</h2>
            </div>
            <div className='detAbstarct'>
              <p><strong>Date Published:</strong> {boa.Date_Publish}</p>
              <p><strong>Author:</strong> {boa.Author}</p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faFileLines} style={{color: "#ffffff", fontSize: "150px", }} />
          </div>
        </div>
        <div className={`flexRow bottomBoaCont ${trig === false ? 'closeDesc': ''}`}>
          <div className='dlIconBoa'>
            <span className="material-symbols-outlined">download</span>
          </div>
          <div>
            <p><strong>Abstract:</strong> {boa.Abstract}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DispBoa