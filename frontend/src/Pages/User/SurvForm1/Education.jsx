import React, { useEffect, useRef } from 'react'

const Education = ({cat, arrEduc ,changeVal}) => {
 
    const textRef = useRef([])
    
    const resizeTextArea = () => {
        textRef.current[0].style.height = "auto";
        textRef.current[0].style.height = textRef.current[0].scrollHeight + "px";
        textRef.current[1].style.height = "auto";
        textRef.current[1].style.height = textRef.current[1].scrollHeight + "px";
      }
    

    useEffect(resizeTextArea,[arrEduc,cat])

    const getValue = (e) => {
        changeVal((prev) => ({...prev, [e.target.name]: e.target.value}))
      }
    
    const isChecked = (e) => {
        changeVal((prev) => ({...prev, [e.target.name]: e.target.checked}))
    }

  return (
    <div className='flexColumn questEduc'> 
        <div className='survHeader'>
            <h1>EDUCATION</h1>
        </div>
        <div className='flexColumn inputAns' style={{color: 'black'}}>
            <div className='questInpBord' style={{width: '70%'}}>
                <select onChange={getValue}
                value={arrEduc.quesAns1} defaultValue={''}
                name="quesAns1" id="BDegree" className='dropBord' style={{fontSize: '15px'}}>
                    <option value =''>EDUCATIONAL ATTAINMENT (BACCALAUREATE DEGREE ONLY)</option>
                    <option value="BSCS">B.S. in Computer Science</option>
                    <option value="BSIT">B.S. in Information Technology</option>
                    <option value="BSIS">B.S. in Information System</option>
                </select>
            </div>
            <div className='questInpBord' style={{width: '70%'}}>
                <select value={arrEduc.quesAns2} 
                onChange={getValue} defaultValue={''} 
                name="quesAns2" id="YGrad" className='dropBord' 
                style={{fontSize: '15px'}}>
                    <option value='' >YEAR GRADUATED</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                </select>
            </div>
            <div className='questInpBord'>
                <input onChange={getValue} value={arrEduc.quesAns3} 
                type="text"  name="quesAns3"
                placeholder='PROFESSIONAL EXAMINATION/S or CERTIFICATION PASSED (include date taken and rating).'/>
            </div>
            <div className='questInpBord' style={{padding: '10px'}}>
                <div style={{width: '95%'}}>
                    <div style={{fontSize: '20px'}}>
                        REASON(S) FOR TAKING THE COURSE(S) OR PURSUING DEGREE(S). YOU MAY CHECK MORE THAN ONE ANSWER.
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>                                    
                        <table className='Educ4Checkbox'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Undergraduate AB/BS</th>
                                    <th>Graduate MS/MA/PhD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>High grades in the course of subject</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r1Chk1}
                                        checked={arrEduc.quesAns4r1Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r1Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r1Chk2} 
                                        checked={arrEduc.quesAns4r1Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r1Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Good grades in high school</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r2Chk1}
                                        checked={arrEduc.quesAns4r2Chk1}  
                                        onChange={isChecked}
                                        name="quesAns4r2Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r2Chk2}
                                        checked={arrEduc.quesAns4r2Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r2Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Influence of Parents or relatives</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r3Chk1} 
                                        checked={arrEduc.quesAns4r3Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r3Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r3Chk2} 
                                        checked={arrEduc.quesAns4r3Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r3Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Peer influence</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r4Chk1} 
                                        checked={arrEduc.quesAns4r4Chk1}
                                        onChange={isChecked}
                                        name="quesAns4r4Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r4Chk2} 
                                        checked={arrEduc.quesAns4r4Chk2}
                                        onChange={isChecked}
                                        name="quesAns4r4Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Inspired by a role model</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r5Chk1} 
                                        checked={arrEduc.quesAns4r5Chk1}
                                        onChange={isChecked}
                                        name="quesAns4r5Chk1"
                                        type="checkbox" />
                                        </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r5Chk2}
                                        checked={arrEduc.quesAns4r5Chk2}
                                        onChange={isChecked}
                                        name="quesAns4r5Chk2" 
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Strong passion for the profession</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r6Chk1} 
                                        checked={arrEduc.quesAns4r6Chk1}
                                        onChange={isChecked}
                                        name="quesAns4r6Chk1" 
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r6Chk2}
                                        checked={arrEduc.quesAns4r6Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r6Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prospect for immediate employment</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r7Chk1}
                                        checked={arrEduc.quesAns4r7Chk1}  
                                        onChange={isChecked}
                                        name="quesAns4r7Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r7Chk2}
                                        checked={arrEduc.quesAns4r7Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r7Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Status or prestige of the profession</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r8Chk1}
                                        checked={arrEduc.quesAns4r8Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r8Chk1" 
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r8Chk2}
                                        checked={arrEduc.quesAns4r8Chk2}  
                                        onChange={isChecked}
                                        name="quesAns4r8Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Availability of course offering in chosen institution</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r9Chk1}
                                        checked={arrEduc.quesAns4r9Chk1}  
                                        onChange={isChecked}
                                        name="quesAns4r9Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r9Chk2}
                                        checked={arrEduc.quesAns4r9Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r9Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prospect of career advancement</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r10Chk1}
                                        checked={arrEduc.quesAns4r10Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r10Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r10Chk2}
                                        checked={arrEduc.quesAns4r10Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r10Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Affordable for the family</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r11Chk1}
                                        checked={arrEduc.quesAns4r11Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r11Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r11Chk2} 
                                        checked={arrEduc.quesAns4r11Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r11Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prospect of attractive compensation</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r12Chk1}
                                        checked={arrEduc.quesAns4r12Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r12Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r12Chk2}
                                        checked={arrEduc.quesAns4r12Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r12Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Opportunity for employment abroad</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r13Chk1}
                                        checked={arrEduc.quesAns4r13Chk1} 
                                        onChange={isChecked}
                                        name="quesAns4r13Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r13Chk2}
                                        checked={arrEduc.quesAns4r13Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r13Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>No particular choice or no better idea</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r14Chk1}
                                        checked={arrEduc.quesAns4r14Chk1}
                                        onChange={isChecked}
                                        name="quesAns4r14Chk1"
                                        type="checkbox" />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input value={arrEduc.quesAns4r14Chk2}
                                        checked={arrEduc.quesAns4r14Chk2} 
                                        onChange={isChecked}
                                        name="quesAns4r14Chk2"
                                        type="checkbox" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <textarea name="quesAns5" id="" rows={1} value={arrEduc.quesAns5}
                ref={(element) => {textRef.current[0] = element}} 
                onChange={getValue}
                placeholder='DID YOU ATTEND TRAINING(S) AFTER COLLEGE? (If YES, input the date and title of the most recent training/seminar you attended. If NO, leave it blank.)'></textarea>
            </div>
            <div className='questInpBord'>
                <textarea name="quesAns6" id="" 
                rows ={1} value={arrEduc.quesAns6}
                ref={(element) => {textRef.current[1] = element}} 
                onChange={getValue}
                placeholder='DID YOU CONTINUE YOUR EDUCATION AFTER COLLEGE? (If YES, input the program name you enrolled in. If NO, leave it blank.)'></textarea>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div style={{fontSize: '20px'}}>What made you pursue advance studies?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className='flexColumn' style={{width: '95%', gap: '5 px'}}>
                            <div className='selChckBArrange'>
                                <input value={arrEduc.quesAns7Chk1} 
                                checked={arrEduc.quesAns7Chk1} onChange={isChecked}
                                type="checkbox" name="quesAns7Chk1" id="promotion" />
                                <label htmlFor="promotion">For Promotion</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input value={arrEduc.quesAns7Chk2} 
                                checked={arrEduc.quesAns7Chk2} onChange={isChecked}
                                type="checkbox" name="quesAns7Chk2" id="ProfDev" />
                                <label htmlFor="ProfDev">For Profesional Development</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input value={arrEduc.quesAns7Chk3} 
                                checked={arrEduc.quesAns7Chk3} onChange={isChecked}
                                type="checkbox" name="quesAns7Chk3" id="OtherAdvStud" />
                                <label htmlFor="OtherAdvStud">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education