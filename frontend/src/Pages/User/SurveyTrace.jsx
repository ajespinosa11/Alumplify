import React, { useEffect, useState } from 'react'
import PersonalInfo from './SurvForm1/PersonalInfo'
import Education from './SurvForm1/Education'
import Employment from './SurvForm1/Employment'
import Job from './SurvForm1/Job'

const PersonInfo = () => {
    const [survSelCat, setSurvSelCat] = useState([false, false, false, false])

    //Personal Information Object
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

    //Education Object
    const [educAns, setEducAns] = useState({
        quesAns1: '',
        quesAns2: 0,
        quesAns3: '',
        quesAns4r1Chk1: false,
        quesAns4r1Chk2: false,
        quesAns4r2Chk1: false,
        quesAns4r2Chk2: false,
        quesAns4r3Chk1: false,
        quesAns4r3Chk2: false,
        quesAns4r4Chk1: false,
        quesAns4r4Chk2: false,
        quesAns4r5Chk1: false,
        quesAns4r5Chk2: false,
        quesAns4r6Chk1: false,
        quesAns4r6Chk2: false,
        quesAns4r7Chk1: false,
        quesAns4r7Chk2: false,
        quesAns4r8Chk1: false,
        quesAns4r8Chk2: false,
        quesAns4r9Chk1: false,
        quesAns4r9Chk2: false,
        quesAns4r10Chk1: false,
        quesAns4r10Chk2: false,
        quesAns4r11Chk1: false,
        quesAns4r11Chk2: false,
        quesAns4r12Chk1: false,
        quesAns4r12Chk2: false,
        quesAns4r13Chk1: false,
        quesAns4r13Chk2: false,
        quesAns4r14Chk1: false,
        quesAns4r14Chk2: false,
        quesAns5: '',
        quesAns6: '',
        quesAns7Chk1: false,
        quesAns7Chk2: false,
        quesAns7Chk3: false,
    })

    const [employee, setEmploy] = useState({
        quesAns1: '',
        quesAns2chck1: false,
        quesAns2chck2: false,
        quesAns2chck3: false,
        quesAns2chck4: false,
        quesAns2chck5: false,
        quesAns2chck6: false,
        quesAns2chck7: false,
        quesAns3: '',
        quesAns4: '',
        quesAns5: '',
        quesAns6check1: false,
        quesAns6check2: false,
        quesAns6check3: false,
        quesAns6check4: false,
        quesAns6check5: false,
        quesAns6check6: false,
        quesAns6check7: false,
        quesAns6check8: false,
        quesAns6check9: false,
        quesAns6check10: false,
        quesAns6check11: false,
        quesAns6check12: false,
        quesAns6check13: false,
        quesAns6check14: false,
        quesAns6check15: false,
        quesAns6check16: false,
        quesAns6check17: false,
        quesAns6check18: false,
        quesAns7: '',
        quesAns8: '',
    })

    const [job, setJob] = useState({
        quesAns1: '',
        quesAns2chk1: false,
        quesAns2chk2: false,
        quesAns2chk3: false,
        quesAns2chk4: false,
        quesAns2chk5: false,
        quesAns2chk6: false,
        quesAns2chk7: false,
        quesAns2chk8: false,
        quesAns3: '',
        quesAns4chk1: false,
        quesAns4chk2: false,
        quesAns4chk3: false,
        quesAns4chk4: false,
        quesAns4chk5: false,
        quesAns4chk6: false,
        quesAns5chk1: false,
        quesAns5chk2: false,
        quesAns5chk3: false,
        quesAns5chk4: false,
        quesAns5chk5: false,
        quesAns5chk6: false,
        quesAns6: '',
        quesAns7: '',
        quesAns8chk1: false,
        quesAns8chk2: false,
        quesAns8chk3: false,
        quesAns8chk4: false,
        quesAns8chk5: false,
        quesAns8chk6: false,
        quesAns8chk7: false,
        quesAns8chk8: false,
        quesAns9row1: '',
        quesAns9row2: '',
        quesAns9row3: '',
        quesAns9row4: '',
        quesAns10: '',
        quesAns11: false,
        quesAns12chk1: false,
        quesAns12chk2: false,
        quesAns12chk3: false,
        quesAns12chk4: false,
        quesAns12chk5: false,
        quesAns12chk6: false,
        quesAns12chk7: false,
        quesAns13: ''
    })
    console.log(job)


    const submitForm = async (e) => {
        e.preventDefault() 

        const persResp = await fetch('/api/contents/response/persInf', {
            method: 'POST',
            body: JSON.stringify(personalArr),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        const educResp = await fetch('/api/contents/response/Educ', {
            method: 'POST',
            body: JSON.stringify(educAns),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        const empResp = await fetch('/api/contents/response/Employee', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        const jobResp = await fetch('/api/contents/response/Job', {
            method: 'POST',
            body: JSON.stringify(job),
            headers: {
                "Content-Type": 'application/json'
            }
        })

        const persJson = await persResp.json()
        const educJson = await educResp.json()
        const empJson = await empResp.json()
        const jobJson = await jobResp.json()


      if(!persResp.ok || !educResp.ok || !empResp.ok){
        console.log(persJson.error)
        console.log(educJson.error)
        console.log(empJson.error)
        console.log(jobJson.error)
      }
      if(persResp.ok && educResp.ok && empResp.ok && jobResp.ok){
        setPersonalArr({
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
        setEducAns({
            quesAns1: '',
            quesAns2: '',
            quesAns3: '',
            quesAns4r1Chk1: false,
            quesAns4r1Chk2: false,
            quesAns4r2Chk1: false,
            quesAns4r2Chk2: false,
            quesAns4r3Chk1: false,
            quesAns4r3Chk2: false,
            quesAns4r4Chk1: false,
            quesAns4r4Chk2: false,
            quesAns4r5Chk1: false,
            quesAns4r5Chk2: false,
            quesAns4r6Chk1: false,
            quesAns4r6Chk2: false,
            quesAns4r7Chk1: false,
            quesAns4r7Chk2: false,
            quesAns4r8Chk1: false,
            quesAns4r8Chk2: false,
            quesAns4r9Chk1: false,
            quesAns4r9Chk2: false,
            quesAns4r10Chk1: false,
            quesAns4r10Chk2: false,
            quesAns4r11Chk1: false,
            quesAns4r11Chk2: false,
            quesAns4r12Chk1: false,
            quesAns4r12Chk2: false,
            quesAns4r13Chk1: false,
            quesAns4r13Chk2: false,
            quesAns4r14Chk1: false,
            quesAns4r14Chk2: false,
            quesAns5: '',
            quesAns6: '',
            quesAns7Chk1: false,
            quesAns7Chk2: false,
            quesAns7Chk3: false,
        })

        setEmploy({
            quesAns1: '',
            quesAns2chck1: false,
            quesAns2chck2: false,
            quesAns2chck3: false,
            quesAns2chck4: false,
            quesAns2chck5: false,
            quesAns2chck6: false,
            quesAns2chck7: false,
            quesAns3: '',
            quesAns4: '',
            quesAns5: '',
            quesAns6check1: false,
            quesAns6check2: false,
            quesAns6check3: false,
            quesAns6check4: false,
            quesAns6check5: false,
            quesAns6check6: false,
            quesAns6check7: false,
            quesAns6check8: false,
            quesAns6check9: false,
            quesAns6check10: false,
            quesAns6check11: false,
            quesAns6check12: false,
            quesAns6check13: false,
            quesAns6check14: false,
            quesAns6check15: false,
            quesAns6check16: false,
            quesAns6check17: false,
            quesAns6check18: false,
            quesAns7: '',
            quesAns8: '',
        })

        setJob({
            quesAns1: '',
            quesAns2chk1: false,
            quesAns2chk2: false,
            quesAns2chk3: false,
            quesAns2chk4: false,
            quesAns2chk5: false,
            quesAns2chk6: false,
            quesAns2chk7: false,
            quesAns2chk8: false,
            quesAns3: false,
            quesAns4chk1: false,
            quesAns4chk2: false,
            quesAns4chk3: false,
            quesAns4chk4: false,
            quesAns4chk5: false,
            quesAns4chk6: false,
            quesAns5chk1: false,
            quesAns5chk2: false,
            quesAns5chk3: false,
            quesAns5chk4: false,
            quesAns5chk5: false,
            quesAns5chk6: false,
            quesAns6: '',
            quesAns7: '',
            quesAns8chk1: false,
            quesAns8chk2: false,
            quesAns8chk3: false,
            quesAns8chk4: false,
            quesAns8chk5: false,
            quesAns8chk6: false,
            quesAns8chk7: false,
            quesAns8chk8: false,
            quesAns9row1: '',
            quesAns9row2: '',
            quesAns9row3: '',
            quesAns9row4: '',
            quesAns10: '',
            quesAns11: false,
            quesAns12chk1: false,
            quesAns12chk2: false,
            quesAns12chk3: false,
            quesAns12chk4: false,
            quesAns12chk5: false,
            quesAns12chk6: false,
            quesAns12chk7: false,
            quesAns13: ''
        })
        alert("Added Success")
        console.log("Information has been added")
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
        <div style={{fontFamily: "Abhaya Libre, serif", 
                     letterSpacing: "10px"}}>
            <h1>Graduate Tracer Survey</h1>
        </div>
        <div className="flexRow survCat">
            <label className='outerCat' htmlFor='persInfo' 
                style={{backgroundColor: `${survSelCat[0] === true ? '#bf9745' : ''}`}}>
                    <div className='innerCat'>
                        Personal Information
                    </div>
                <input hidden
                type='radio' 
                onClick={(e) => handleChange(0)} 
                id= 'persInfo'
                name="Categ" 
                checked/>
            </label>
            <label  className='outerCat' htmlFor='persEduc' 
                style={{backgroundColor: `${survSelCat[1] === true ? '#bf9745' : ''}`}}>
                    <div className='innerCat'>
                        Education
                    </div>
                <input hidden 
                onClick={(e) => handleChange(1)} 
                type='radio' 
                id= 'persEduc' 
                name="Categ"  />
            </label>
            <label  className='outerCat' htmlFor='persEmploy' 
                style={{backgroundColor: `${survSelCat[2] === true ? '#bf9745' : ''}`}}>
               <div className='innerCat'>
                    Employment
               </div>
                <input hidden 
                type='radio'
                id='persEmploy' 
                name="Categ" 
                onClick={(e) => handleChange(2)}  />
            </label>
            <label  className='outerCat' htmlFor='persJob' 
                style={{backgroundColor: `${survSelCat[3] === true ? '#bf9745' : ''}`}}>
                <div className='innerCat'>
                    Job
                </div>  
                <input hidden 
                type='radio' 
                id='persJob' 
                name="Categ" 
                onClick={(e) => handleChange(3)}  />
            </label>
        </div>
        <div className='questionBord' >
            <div className='flexColumn innerQuestBord'>
                <form onSubmit={submitForm} id='survForm' action="" className='quewstionForm'>
                    <div style= {{display: `${survSelCat[0] ? 'flex' : 'none'}`}} >
                        <PersonalInfo cat = {survSelCat[0]} arrPers={personalArr} changeVal = {setPersonalArr} />
                    </div>
                    <div style= {{display: `${survSelCat[1] ? 'flex' : 'none'}`}} >
                        <Education cat = {survSelCat[1]}  arrEduc ={educAns} changeVal = {setEducAns}/>
                    </div>
                    <div style= {{display: `${survSelCat[2] ? 'flex' : 'none'}`}} >
                        <Employment cat = {survSelCat[2]} arrEmp={employee} changeVal={setEmploy} />
                    </div>
                    <div style= {{display: `${survSelCat[3] ? 'flex' : 'none'}`}} >
                        {<Job cat = {survSelCat[3]} arrJob={job} changeVal={setJob} />}
                    </div>
                </form>
                <div className='flexRow' style={{width: '100%'}}>
                    <div style={{width: '95%', display: 'flex', justifyContent: 'start'}}>
                        {survSelCat[0] === false ?
                            <div className='nextbtnBord' >
                                <div onClick= {(e) => handleBackClick('back')} className='nextButtonSurv' >BACK</div>
                            </div> : ''
                        }
                    </div>
                    <div style={{width: '95%', display: 'flex', justifyContent: 'end'}} >
                        {survSelCat[3] === false ?
                            <div className='nextbtnBord' >
                                <div onClick= {(e) => handleBackClick('next')} className='nextButtonSurv' >NEXT</div>
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