import React, { useEffect, useState } from 'react'


const PersonalInfo = ({arrPers, changeVal})  => {

  const [dateInp , setDateInp] = useState('text')
  const focusChange = () => {
    setDateInp('date')
  }

  const getValue = (e) => {
    changeVal((prev) => ({...prev, [e.target.name]: e.target.value}))
    console.log(e.target.value)
  }

  return (
    <div className='flexColumn questPersInfo'>
      <div className='survHeader'>
        <h1>PERSONAL INFORMATION</h1>
      </div>
      <div className='flexColumn inputAns'>
            <div className='flexColumn inputs4text'>
                <div className='questInpBord heightInp'>
                    <input onChange={getValue} name='quesAns1' 
                    value={arrPers.quesAns1} type='text' placeholder='NAME'/>  
                </div>
                <div className='questInpBord heightInp'>
                    <input onChange={getValue} name='quesAns2' 
                    value={arrPers.quesAns2} type='text' placeholder='PERMANENT ADDRESS'/>
                </div>
                <div className='questInpBord heightInp'>
                    <input onChange={getValue} name='quesAns3' 
                    value={arrPers.quesAns3} type='email' placeholder='EMAIL ADDRESS'/>
                </div>
                <div className='questInpBord heightInp'>
                    <input onChange={getValue} name='quesAns4' 
                    value={arrPers.quesAns4} type='number' placeholder='CONTACT NUMBER'/>
                </div>
            </div>
            <div className='flexRow input2drop'>
              <div className='questInpBord heightInp'>
                  <select onChange={getValue} name='quesAns5' 
                  value={arrPers.quesAns5} className='dropBord' id="Stats">
                      <option value ='' disabled hidden>CIVIL STATUS</option>
                      <option value ='Employee'>Employee</option>
                      <option value ='Citizen'>Citizen</option>
                  </select>
              </div>
              <div className='questInpBord heightInp'>
                  <select onChange={getValue} name='quesAns6' 
                  value={arrPers.quesAns6} className='dropBord' id="sex">
                      <option value ='' disabled hidden>SEX</option>
                      <option value ='Male'>Male</option>
                      <option value ='Female'>Female</option>
                      <option value ='Unknown'>Unknown</option>
                  </select>
              </div>
            </div>
          <div className='flexRow inp2Txt1Drop'>
              <div className='questInpBord heightInp'>
                  <input onChange={getValue} name='quesAns7' 
                  value={arrPers.quesAns7}
                      type={dateInp} 
                      placeholder='Birthdate'
                      className='dropBord' 
                      onFocus={focusChange}
                      onBlur={() => setDateInp('text')}/>
              </div>
              <div className='questInpBord heightInp'>
                  <select onChange={getValue} name='quesAns8' 
                  value={arrPers.quesAns8} className='dropBord' id="region">
                      <option value ='' disabled hidden>REGION</option>
                      <option value ='Male'>NCR</option>
                      <option value ='Female'>Rergion I</option>
                      <option value ='Unknown'>Region II</option>
                  </select>
              </div>
              <div className='questInpBord heightInp'>
                  <input onChange={getValue} name='quesAns9' 
                  value={arrPers.quesAns9} className='dropBord' type='text' placeholder='PROVINCE'/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PersonalInfo