import React from 'react'
import searchIcon from '../Assets/svg/Search.svg'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import add from '../Assets/svg/add.svg'

const BOA = () => {
  const DisplayAbstract = () => {
  
    const abstract = []
  
    for(let i = 0; i < 3; i++){
      abstract.push(
        <div key={i} className='abstractContBord'>
          <div className='flexColumn abstractCont'>
            <div className='flexRow upperBoaCont'>
              <div className= 'plusIconBoa'>
                <span className="material-symbols-outlined">add</span>
              </div>
              <div>
                <div>
                  <h2>ALUMPLIFY: A WEB-APPLICATION FOR GRADUATES OF COLLEGE OF SCIENCE IN TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES MANILA CAMPUS</h2>
                </div>
                <div>
                  <p><strong>Date Published:</strong> DECEMBER 11, 2023</p>
                  <p><strong>Author:</strong> ESPINOSA, ET AL.</p>
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faFileLines} style={{color: "#ffffff", fontSize: "150px", }} />
              </div>
            </div>
            <div className='flexRow bottomBoaCont'>
              <div className='dlIconBoa'>
                <span className="material-symbols-outlined">download</span>
              </div>
              <div>
                <p><strong>Abstract:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
              </div>
            </div>
          </div>
          
        </div>
      )
    }
    return abstract
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
{/*         <li>All</li>
            <li>BSIT</li>
            <li>BSCS</li>
            <li>BSIS</li>
            <li>BSES</li>
            <li>BSCS</li>
            <li>BASMLT</li> */}
          </div>
        </div>
        <div className='selectYear'>
          <select id = "year" name="yearPub" >
            <option value="all" disabled selected hidden>Year Publish</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2012">2020</option>
            <option value="2012">2021</option>
            <option value="2012">2022</option>
            <option value="2012">2023</option>
            <option value="2012">2024</option>
          </select>
        </div>
      </div>
      <div className='flexColumn abstractBorder'>
        {< DisplayAbstract/>}
      </div>
      <div>
        <Button className={`btnLM`}>Load More</Button>
      </div>
    </div>
  )
}

export default BOA