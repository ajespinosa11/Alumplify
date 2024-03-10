import React, { useEffect, useRef, useState } from 'react'

const Job = ({cat, arrJob, changeVal}) => {
    const [job1Ans, setJob1Anse] = useState('')
    const [job2Ans, setJob2Anse] = useState('')
    const [job11Ans, setJob11Anse] = useState('')
    
    const textRef = useRef([])


    const resizeTextArea = () => {
        if(textRef.current[0] !== undefined){
            textRef.current[0].style.height = "auto";
            textRef.current[0].style.height = textRef.current[0].scrollHeight + "px";
        }
      }

    useEffect(resizeTextArea,[arrJob,cat])

    const getValue = (e) => {
        changeVal((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const isChecked = (e) => {
        changeVal((prev) => ({...prev, [e.target.name]: e.target.checked}))
    }

  return (
    <div className='flexColumn questEduc'> 
        <div className='survHeader'>
            <h1>JOB</h1>
        </div>
        <div className='flexColumn inputAns' style={{color: 'black'}}>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>IS THIS YOUR FIRST JOB AFTER COLLEGE</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                value='YES' type="radio" 
                                checked={arrJob.quesAns1 === 'YES'}
                                name="quesAns1" id="job1_A" 
                                />
                                <label htmlFor="job1_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                value='NO' type="radio" 
                                checked={arrJob.quesAns1 === 'NO'}
                                name="quesAns1" id="job1_B" />
                                <label htmlFor="job1_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: `${arrJob.quesAns1 === 'YES' ? ''  : 'none'}`}} 
                className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT ARE YOUR REASON(S) FOR STAYING ON THE JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} 
                                value={arrJob.quesAns2chk1}
                                checked={arrJob.quesAns2chk1}
                                name='quesAns2chk1'
                                type="checkbox"  
                                id="job2_A" />
                                <label htmlFor="job2_A">Salaries and Benefits</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk2}
                                checked={arrJob.quesAns2chk2}
                                name='quesAns2chk2'
                                type="checkbox"  id="job2_B" />
                                <label htmlFor="job2_B">Career Challenge</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk3}
                                checked={arrJob.quesAns2chk3}
                                name='quesAns2chk3'
                                type="checkbox"  id="job2_C" />
                                <label htmlFor="job2_C">Related to special skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk4}
                                checked={arrJob.quesAns2chk4}
                                name='quesAns2chk4'
                                type="checkbox" id="job2_D" />
                                <label htmlFor="job2_D">Related to course or program of study</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk5}
                                checked={arrJob.quesAns2chk5}
                                name='quesAns2chk5'
                                type="checkbox" id="job2_E" />
                                <label htmlFor="job2_E">Proximity to residence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk6}
                                checked={arrJob.quesAns2chk6}
                                name='quesAns2chk6'
                                type="checkbox" id="job2_F" />
                                <label htmlFor="job2_F">Peer Influence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk7}
                                checked={arrJob.quesAns2chk7}
                                name='quesAns2chk7'
                                type="checkbox" id="job2_G" />
                                <label htmlFor="job2_G">Family Influence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input 
                                onChange={isChecked} 
                                value={arrJob.quesAns2chk8}
                                checked={arrJob.quesAns2chk8}
                                name='quesAns2chk8'
                                type="checkbox" id="job2_H" />
                                <label htmlFor="job2_H">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>IS YOUR FIRST JOB RELATED TO THE COURSE YOU TOOK UP IN COLLEGE?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                value='YES'
                                type="radio"
                                checked={arrJob.quesAns3 === 'YES'} 
                                name="quesAns3" id="job3_A" />
                                <label htmlFor="job3_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                value='NO'
                                name="quesAns3" 
                                checked={arrJob.quesAns3 === 'NO'} 
                                type="radio"  id="job3_B" />
                                <label htmlFor="job3_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: `${arrJob.quesAns3 === 'YES' ? ''  : 'none'}`}} 
                className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT WERE YOUR REASONS FOR ACCEPTING THE JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk1}
                                checked={arrJob.quesAns4chk1} 
                                name="quesAns4chk1"
                                id="job4_A" />
                                <label htmlFor="job4_A">Salaries and Benefits</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk2}
                                checked={arrJob.quesAns4chk2} 
                                name="quesAns4chk2"
                                id="job4_B" />
                                <label htmlFor="job4_B">Career Challenge</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk3}
                                checked={arrJob.quesAns4chk3} 
                                name="quesAns4chk3"
                                id="job4_C" />
                                <label htmlFor="job4_C">Related to special skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk4}
                                checked={arrJob.quesAns4chk4} 
                                name="quesAns4chk4"
                                id="job4_D" />
                                <label htmlFor="job4_D">Related to course or program of study</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk5}
                                checked={arrJob.quesAns4chk5} 
                                name="quesAns4chk5"
                                id="job4_E" />
                                <label htmlFor="job4_E">Proximity to residence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns4chk6}
                                checked={arrJob.quesAns4chk6} 
                                name="quesAns4chk6"
                                id="job4_F" />
                                <label htmlFor="job4_F">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT WERE YOUR REASONS FOR CHANGING JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk1}
                                checked={arrJob.quesAns5chk1} 
                                name="quesAns5chk1"
                                id="job5_A" />
                                <label htmlFor="job5_A">Salaries and Benefits</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk2}
                                checked={arrJob.quesAns5chk2} 
                                name="quesAns5chk2"
                                id="job5_B" />
                                <label htmlFor="job5_B">Career Challenge</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk3}
                                checked={arrJob.quesAns5chk3} 
                                name="quesAns5chk3"
                                id="job5_C" />
                                <label htmlFor="job5_C">Related to special skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk4}
                                checked={arrJob.quesAns5chk4} 
                                name="quesAns5chk4"
                                id="job5_D" />
                                <label htmlFor="job5_D">Related to course or program of study</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk5}
                                checked={arrJob.quesAns5chk5} 
                                name="quesAns5chk5"
                                id="job5_E" />
                                <label htmlFor="job5_E">Proximity to residence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" 
                                onChange={isChecked} 
                                value={arrJob.quesAns5chk6}
                                checked={arrJob.quesAns5chk6} 
                                name="quesAns5chk6"
                                id="job5_F" />
                                <label htmlFor="job5_F">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>HOW LONG DID YOU STAY IN YOUR FIRST JOB?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="radio"  
                                onChange={getValue}
                                name='quesAns6'
                                checked={arrJob.quesAns6 === 'Less than a month'} 
                                value='Less than a month'
                                id="job6_A" />
                                <label htmlFor="job6_A">Less than a month</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio"  
                                onChange={getValue}
                                value='1 to 6 months'
                                checked={arrJob.quesAns6 === '1 to 6 months'} 
                                name='quesAns6'
                                id="job6_B" />
                                <label htmlFor="job6_B">1 to 6 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue} 
                                value='7 to 11 months'
                                checked={arrJob.quesAns6 === '7 to 11 months'}
                                name='quesAns6'
                                id="job6_C" />
                                <label htmlFor="job6_C">7 to 11 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                value='1 year to less than 2 years'
                                checked={arrJob.quesAns6 === '1 year to less than 2 years'}
                                name='quesAns6'
                                id="job6_D" />
                                <label htmlFor="job6_D">1 year to less than 2 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                value='2 years to less than 3 years'
                                checked={arrJob.quesAns6 === '2 years to less than 3 years'}
                                name='quesAns6'
                                id="job6_E" />
                                <label htmlFor="job6_E">2 years to less than 3 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                value='3 years to less than 4 years'
                                checked={arrJob.quesAns6 === '3 years to less than 4 years'}
                                name='quesAns6'
                                id="job6_F" />
                                <label htmlFor="job6_F">3 years to less than 4 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                value='Other'
                                checked={arrJob.quesAns6 === 'Other'}
                                name='quesAns6'
                                id="job6_G" />
                                <label htmlFor="job6_G">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>HOW LONG DID IT TAKE YOU TO LAND YOUR FIRST JOB?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                checked={arrJob.quesAns7 === 'Less than a month'}
                                value='Less than a month'
                                name='quesAns7'
                                id="job7_A" />
                                <label htmlFor="job7_A">Less than a month</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio"
                                onChange={getValue}
                                checked={arrJob.quesAns7 === '1 to 6 months'}
                                value='1 to 6 months'  
                                name='quesAns7'
                                id="job7_B" />
                                <label htmlFor="job7_B">1 to 6 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio"  
                                onChange={getValue}
                                checked={arrJob.quesAns7 === '7 to 11 months'}
                                value='7 to 11 months' 
                                name='quesAns7'
                                id="job7_C" />
                                <label htmlFor="job7_C">7 to 11 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                checked={arrJob.quesAns7 === '1 year to less than 2 years'}
                                value='1 year to less than 2 years' 
                                name='quesAns7'
                                id="job7_D" />
                                <label htmlFor="job7_D">1 year to less than 2 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                checked={arrJob.quesAns7 === '2 years to less than 3 years'}
                                value='2 years to less than 3 years' 
                                name='quesAns7'
                                id="job7_E" />
                                <label htmlFor="job7_E">2 years to less than 3 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                checked={arrJob.quesAns7 === '3 years to less than 4 years'}
                                value='3 years to less than 4 years' 
                                name='quesAns7'
                                id="job7_F" />
                                <label htmlFor="job7_F">3 years to less than 4 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" 
                                onChange={getValue}
                                checked={arrJob.quesAns7 === 'Other'}
                                value='Other' 
                                name='quesAns7'
                                id="job7_G" />
                                <label htmlFor="job7_G">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>HOW DID YOU FIND YOUR FIRST JOB?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job8_A" 
                                onChange={isChecked}
                                name="quesAns8chk1" 
                                value={arrJob.quesAns8chk1} 
                                checked={arrJob.quesAns8chk1}
                                />
                                <label htmlFor="job8_A">Response to an advertisement</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job8_B" 
                                onChange={isChecked}
                                name="quesAns8chk2" 
                                value={arrJob.quesAns8chk2} 
                                checked={arrJob.quesAns8chk2}
                                />
                                <label htmlFor="job8_B">As walk-in applicant</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job8_C" 
                                 onChange={isChecked}
                                 name="quesAns8chk3" 
                                 value={arrJob.quesAns8chk3} 
                                 checked={arrJob.quesAns8chk3}
                                 />
                                <label htmlFor="job8_C">Recommended by someone</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_D" 
                                 onChange={isChecked}
                                 name="quesAns8chk4" 
                                 value={arrJob.quesAns8chk4} 
                                 checked={arrJob.quesAns8chk4}
                                 />
                                <label htmlFor="job8_D">Information from friends</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_E" 
                                 onChange={isChecked}
                                 name="quesAns8chk5" 
                                 value={arrJob.quesAns8chk5} 
                                 checked={arrJob.quesAns8chk5}
                                />
                                <label htmlFor="job8_E">Arranged by school's job placement officer</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_F" 
                                 onChange={isChecked}
                                 name="quesAns8chk6" 
                                 value={arrJob.quesAns8chk6} 
                                 checked={arrJob.quesAns8chk6}
                                />
                                <label htmlFor="job8_F">Family Business</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_G" 
                                 onChange={isChecked}
                                 name="quesAns8chk7" 
                                 value={arrJob.quesAns8chk7} 
                                 checked={arrJob.quesAns8chk7}
                                />
                                <label htmlFor="job8_G">Job fair or public employment service office (PESO)</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_H" 
                                onChange={isChecked}
                                name="quesAns8chk8" 
                                value={arrJob.quesAns8chk8} 
                                checked={arrJob.quesAns8chk8}
                                />
                                <label htmlFor="job8_H">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%'}}>
                    <div style={{fontSize: '20px'}}>
                        JOB LEVEL POSITION                                
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>                                    
                        <table className='Educ4Checkbox'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>FIRST JOB</th>
                                    <th>CURRENT OR PRESENT JOB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rank or Clerical</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                        name='quesAns9row1'
                                        onChange={getValue}
                                        checked={arrJob.quesAns9row1 === 'FIRST JOB'}
                                        value='FIRST JOB' 
                                        />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                        name='quesAns9row1'
                                        onChange={getValue}
                                        checked={arrJob.quesAns9row1 === 'CURRENT OR PRESENT JOB'}
                                        value='CURRENT OR PRESENT JOB' 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Professional, technical, or supervisor</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                            name='quesAns9row2'
                                            onChange={getValue}
                                            checked={arrJob.quesAns9row2 === 'FIRST JOB'}
                                            value='FIRST JOB' 
                                            />
                                        </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                            name='quesAns9row2'
                                            onChange={getValue}
                                            checked={arrJob.quesAns9row2 === 'CURRENT OR PRESENT JOB'}
                                            value='CURRENT OR PRESENT JOB' 
                                        />
                                        </td>
                                </tr>
                                <tr>
                                    <td>Managerial or Executive</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio"
                                            name='quesAns9row3'
                                            onChange={getValue}
                                            checked={arrJob.quesAns9row3 === 'FIRST JOB'}
                                            value='FIRST JOB'/>
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio"
                                        name='quesAns9row3'
                                        onChange={getValue}
                                        checked={arrJob.quesAns9row3 === 'CURRENT OR PRESENT JOB'}
                                        value='CURRENT OR PRESENT JOB'
                                        />    
                                    </td>
                                </tr>
                                <tr>
                                    <td>Self-employed</td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                        name='quesAns9row4'
                                        onChange={getValue}
                                        checked={arrJob.quesAns9row4 === 'FIRST JOB'}
                                        value='FIRST JOB'
                                        />
                                    </td>
                                    <td style={{textAlign: 'center'}}>
                                        <input type="radio" 
                                        name='quesAns9row4'
                                        onChange={getValue}
                                        checked={arrJob.quesAns9row4 === 'CURRENT OR PRESENT JOB'}
                                        value='CURRENT OR PRESENT JOB'
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT IS YOUR INITIAL GROSS MONTHLY EARNING IN YOUR FIRST JOB AFTER COLLEGE?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="radio"  id="job10_A" 
                                name='quesAns10'
                                onChange={getValue}
                                checked={arrJob.quesAns10 === 'Below 5,000'}
                                value='Below 5,000'
                                />
                                <label htmlFor="job10_A">Below 5,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio"  id="job10_B" 
                                name='quesAns10'
                                onChange={getValue}
                                checked={arrJob.quesAns10 === '5,000 to less than 10,000'}
                                value='5,000 to less than 10,000'
                                />
                                <label htmlFor="job10_B">5,000 to less than 10,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio"  id="job10_C" 
                                name='quesAns10'
                                onChange={getValue}
                                checked={arrJob.quesAns10 === '10,000 to less than 15,000'}
                                value='10,000 to less than 15,000'
                                />
                                <label htmlFor="job10_C">10,000 to less than 15,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" id="job10_D" 
                                 name='quesAns10'
                                 onChange={getValue}
                                 checked={arrJob.quesAns10 === '15,000 to less than 20,000'}
                                 value='15,000 to less than 20,000'
                                />
                                <label htmlFor="job10_D">15,000 to less than 20,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" id="job10_E" 
                                name='quesAns10'
                                onChange={getValue}
                                checked={arrJob.quesAns10 === '20,000 to less than 25,000'}
                                value='20,000 to less than 25,000'
                                />
                                <label htmlFor="job10_E">20,000 to less than 25,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="radio" id="job10_F" 
                                name='quesAns10'
                                onChange={getValue}
                                checked={arrJob.quesAns10 === '25,000 and above'}
                                value='25,000 and above'
                                />
                                <label htmlFor="job10_F">25,000 and above</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WAS THE CURRICULUM YOU HAD IN COLLEGE RELEVANT TO YOUR FIRST JOB?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                value='YES' type="radio" 
                                checked={arrJob.quesAns11 === 'YES'}
                                name='quesAns11'
                                id="job11_A"/>
                                <label htmlFor="job11_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={getValue} 
                                checked={arrJob.quesAns11 === 'NO'}
                                value = 'NO' type="radio"  name='quesAns11' id="job11_B" />
                                <label htmlFor="job11_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style={{display: `${arrJob.quesAns11 === 'YES' ? ''  : 'none'}`}}  
                className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>IF YES, WHAT COMPETENCIES LEARNED IN COLLEGE DID YOU FIND VERY USEFUL IN YOUR FIRST JOB? (You may check more than one answer)</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_A" 
                                onChange={isChecked}
                                name="quesAns12chk1" 
                                value={arrJob.quesAns12chk1} 
                                checked={arrJob.quesAns12chk1}
                                />
                                <label htmlFor="job12_A">Communication Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_B"
                                onChange={isChecked}
                                name="quesAns12chk2" 
                                value={arrJob.quesAns12chk2} 
                                checked={arrJob.quesAns12chk2}
                                />
                                <label htmlFor="job12_B">Human Relation Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_C"
                                onChange={isChecked}
                                name="quesAns12chk3" 
                                value={arrJob.quesAns12chk3} 
                                checked={arrJob.quesAns12chk3}
                                />
                                <label htmlFor="job12_C">Entrepreneurial Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_D" 
                                onChange={isChecked}
                                name="quesAns12chk4" 
                                value={arrJob.quesAns12chk4} 
                                checked={arrJob.quesAns12chk4}
                                />
                                <label htmlFor="job12_D">Information Technology Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_E" 
                                onChange={isChecked}
                                name="quesAns12chk5" 
                                value={arrJob.quesAns12chk5} 
                                checked={arrJob.quesAns12chk5}
                                />
                                <label htmlFor="job12_E">Problem-solving skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_F" 
                                onChange={isChecked}
                                name="quesAns12chk6" 
                                value={arrJob.quesAns12chk6} 
                                checked={arrJob.quesAns12chk6}
                                />
                                <label htmlFor="job12_F">Critical Thinking Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_G" 
                                onChange={isChecked}
                                name="quesAns12chk7" 
                                value={arrJob.quesAns12chk7} 
                                checked={arrJob.quesAns12chk7}
                                />
                                <label htmlFor="job12_G">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='questInpBord'>
                <textarea 
                placeholder='LIST DOWN SUGGESTIONS TO FURTHER IMPROVE YOUR COURSE CURRICULUM.'
                ref={(element) => {textRef.current[0] = element}} 
                rows={1}
                onChange={getValue}
                name='quesAns13'
                value={arrJob.quesAns13}/>
            </div>
        </div>
    </div>
  )
}

export default Job