import React from 'react'
import searchIcon from '../Assets/svg/Search.svg'
import { Button } from 'react-bootstrap'


const BOA = () => {
  const DisplayAbstract = () => {
  
    const abstract = []
  
    for(let i = 0; i < 3; i++){
      abstract.push(
        <div>
          <h2>ALUMPLIFY: A WEB-APPLICATION FOR GRADUATES OF COLLEGE OF SCIENCE IN TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES MANILA CAMPUS</h2>
          <p><strong>Date Published:</strong> DECEMBER 11, 2023</p>
          <p><strong>Author:</strong> ESPINOSA, ET AL.</p>
          <p><strong>Abstract:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </div>
      )
    }
    return abstract
  }

  return (
    <div>
      <div>
        <div>
          <img src={searchIcon} />
          <p>Search</p>
        </div>
        <div>
          <ul>
            <li>All</li>
            <li>BSIT</li>
            <li>BSCS</li>
            <li>BSIS</li>
            <li>BSES</li>
            <li>BSCS</li>
            <li>BASMLT</li>
          </ul>
        </div>
        <div>
          <p>Year Publish</p>
        </div>
      </div>
      <div className='abstractContent'>
        {< DisplayAbstract/>}
      </div>
      <div>
        <Button className={`btnLM`}>Load More</Button>
      </div>
    </div>
  )
}

export default BOA