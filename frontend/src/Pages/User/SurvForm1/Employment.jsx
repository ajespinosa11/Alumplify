import React, { useState } from 'react'

const Employment = (cat3) => {

    const [emp1Ans, setEmp1Ans] = useState('')
    const [emp3Ans, setEmp3Ans] = useState('')
    console.log(emp3Ans)
    const ansEmp1Change = (e) => {
        if(emp1Ans !== 'empYes'){
            setEmp3Ans('')
        }
        setEmp1Ans(e.target.value)
    }
    const emp2No = () => {
        return (
        <div className='questInpBord'>
            <div style={{width: '95%', 
                padding: '10px 0',
                fontSize: '15px'}}>
                <div>PLEASE STATE REASON(S) WHY YOU ARE NOT CURRENTLY EMPLOYED. YOU MAY CHECK MORE THAN ONE ANSWER.</div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '95%'}}>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2A" />
                            <label htmlFor="emp2A">Advance or further study</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2B" />
                            <label htmlFor="emp2B">Family concern and decided not to find a job</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2C" />
                            <label htmlFor="emp2C">Health-related reason(s)</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2D" />
                            <label htmlFor="emp2C">Lack of work experience</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2E" />
                            <label htmlFor="emp2E">No job opportunity</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2F" />
                            <label htmlFor="emp2F">Did not look for a job</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp2G" />
                            <label htmlFor="emp2G">Other</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    const emp3Yes = () => {
        return(
            <div onChange={(e) => setEmp3Ans(e.target.value)} className='questInpBord heightInp' style={{width: '70%'}}>
            <select className='dropBord' name="presentEmpStat" id="emp3">
                <option value =''>PRESENT EMPLOYMENT STATUS</option>
                <option value="emp3A">Regular or Permanent</option>
                <option value="emp3B">Temporary</option>
                <option value="emp3C">Casual</option>
                <option value="emp3D">Contractual</option>
                <option value="emp3E">Self-Employed</option>
            </select>
        </div>
        )
    }

    const emp4SelfEmp = () => {
        return(
            <div className='questInpBord heightInp'>
            <input type="text" 
            placeholder='IF SELF-EMPLOYED, WHAT SKILLS ACQUIRED IN COLLEGE WERE YOU ABLE TO APPLY IN YOUR WORK?' />
        </div>
        )
    }

    const emp5Yes = () => {
        return (
        <div className='questInpBord heightInp' style={{width: '70%'}}>
            <input type="text"
            placeholder="PRESENT OCCUPATION (Ex. Grade School Teacher, \nElectrical Engineer, Self-employed)"/>
        </div>
        )
    }

  return (
    <div
    style= {{
        display: `${cat3.cat3 ? 'flex' : 'none'}`
    }}  
    className='flexColumn questEduc'> 
    <div className='survHeader'>
        <h1>EMPLOYMENT</h1>
    </div>
    <div className='flexColumn inputAns' style={{color: 'black'}}>
        <div className='questInpBord heightInp' style={{width: '70%'}}>
            <select  onChange = {ansEmp1Change} className='dropBord' name="presentEmp" id="emp1">
                <option value =''>Are you presently employed?</option>
                <option value="empYes">YES</option>
                <option value="empNo">NO</option>
            </select>
        </div>
        {emp1Ans === 'empNo' ? emp2No()  : ''}
        {emp1Ans === 'empYes' ? emp3Yes() : ''}
        {emp1Ans === 'empYes' && emp3Ans === 'emp3E' ? emp4SelfEmp() : ''}
        {emp1Ans === 'empYes' ? emp5Yes() : ''}
        <div className='questInpBord'>
            <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                <div>MAJOR LINE OF BUSINESS OF THE COMPANY YOU ARE PRESENTLY EMPLOYED IN.</div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '95%'}}>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6A" />
                            <label htmlFor="emp6A">AGRICULTURE, HUNTING, AND FORESTRY</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6B" />
                            <label htmlFor="emp6B">FISHING</label>
                        
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6C" />
                            <label htmlFor="emp6C">MINING AND QUARRYING</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6D" />
                            <label htmlFor="emp6D">MANUFACTURING</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6D" />
                            <label htmlFor="emp6D">ELECTRICITY, GAS, AND WATER SUPPLY</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6F" />
                            <label htmlFor="emp6F">CONSTRUCTION</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6G" />
                            <label htmlFor="emp6G">WHOLESALE AND RETAIL TRADE, REPAIR OF MOTOR VEHICLES, MOTORCYCLES, AND PERSONAL, AND HOUSEHOLD GOODS</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6H" />
                            <label htmlFor="emp6H">HOTELS AND RESTAURANTS</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6I" />
                            <label htmlFor="emp6I">TRANSPORT STORAGE AND COMMUNICATION</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6J" />
                            <label htmlFor="emp6J">FINANCIAL INTERMEDIATION</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6K" />
                            <label htmlFor="emp6K">REAL ESTATE, RENTING AND BUSINESS ACTIVITIES</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6L" />
                            <label htmlFor="emp6L">PUBLIC ADMINISTRATION AND DEFENSE; COMPULSARY SOCIAL SECURITY</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6M" />
                            <label htmlFor="emp6M">EDUCATION</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6N" />
                            <label htmlFor="emp6N">HEALTH AND SOCIAL WORK</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6O" />
                            <label htmlFor="emp6O">OTHER COMMUNITY, SOCIAL AND PERSONAL SERVICES ACTIVITIES</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6P" />
                            <label htmlFor="emp6P">PRIVATE HOUSEHOLD WITH EMPLOYED PERSONS</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6Q" />
                            <label htmlFor="emp6Q">EXTRA-TERRITORIAL ORGANIZATIONS AND BODIES</label>
                        </div>
                        <div className='selChckBArrange'>
                            <input type="checkbox" name="" id="emp6R" />
                            <label htmlFor="emp6R">IT INDUSTRY</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='questInpBord heightInp' style={{width: '70%'}}>
            <input type="text" placeholder='NAME OF THE COMPANY YOU ARE CURRENTLY WORKING FOR'/>
        </div>
        <div className='questInpBord heightInp' style={{width: '70%'}}>
            <select className='dropBord' name="" id="emp8">
                <option value="">PLACE OF WORK/BUSINESS</option>
                <option value="emp8A">LOCAL</option>
                <option value="emp8B">ABROAD</option>
            </select>
        </div>
    </div>
</div>
  )
}

export default Employment