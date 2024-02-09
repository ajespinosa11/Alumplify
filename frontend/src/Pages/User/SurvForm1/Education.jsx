import React from 'react'

const Education = (cat2) => {
  return (
    <div
        style= {{display: `${cat2.cat2 ? 'flex' : 'none'}`}}  
        className='flexColumn questEduc'> 
        <div className='survHeader'>
            <h1>EDUCATION</h1>
        </div>
        <div className='flexColumn inputAns' style={{color: 'black'}}>
            <div className='questInpBord heightInp' style={{width: '70%'}}>
                <select name="BDegree" id="BDegree" className='dropBord' style={{fontSize: '15px'}}>
                    <option value =''>EDUCATIONAL ATTAINMENT (BACCALAUREATE DEGREE ONLY)</option>
                    <option value="BSCS">B.S. in Computer Science</option>
                    <option value="BSIT">B.S. in Information Technology</option>
                    <option value="BSIS">B.S. in Information System</option>
                </select>
            </div>
            <div className='questInpBord heightInp' style={{width: '70%'}}>
                <select name="YGrad" id="YGrad" className='dropBord' style={{fontSize: '15px'}}>
                    <option>YEAR GRADUATED</option>
                    <option value="Y2021">2021</option>
                    <option value="Y2022">2022</option>
                    <option value="Y2023">2023</option>
                </select>
            </div>
            <div className='questInpBord heightInp'>
                <input type="text"
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
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Good grades in high school</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Influence of Parents or relatives</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Peer influence</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Inspired by a role model</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Strong passion for the profession</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Prospect for immediate employment</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Status or prestige of the profession</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Availability of course offering in chosen institution</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Prospect of career advancement</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Affordable for the family</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Prospect of attractive compensation</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>Opportunity for employment abroad</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                                <tr>
                                    <td>No particular choice or no better idea</td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                    <td style={{textAlign: 'center'}}><input type="checkbox" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='questInpBord heightInp'>
                <div className='textAreaSurv' style={{position: 'relative'}}>
                    <div>
                        <textarea name="" id="" row='1'
                        placeholder='DID YOU ATTEND TRAINING(S) AFTER COLLEGE? (If YES, input the date and title of the most recent training/seminar you attended. If NO, leave it blank.)'></textarea>
                    </div>
                </div>
            </div>
            <div className='questInpBord heightInp'>
                <div className='textAreaSurv' style={{position: 'relative'}}>
                    <div>
                        <textarea name="" id="" row='1'
                        placeholder='DID YOU CONTINUE YOUR EDUCATION AFTER COLLEGE? (If YES, input the program name you enrolled in. If NO, leave it blank.)'></textarea>
                    </div>
                </div>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                    <div style={{fontSize: '20px'}}>What made you pursue advance studies?</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className='flexColumn' style={{width: '95%', gap: '5 px'}}>
                            <div className='selChckBArrange'>
                                <input type="checkbox" name="" id="promotion" />
                                <label htmlFor="promotion">For Promotion</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" name="" id="ProfDev" />
                                <label htmlFor="ProfDev">For Profesional Development</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input type="checkbox" name="" id="OtherAdvStud" />
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