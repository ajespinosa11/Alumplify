import React, { useEffect, useState } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonInfo = () => {
    const [dateInp , setDateInp] = useState('text')

    const [survSelCat, setSurvSelCat] = useState([false, false, false, false])

    const focusChange = () => {
        setDateInp('date')
    }

    const handleChange = (index ) => {
        const setSel =  [...survSelCat]

        for(let i = 0; i < setSel.length; i++){
            if(i === index){
                setSel[index] = true
            }else{
                setSel[i] = false
            }
        }
        setSurvSelCat(setSel)
        console.log(setSel)
    }

    useEffect(() => {
        console.log("hello")
        const initSel = document.getElementById('persInfo')
        if(initSel){
            const setSel = [...survSelCat]
            setSel[0] = true
            setSurvSelCat(setSel)
        }
    }, [])
  return (
    <div className='flexColumn surveyBorder'>
        <div className='titleTextPage'>
            <h1>Graduate Tracer Survey</h1>
        </div>
        <div className="flexRow survCat">
            <label htmlFor='persInfo'>
                Personal Information
                <input hidden
                type='radio' 
                onClick={(e) => handleChange(0)} 
                id= 'persInfo'
                name="Categ" 
                checked/>
            </label>
            <label htmlFor='persEduc'>
                Education
                <input hidden 
                onClick={(e) => handleChange(1)} 
                type='radio' 
                id= 'persEduc' 
                name="Categ"  />
            </label>
            <label htmlFor='persEmploy'>
               Employment
                <input hidden 
                type='radio'
                id='persEmploy' 
                name="Categ" 
                onClick={(e) => handleChange(2)}  />
            </label>
            <label htmlFor='persJob'>
                Job
                <input hidden 
                type='radio' 
                id='persJob' 
                name="Categ" 
                onClick={(e) => handleChange(3)}  />
            </label>
        </div>
        <div className='questionBord'>
            <div className='flexColumn innerQuestBord'>
                <form action="" className='quewstionForm'>
                    <div style= {{
                        display: survSelCat[0] ? 'flex' : 'none'
                    }} 
                    className='flexColumn questPersInfo'>
                        <div className='survHeader'>
                            <h1>PERSONAL INFORMATION</h1>
                        </div>
                        <div className='flexColumn inputAns'>
                            <div className='flexRow textAndPic'>
                                <div className='flexColumn inputs4text'>
                                    <div className='questInpBord longAns'>
                                        <input type='text' placeholder='NAME'/>  
                                    </div>
                                    <div className='questInpBord longAns'>
                                        <input type='text' placeholder='PERMANENT ADDRESS'/>
                                    </div>
                                    <div className='questInpBord longAns'>
                                        <input type='email' placeholder='EMAIL ADDRESS'/>
                                    </div>
                                    <div className='questInpBord longAns'>
                                        <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='CONTACT NUMBER'/>
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
                                <div className='questInpBord shortAns'>
                                    <select defaultValue={''} className='dropBord' name="civStat" id="Stats">
                                        <option value ='' disabled selected hidden>CIVIL STATUS</option>
                                        <option value ='Employee'>Employee</option>
                                        <option value ='Citizen'>Citizen</option>
                                    </select>
                                </div>
                                <div className='questInpBord shortAns'>
                                    <select defaultValue={''} className='dropBord' name="perSex" id="sex">
                                        <option value ='' disabled selected hidden>SEX</option>
                                        <option value ='Male'>Male</option>
                                        <option value ='Female'>Female</option>
                                        <option value ='Unknown'>Unknown</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flexRow inp2Txt1Drop'>
                                <div className='questInpBord shortAns'>
                                    <input type={dateInp} 
                                        placeholder='Birthdate'
                                        className='dropBord' 
                                        onFocus={focusChange}
                                        onBlur={() => setDateInp('text')}/>
                                </div>
                                <div className='questInpBord shortAns'>
                                    <select defaultValue={''} className='dropBord' name="persRegion" id="region">
                                        <option value ='' disabled selected hidden>REGION</option>
                                        <option value ='Male'>NCR</option>
                                        <option value ='Female'>Rergion I</option>
                                        <option value ='Unknown'>Region II</option>
                                    </select>
                                </div>
                                <div className='questInpBord shortAns'>
                                    <input className='dropBord' type='text' placeholder='PROVINCE'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style= {{
                            display: survSelCat[1] ? 'flex' : 'none'
                        }}  
                        className='flexColumn questEduc'> 
                        <div className='survHeader'>
                            <h1>EDUCATION</h1>
                        </div>
                    </div>
                    <div
                        style= {{
                            display: survSelCat[2] ? 'flex' : 'none'
                        }}  
                        className='flexColumn questEduc'> 
                        <div className='survHeader'>
                            <h1>EMPLOYMENT</h1>
                        </div>
                    </div>
                    <div
                        style= {{
                            display: survSelCat[3] ? 'flex' : 'none'
                        }}  
                        className='flexColumn questEduc'> 
                        <div className='survHeader'>
                            <h1>JOB</h1>
                        </div>
                    </div>
                </form>
                <div className='nextbtnBord' >
                    <button className='nextButtonSurv' >NEXT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonInfo