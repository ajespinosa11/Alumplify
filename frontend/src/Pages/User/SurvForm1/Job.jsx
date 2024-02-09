import React, { useState } from 'react'

const Job = (cat4) => {
    const [job1Ans, setJob1Anse] = useState('')
    const [job2Ans, setJob2Anse] = useState('')
    const [job11Ans, setJob11Anse] = useState('')

    const job2Yes = () => {
        return(
        <div className='questInpBord'>
            <div style={{width: '95%', 
                padding: '10px 0',
                fontSize: '15px'}}>
                <div>WHAT ARE YOUR REASON(S) FOR STAYING ON THE JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '95%'}}>
                        <div className='selChckBArrange'>
                            <input type="checkbox"  id="job2_A" />
                            <label htmlFor="job2_A">Salaries and Benefits</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox"  id="job2_B" />
                            <label htmlFor="job2_B">Career Challenge</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox"  id="job2_C" />
                            <label htmlFor="job2_C">Related to special skills</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" id="job2_D" />
                            <label htmlFor="job2_D">Related to course or program of study</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" id="job2_E" />
                            <label htmlFor="job2_E">Proximity to residence</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" id="job2_F" />
                            <label htmlFor="job2_F">Peer Influence</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" id="job2_G" />
                            <label htmlFor="job2_G">Family Influence</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" id="job2_H" />
                            <label htmlFor="job2_H">Other</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    const job4Yes = () => {
        return(
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT WERE YOUR REASONS FOR ACCEPTING THE JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job4_A" />
                                <label htmlFor="job4_A">Salaries and Benefits</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job4_B" />
                                <label htmlFor="job4_B">Career Challenge</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job4_C" />
                                <label htmlFor="job4_C">Related to special skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job4_D" />
                                <label htmlFor="job4_D">Related to course or program of study</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job4_E" />
                                <label htmlFor="job4_E">Proximity to residence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job4_F" />
                                <label htmlFor="job4_F">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const job12Yes = () => {
        return(
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>IF YES, WHAT COMPETENCIES LEARNED IN COLLEGE DID YOU FIND VERY USEFUL IN YOUR FIRST JOB? (You may check more than one answer)</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_A" />
                                <label htmlFor="job12_A">Communication Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_B"/>
                                <label htmlFor="job12_B">Human Relation Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_C"/>
                                <label htmlFor="job12_C">Entrepreneurial Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_D" />
                                <label htmlFor="job12_D">Information Technology Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_E" />
                                <label htmlFor="job12_E">Problem-solving skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_F" />
                                <label htmlFor="job12_F">Critical Thinking Skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job12_G" />
                                <label htmlFor="job12_G">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div
        style= {{
            display: `${cat4.cat4 ? 'flex' : 'none'}`
        }}  
        className='flexColumn questEduc'> 
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
                                <input onChange={(e) => setJob1Anse(e.target.value)} value='job1Yes' type="radio" name="job1" id="job1_A" />
                                <label htmlFor="job1_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={(e) => setJob1Anse(e.target.value)} value='job1No' type="radio" name="job1" id="job1_B" />
                                <label htmlFor="job1_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {job1Ans === 'job1Yes' ? job2Yes() : ''}
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>IS YOUR FIRST JOB RELATED TO THE COURSE YOU TOOK UP IN COLLEGE?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={(e) => setJob2Anse(e.target.value)} value = 'job3Yes' type="radio" name="job3" id="job3_A" />
                                <label htmlFor="job3_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={(e) => setJob2Anse(e.target.value)} value = 'job3No' type="radio" name="job3" id="job3_B" />
                                <label htmlFor="job3_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {job2Ans === 'job3Yes' ? job4Yes() : ''}
            
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div>WHAT WERE YOUR REASONS FOR CHANGING JOB? YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job5_A" />
                                <label htmlFor="job5_A">Salaries and Benefits</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job5_B" />
                                <label htmlFor="job5_B">Career Challenge</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job5_C" />
                                <label htmlFor="job5_C">Related to special skills</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job5_D" />
                                <label htmlFor="job5_D">Related to course or program of study</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job5_E" />
                                <label htmlFor="job5_E">Proximity to residence</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job5_F" />
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
                                <input type="checkbox"  id="job6_A" />
                                <label htmlFor="job6_A">Less than a month</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job6_B" />
                                <label htmlFor="job6_B">1 to 6 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job6_C" />
                                <label htmlFor="job6_C">7 to 11 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job6_D" />
                                <label htmlFor="job6_D">1 year to less than 2 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job6_E" />
                                <label htmlFor="job6_E">2 years to less than 3 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job6_F" />
                                <label htmlFor="job6_F">3 years to less than 4 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job6_G" />
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
                                <input type="checkbox"  id="job7_A" />
                                <label htmlFor="job7_A">Less than a month</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job7_B" />
                                <label htmlFor="job7_B">1 to 6 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job7_C" />
                                <label htmlFor="job7_C">7 to 11 months</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job7_D" />
                                <label htmlFor="job7_D">1 year to less than 2 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job7_E" />
                                <label htmlFor="job7_E">2 years to less than 3 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job7_F" />
                                <label htmlFor="job7_F">3 years to less than 4 years</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job7_G" />
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
                                <input type="checkbox"  id="job8_A" />
                                <label htmlFor="job8_A">Response to an advertisement</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job8_B" />
                                <label htmlFor="job8_B">As walk-in applicant</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job8_C" />
                                <label htmlFor="job8_C">Recommended by someone</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_D" />
                                <label htmlFor="job8_D">Information from friends</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_E" />
                                <label htmlFor="job8_E">Arranged by school's job placement officer</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_F" />
                                <label htmlFor="job8_F">Family Business</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_G" />
                                <label htmlFor="job8_G">Job fair or public employment service office (PESO)</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job8_H" />
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
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_A'/></td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_A'/></td>
                                </tr>
                                <tr>
                                    <td>Professional, technical, or supervisor</td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_B'/></td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_B'/></td>
                                </tr>
                                <tr>
                                    <td>Managerial or Executive</td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_C'/></td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_C'/></td>
                                </tr>
                                <tr>
                                    <td>Self-employed</td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_D'/></td>
                                    <td style={{textAlign: 'center'}}><input type="radio" name='jobAns9_D'/></td>
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
                                <input type="checkbox"  id="job10_A" />
                                <label htmlFor="job10_A">Below 5,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job10_B" />
                                <label htmlFor="job10_B">5,000 to less than 10,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox"  id="job10_C" />
                                <label htmlFor="job10_C">10,000 to less than 15,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job10_D" />
                                <label htmlFor="job10_D">15,000 to less than 20,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job10_E" />
                                <label htmlFor="job10_E">20,000 to less than 25,000</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" id="job10_F" />
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
                                <input onChange={(e) => setJob11Anse(e.target.value)} 
                                value = 'job11Yes' type="radio"  id="job11_A" name='jobAns11'/>
                                <label htmlFor="job11_A">Yes</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={(e) => setJob11Anse(e.target.value)} 
                                value = 'job11No' type="radio"  id="job11_B" name='jobAns11'/>
                                <label htmlFor="job11_B">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {job11Ans === 'job11Yes' ? job12Yes() : ''}
            
            <div className='questInpBord heightInp'>
                <div className='textAreaSurv' style={{position: 'relative'}}>
                    <div>
                        <input type='text' 
                        placeholder='LIST DOWN SUGGESTIONS TO FURTHER IMPROVE YOUR COURSE CURRICULUM.'></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Job