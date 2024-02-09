import React, { useEffect, useState } from 'react'
import PersonalInfo from './SurvForm1/PersonalInfo'
import Education from './SurvForm1/Education'
import Employment from './SurvForm1/Employment'
import Job from './SurvForm1/Job'

const PersonInfo = () => {
    const [survSelCat, setSurvSelCat] = useState([false, false, false, false])

    const [personalArr, setPersonalArr] = useState({
        quesAns1: '',
        quesAns2: '',
        quesAns3: '',
        quesAns4: '',
        quesAns5: '',
        quesAns6: '',
        quesAns7: '',
        quesAns8: '',
        quesAns9: ''
    })
    console.log(personalArr);
    const getPersValue = (e) => {

        setPersonalArr((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const submitForm = async (e) => {
        e.preventDefault() 

        const persResponse = await fetch('api/contents/response/persInf', {
            METHOD: 'POST',
            body: JSON.stringify(personalArr),
            headers: {
            "Content-Type": 'application/json'
            }
        })

        const persJson = await persResponse.json()
  
      if(!persJson.ok){
        console.log("error")
      }
      if(persJson.ok){
        const arrDef = personalArr
        
        arrDef.quesAns1 = ''
        arrDef.quesAns2 = ''
        arrDef.quesAns3 = ''
        arrDef.quesAns4 = ''
        arrDef.quesAns5 = ''
        arrDef.quesAns6 = ''
        arrDef.quesAns7 = ''
        arrDef.quesAns8 = ''
        arrDef.quesAns9 = ''
        
        setPersonalArr(arrDef)
        console.log("Response personal info added", persResponse)
      }
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

    const handleBackClick = (navCat) => {
        const curCat = [...survSelCat]
        
        if(navCat === 'back'){
            for(let i = 0; i < curCat.length; i++){
                if(curCat[i]){
                    curCat[i] = false
                    curCat[i - 1] = true
                }
            }
        }
        
        if(navCat === 'next'){
            for(let a = 0; a < curCat.length; a++){
                
                if(curCat[a]){
                    curCat[a] = false
                    curCat[++a] = true
                }
                console.log(curCat)
            }
        }
        
        
        setSurvSelCat(curCat)
    }

    useEffect(() => {
        const initSel = document.getElementById('persInfo')
        if(initSel){
            const setSel = [...survSelCat]
            setSel[0] = true
            setSurvSelCat(setSel)
        }
        document.body.style.backgroundColor = '#1e1e1e'

    }, [])
  return (
    <div className='flexColumn surveyBorder'>
        <div className='titleTextPage'>
            <h1>Graduate Tracer Survey</h1>
        </div>
        <div className="flexRow survCat">
            <label htmlFor='persInfo' 
                style={{backgroundColor: `${survSelCat[0] === true ? '#bf9745' : ''}`}}>
                Personal Information
                <input hidden
                type='radio' 
                onClick={(e) => handleChange(0)} 
                id= 'persInfo'
                name="Categ" 
                checked/>
            </label>
            <label htmlFor='persEduc' 
                style={{backgroundColor: `${survSelCat[1] === true ? '#bf9745' : ''}`}}>
                Education
                <input hidden 
                onClick={(e) => handleChange(1)} 
                type='radio' 
                id= 'persEduc' 
                name="Categ"  />
            </label>
            <label htmlFor='persEmploy' 
                style={{backgroundColor: `${survSelCat[2] === true ? '#bf9745' : ''}`}}>
               Employment
                <input hidden 
                type='radio'
                id='persEmploy' 
                name="Categ" 
                onClick={(e) => handleChange(2)}  />
            </label>
            <label htmlFor='persJob' 
                style={{backgroundColor: `${survSelCat[3] === true ? '#bf9745' : ''}`}}>
                Job
                <input hidden 
                type='radio' 
                id='persJob' 
                name="Categ" 
                onClick={(e) => handleChange(3)}  />
            </label>
        </div>
        <div className='questionBord' 
            style={{height: survSelCat[0] ? '800px' : survSelCat[1] ? '1400px' : survSelCat[2] ? '1480px' : ''}}>
            <div className='flexColumn innerQuestBord'>
                <form onSubmit={submitForm} id='survForm' action="" className='quewstionForm'>
                    {<PersonalInfo cat1 = {survSelCat[0]} arrPers={personalArr} changeVale = {getPersValue} />}
                    {<Education cat2 = {survSelCat[1]}/>}
                    {<Employment cat3 = {survSelCat[2]}/>}
                    {<Job cat4 = {survSelCat[3]}/>}
                </form>
                <div className='flexRow' style={{width: '100%'}}>
                    <div style={{width: '95%', display: 'flex', justifyContent: 'start'}}>
                        {survSelCat[0] === false ?
                            <div className='nextbtnBord' >
                                <button onClick= {(e) => handleBackClick('back')} className='nextButtonSurv' >BACK</button>
                            </div> : ''
                        }
                    </div>
                    <div style={{width: '95%', display: 'flex', justifyContent: 'end'}} >
                        {survSelCat[3] === false ?
                            <div className='nextbtnBord' >
                                <button onClick= {(e) => handleBackClick('next')} className='nextButtonSurv' >NEXT</button>
                            </div>: 
                            <div className='nextbtnBord' >
                                <button form='survForm' className='nextButtonSurv' >SUBMIT</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonInfo