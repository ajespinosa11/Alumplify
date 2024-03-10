import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import ContentPic from '../../Assets/jpg/406517440_240288745747393_5783927159101220422_n.jpg'

const AnnEvent = () => {
  const DisplayEvent = () => {
    
    useEffect(() => {
      document.body.style.backgroundColor = '#1e1e1e'
    }, [])

    const contentDisp = [];
    
    for(let i = 0; i < 12; i++){
      contentDisp.push(
      <div key={i} className='flexColumn eventContent'>
        <div >
            <img src={ContentPic} style = {{width: "380px", height: "250px",objectFit: "cover"}}></img>
        </div>
        <div className='flexColumn eventIn'>
          <div className = 'flexRow titleEvent'>
            <div className='flexColumn calendar'>
              <div className='monthEvent'>
                <div>
                  FEB
                </div>
              </div>
              <div className='dayEvent'>
                <div>
                  17
                </div>
              </div>
            </div>
            <div className='EventTitleText'>
              <p>2024 Alumni Homecoming</p>
            </div>
          </div>
          <div className='flexColumn eventDescription'>
            <p><strong>Date:</strong> February 17, 2024</p>
            <p><strong>Loaction:</strong> Technological University of the philippines - Manila</p>
          </div>
          <div className='seeMore'>
            <a>See More</a>
          </div>
        </div>
      </div>)
    }
    return contentDisp
  }
  
  return (
    <div className='flexColumn EventBorder'>
      <div className='evenUpperText'>
        <h2>Upcoming Events</h2>
      </div>
      <div className='contentBorder flexRow'>
        {< DisplayEvent/>}
      </div>
      <div>
        <Button className={`btnLM`}>Load More</Button>
      </div>
    </div>
  )
}

export default AnnEvent