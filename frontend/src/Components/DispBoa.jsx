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
     className='flexColumn abstractContBord'>
      <div className='flexRow abstractCont' >
        <div className= 'plusIconBoa' >
          <span onClick={(e) => clickTrigAdd()} 
          className="material-symbols-outlined">
            {trig === false ? 'add' : 'remove'}
            </span>
        </div>
        <div className='boaTitle'>
          <div style={{fontSize:'30px'}}>
            <p>ALUMPLIFY: {boa.Title}</p>
          </div>
          <div className='detAbstarct'>
            <p><strong>Date Published:</strong> {boa.Date_Publish}</p>
            <p><strong>Author:</strong> {boa.Author}</p>
          </div>
        </div>
        <div className='boaPic'>
          <FontAwesomeIcon icon={faFileLines} style={{color: "black", fontSize: "150px", }} />
        </div>
      </div>
      <div style={{display: trig === true ? '' : 'none'}} className={`flexRow bottomBoaCont ${trig === false ? 'closeDesc': ''}`}>
        <div className='dlIconBoa'>
          <span className="material-symbols-outlined">download</span>
        </div>
        <div className='abstText'>
          <p><strong>Abstract:</strong> {boa.Abstract}</p>
        </div>
      </div>
    </div>
  )
}

export default DispBoa