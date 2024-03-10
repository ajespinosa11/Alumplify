import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import DispBoa from '../../Components/DispBoa'

const BOA = () => {
  const [textLoad, setTextLoad] = useState('LOAD MORE')
  const [moreLoad, setMoreLoad] = useState(false)
  const [boa, setBoa] = useState(null)

  useEffect(() => {
  
    const fetchBoa = async () => {
      const response = await fetch('/api/contents/abstract')
      const json = await response.json()
      console.log(json)
      if(response.ok){
        setBoa(json)
      }else{
        console.log('error access fetch')
      }
    }
    document.body.style.backgroundColor = '#1e1e1e'

    fetchBoa()
  }, [])

  const LoadTrig = (e) => {
    if(textLoad === 'LOAD MORE'){
      setMoreLoad(true)
      setTextLoad('COLLAPSE')
    }else{
      setMoreLoad(false)
      setTextLoad('LOAD MORE')
    }
  }

  return (
    <div className='flexColumn BOAborder'>
      <div className='flexRow searchPart'>
        <div className='flexRow searchInp'>
          <span className="material-symbols-outlined">search</span>
          <input type="text" size={5} placeholder='Search' />
        </div>
        <div className='filtBord'>
          <div className='flexRow filtTag'>
            <span>ALL</span>
            <span>BSIT</span>
            <span>BSCS</span>
            <span>BSIS</span>
            <span>BSES</span>
            <span>BSCS</span>
            <span>BASMLT</span>
          </div>
        </div>
        <div className='selectYear'>
          <select defaultValue={'all'} id = "year" name="yearPub" >
            <option value="all" disabled selected hidden>Year Publish</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
      <div className='flexColumn abstractBorder'>
        {boa && boa.map((absBoa, i) => (
          < DispBoa key = {absBoa._id} 
          boa = {absBoa} 
          amount = {i}
          condLoad = {moreLoad}/>
          ))}
      </div>
      <div className='bottomLoad'>
        {boa ? 
          <Button onClick={(e) => LoadTrig()}  className={`btnLM`}>{textLoad}</Button>
          : ''
        }
      </div>
    </div>
 
  )
}

export default BOA