import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AnsPersInfo from '../../../Components/QuesAns/AnsPersInfo'

const PersonalInfo = (cat1, arrPers, changeVale)  => {

    const [personalArr, setPersonalArr] = AnsPersInfo();
    console.log(personalArr)
  const [dateInp , setDateInp] = useState('text')
  const focusChange = () => {
    setDateInp('date')
  }

  const getValue = (e) => {
    setPersonalArr((prev) => ({...prev, [e.target.name]: [e.target.value]}))
  }

  return (
    <div style= {{
      display: `${cat1.cat1 ? 'flex' : 'none'}`
      }} 
      className='flexColumn questEduc'>
        <div className='survHeader'>
          <h1>PERSONAL INFORMATION</h1>
      </div>
      <div className='flexColumn inputAns'>
          <div className='flexRow textAndPic'>
              <div className='flexColumn inputs4text'>
                  <div className='questInpBord longAns heightInp'>
                      <input onChange={changeVale} name='quesAns1' 
                      value={arrPers.quesAns1} type='text' placeholder='NAME'/>  
                  </div>
                  <div className='questInpBord longAns heightInp'>
                      <input onChange={getValue} name='quesAns2' 
                      value={arrPers.quesAns2} type='text' placeholder='PERMANENT ADDRESS'/>
                  </div>
                  <div className='questInpBord longAns heightInp'>
                      <input onChange={getValue} name='quesAns3' 
                      value={arrPers.quesAns3} type='email' placeholder='EMAIL ADDRESS'/>
                  </div>
                  <div className='questInpBord longAns heightInp'>
                      <input onChange={getValue} name='quesAns4' 
                      value={arrPers.quesAns4} type='number' placeholder='CONTACT NUMBER'/>
                  </div>
              </div>
              <div className='flexColumn profPicBord'>
                  <div className='profPic'>
                      <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className='buttonUpload'>
                      <label htmlFor='profPic' >Upload Image</label>
                      <input id="profPic" style={{display: 'none'}}  type="file" accept='image/*'/>
                  </div> 
              </div>
          </div>
          
          <div className='flexRow input2drop'>
              <div className='questInpBord shortAns heightInp'>
                  <select onChange={getValue} name='quesAns5' 
                  value={arrPers.quesAns5} defaultValue={''} className='dropBord' id="Stats">
                      <option value ='' disabled selected hidden>CIVIL STATUS</option>
                      <option value ='Employee'>Employee</option>
                      <option value ='Citizen'>Citizen</option>
                  </select>
              </div>
              <div className='questInpBord shortAns heightInp'>
                  <select onChange={getValue} name='quesAns6' 
                  value={arrPers.quesAns6} defaultValue={''} className='dropBord' id="sex">
                      <option value ='' disabled selected hidden>SEX</option>
                      <option value ='Male'>Male</option>
                      <option value ='Female'>Female</option>
                      <option value ='Unknown'>Unknown</option>
                  </select>
              </div>
          </div>
          <div className='flexRow inp2Txt1Drop'>
              <div className='questInpBord shortAns heightInp'>
                  <input onChange={getValue} name='quesAns7' 
                  value={arrPers.quesAns7}
                      type={dateInp} 
                      placeholder='Birthdate'
                      className='dropBord' 
                      onFocus={focusChange}
                      onBlur={() => setDateInp('text')}/>
              </div>
              <div className='questInpBord shortAns heightInp'>
                  <select onChange={getValue} name='quesAns8' 
                  value={arrPers.quesAns8} defaultValue={''} className='dropBord' id="region">
                      <option value ='' disabled selected hidden>REGION</option>
                      <option value ='Male'>NCR</option>
                      <option value ='Female'>Rergion I</option>
                      <option value ='Unknown'>Region II</option>
                  </select>
              </div>
              <div className='questInpBord shortAns heightInp'>
                  <input onChange={getValue} name='quesAns9' 
                  value={arrPers.quesAns9} className='dropBord' type='text' placeholder='PROVINCE'/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PersonalInfo