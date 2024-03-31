import React, { useEffect, useRef, useState } from 'react'

const Employment = ({cat, arrEmp, changeVal}) => {
    
    const textRef = useRef([])
    
    const resizeTextArea = () => {
        if(textRef.current[0] !== undefined){
            textRef.current[0].style.height = "auto";
            textRef.current[0].style.height = textRef.current[0].scrollHeight + "px";
        }
        if(textRef.current[1] !== undefined){
            textRef.current[1].style.height = "auto";
            textRef.current[1].style.height = textRef.current[1].scrollHeight + "px";
        }
        if(textRef.current[2] !== undefined){
            textRef.current[2].style.height = "auto";
            textRef.current[2].style.height = textRef.current[2].scrollHeight + "px";
        }
      }
    
    useEffect(resizeTextArea,[arrEmp,cat])

    const getValue = (e) => {

        if(e.target.name === 'quesAns1' && e.target.value === 'YES'){
            changeVal((prev) => ({...prev,
                quesAns2chck1: false,
                quesAns2chck2: false,
                quesAns2chck3: false,
                quesAns2chck4: false,
                quesAns2chck5: false,
                quesAns2chck6: false,
                quesAns2chck7: false
            }))
        }else if(e.target.name === 'quesAns1' && e.target.value === ''){
            changeVal((prev) => ({...prev,
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
            }))
        }
        // }else{
        //     changeVal((prev) => ({...prev,
        //         quesAns3: '',
        //         quesAns4: '',
        //         quesAns5: ''
        //     }))
        // }
        
        changeVal((prev) => ({...prev, [e.target.name]: e.target.value}))
      }
    
    const isChecked = (e) => {
        changeVal((prev) => ({...prev, [e.target.name]: e.target.checked}))
    }

  return (
    <div className='flexColumn questEduc'> 
        <div className='survHeader'>
            <h1>EMPLOYMENT</h1>
        </div>
            <div className='flexColumn inputAns' style={{color: 'black'}}>
                <div className='questInpBord' style={{width: '70%'}}>
                    <select onChange={getValue}
                    value={arrEmp.quesAns1} 
                    defaultValue={''} 
                    className='dropBord' 
                    name="quesAns1" 
                    id="emp1">
                        <option value =''>Are you presently employed?</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
                <div style={{display: `${arrEmp.quesAns1 === 'NO' ? ''  : 'none'}`}} className='questInpBord'>
                    <div style={{width: '95%', 
                    padding: '10px 0',
                    fontSize: '15px'}}>
                        <div>
                            PLEASE STATE REASON(S) WHY YOU ARE NOT CURRENTLY EMPLOYED. YOU MAY CHECK MORE THAN ONE ANSWER.
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{width: '95%'}}>
                                <div className='selChckBArrange'>
                                    <input onChange={isChecked} 
                                    type="checkbox" 
                                    name="quesAns2chck1" 
                                    id="emp2A" 
                                    value={arrEmp.quesAns2chck1} 
                                    checked={arrEmp.quesAns2chck1}
                                    />
                                    <label htmlFor="emp2A">Advance or further study</label>
                                </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} 
                                type="checkbox" 
                                name="quesAns2chck2" 
                                id="emp2B" 
                                value={arrEmp.quesAns2chck2} 
                                checked={arrEmp.quesAns2chck2}
                                />
                                <label htmlFor="emp2B">Family concern and decided not to find a job</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} 
                                type="checkbox" 
                                name="quesAns2chck3" 
                                id="emp2C" 
                                value={arrEmp.quesAns2chck3} 
                                checked={arrEmp.quesAns2chck3}
                                />
                                <label htmlFor="emp2C">Health-related reason(s)</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                name="quesAns2chck4" 
                                value={arrEmp.quesAns2chck4} 
                                checked={arrEmp.quesAns2chck4}
                                id="emp2D" />
                                <label htmlFor="emp2C">Lack of work experience</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                name="quesAns2chck5" 
                                value={arrEmp.quesAns2chck5} 
                                checked={arrEmp.quesAns2chck5}
                                id="emp2E" />
                                <label htmlFor="emp2E">No job opportunity</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                name="quesAns2chck6" 
                                value={arrEmp.quesAns2chck6} 
                                checked={arrEmp.quesAns2chck6}
                                id="emp2F" />
                                <label htmlFor="emp2F">Did not look for a job</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns2chck7} 
                                checked={arrEmp.quesAns2chck7}
                                name="quesAns2chck7" 
                                id="emp2G" />
                                <label htmlFor="emp2G">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord' 
            style={{ display: `${arrEmp.quesAns1 === 'YES' ? ''  : 'none'}`,
                width: '70%'}}>
                <select onChange={getValue}
                defaultValue={''}  
                value={arrEmp.quesAns3}
                className='dropBord' 
                name="quesAns3" 
                id="emp3">
                    <option value =''>PRESENT EMPLOYMENT STATUS</option>
                    <option value="Regular or Permanent">Regular or Permanent</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Casual">Casual</option>
                    <option value="Contractual">Contractual</option>
                    <option value="Self-Employed">Self-Employed</option>
                </select>
            </div>
            <div className='questInpBord' 
            style={{ display: `${arrEmp.quesAns1 === 'YES' 
                    && arrEmp.quesAns3 === 'Self-Employed' ? '' : 'none' }`}}>
                <textarea value={arrEmp.quesAns4}
                ref={(element) => {textRef.current[0] = element}} 
                rows={1}
                onChange={getValue} name='quesAns4'
                placeholder='IF SELF-EMPLOYED, WHAT SKILLS ACQUIRED IN COLLEGE WERE YOU ABLE TO APPLY IN YOUR WORK?' />
            </div>
            <div className='questInpBord'
            style={{ display: `${arrEmp.quesAns1 === 'YES' ? '': 'none' }`}} >
                <textarea value={arrEmp.quesAns5} 
                onChange={getValue} name='quesAns5'
                ref={(element) => {textRef.current[1] = element}} 
                rows={1}
                placeholder="PRESENT OCCUPATION (Ex. Grade School Teacher, \nElectrical Engineer, Self-employed)"/>
            </div>
            <div className='questInpBord'>
                <div style={{width: '95%', 
                        padding: '10px 0',
                        fontSize: '15px'}}>
                    <div>MAJOR LINE OF BUSINESS OF THE COMPANY YOU ARE PRESENTLY EMPLOYED IN.</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{width: '95%'}}>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} 
                                type="checkbox" 
                                value={arrEmp.quesAns6check1} 
                                checked={arrEmp.quesAns6check1}
                                name="quesAns6check1" id="emp6A" />
                                <label htmlFor="emp6A">AGRICULTURE, HUNTING, AND FORESTRY</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check2} 
                                checked={arrEmp.quesAns6check2}
                                name="quesAns6check2"  id="emp6B" />
                                <label htmlFor="emp6B">FISHING</label>
                            
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check3} 
                                checked={arrEmp.quesAns6check3}
                                name="quesAns6check3"  id="emp6C" />
                                <label htmlFor="emp6C">MINING AND QUARRYING</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check4} 
                                checked={arrEmp.quesAns6check4}
                                name="quesAns6check4" id="emp6D" />
                                <label htmlFor="emp6D">MANUFACTURING</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check5} 
                                checked={arrEmp.quesAns6check5}
                                name="quesAns6check5"  id="emp6E" />
                                <label htmlFor="emp6D">ELECTRICITY, GAS, AND WATER SUPPLY</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox"
                                value={arrEmp.quesAns6check6} 
                                checked={arrEmp.quesAns6check6}
                                name="quesAns6check6"
                                id="emp6F" />
                                <label htmlFor="emp6F">CONSTRUCTION</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check7} 
                                checked={arrEmp.quesAns6check7}
                                name="quesAns6check7"
                                id="emp6G" />
                                <label htmlFor="emp6G">WHOLESALE AND RETAIL TRADE, REPAIR OF MOTOR VEHICLES, MOTORCYCLES, AND PERSONAL, AND HOUSEHOLD GOODS</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check8} 
                                checked={arrEmp.quesAns6check8}
                                name="quesAns6check8" id="emp6H" />
                                <label htmlFor="emp6H">HOTELS AND RESTAURANTS</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check9} 
                                checked={arrEmp.quesAns6check9}
                                name="quesAns6check9"
                                id="emp6I" />
                                <label htmlFor="emp6I">TRANSPORT STORAGE AND COMMUNICATION</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check10} 
                                checked={arrEmp.quesAns6check10}
                                name="quesAns6check10" id="emp6J" />
                                <label htmlFor="emp6J">FINANCIAL INTERMEDIATION</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox"
                                value={arrEmp.quesAns6check11} 
                                checked={arrEmp.quesAns6check11}
                                name="quesAns6check11" id="emp6K" />
                                <label htmlFor="emp6K">REAL ESTATE, RENTING AND BUSINESS ACTIVITIES</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox"
                                value={arrEmp.quesAns6check12} 
                                checked={arrEmp.quesAns6check12}
                                name="quesAns6check12"
                                id="emp6L" />
                                <label htmlFor="emp6L">PUBLIC ADMINISTRATION AND DEFENSE; COMPULSARY SOCIAL SECURITY</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check13} 
                                checked={arrEmp.quesAns6check13}
                                name="quesAns6check13"
                                id="emp6M" />
                                <label htmlFor="emp6M">EDUCATION</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check14} 
                                checked={arrEmp.quesAns6check14}
                                name="quesAns6check14" id="emp6N" />
                                <label htmlFor="emp6N">HEALTH AND SOCIAL WORK</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check15} 
                                checked={arrEmp.quesAns6check15}
                                name="quesAns6check15"
                                id="emp6O" />
                                <label htmlFor="emp6O">OTHER COMMUNITY, SOCIAL AND PERSONAL SERVICES ACTIVITIES</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check16} 
                                checked={arrEmp.quesAns6check16}
                                name="quesAns6check16"
                                id="emp6P" />
                                <label htmlFor="emp6P">PRIVATE HOUSEHOLD WITH EMPLOYED PERSONS</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check17} 
                                checked={arrEmp.quesAns6check17 }
                                name="quesAns6check17"
                                id="emp6Q" />
                                <label htmlFor="emp6Q">EXTRA-TERRITORIAL ORGANIZATIONS AND BODIES</label>
                            </div>
                            <div className='selChckBArrange'>
                                <input onChange={isChecked} type="checkbox" 
                                value={arrEmp.quesAns6check18} 
                                checked={arrEmp.quesAns6check18}
                                name="quesAns6check18"
                                id="emp6R" />
                                <label htmlFor="emp6R">IT INDUSTRY</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questInpBord' >
                <textarea onChange={getValue}
                ref={(element) => {textRef.current[2] = element}} 
                rows={1}
                name='quesAns7'
                placeholder='NAME OF THE COMPANY YOU ARE CURRENTLY WORKING FOR'
                value={arrEmp.quesAns7}
                />
            </div>
            <div className='questInpBord' style={{width: '70%'}}>
                <select className='dropBord'
                onChange={getValue} 
                value={arrEmp.quesAns8}
                defaultValue={''} 
                name='quesAns8' 
                id="emp8">
                    <option onChange={isChecked} value="">PLACE OF WORK/BUSINESS</option>
                    <option onChange={isChecked} value="LOCAL">LOCAL</option>
                    <option onChange={isChecked} value="ABROAD">ABROAD</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Employment