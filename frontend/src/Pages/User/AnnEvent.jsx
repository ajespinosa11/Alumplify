import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import ContentPic from '../../Assets/jpg/406517440_240288745747393_5783927159101220422_n.jpg'

const AnnEvent = () => {
  const [event, setEvent] = useState(null)
  useEffect(() => {
    document.body.style.backgroundColor = '#1e1e1e'
    const fetchEvent = async () => {
      const eventRes = await fetch('/api/contents/events/')
      const json = await eventRes.json()
      if(eventRes.ok){
        setEvent(json)
      }else if(!eventRes.ok){
        console.log('access event database error')
      }
    }
    fetchEvent()
  }, [])

  //Converting thg date value from database into following date format
  const formatDate = (date) => {
    const dateGet = new Date(date)
    
    const setFormat = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const formatDateConv = dateGet.toLocaleDateString('en-US', setFormat)
    return formatDateConv
  }

  // Setting for only month and day
  const calenFormat = (date) => {
    const dateGet = new Date(date)

    var day = dateGet.toLocaleDateString('en-US', {month: 'short'})
    var month = dateGet.toLocaleDateString('en-US', {month: 'numeric'})

    return {day, month}
  }
  
  return (
    <div className='flexColumn EventBorder'>
      <div className='evenUpperText'>
        <h2>Upcoming Events</h2>
      </div>
      <div className='contentBorder flexRow'>
        {event && event.map((setEvnt) => (
          <div key={setEvnt._id} className='flexColumn eventContent'>
            <div >
                <img src={setEvnt.Picture.Images[0]} style = {{width: "380px", height: "250px",objectFit: "cover"}}></img>
            </div>
            <div className='flexColumn eventIn'>
              <div className = 'flexRow titleEvent'>
                <div className='flexColumn calendar'>
                  <div className='monthEvent'>
                    <div>
                      {calenFormat(setEvnt.Date_Implement).day}
                    </div>
                  </div>
                  <div className='dayEvent'>
                    <div>
                    {calenFormat(setEvnt.Date_Implement).month}
                    </div>
                  </div>
                </div>
                <div className='EventTitleText'>
                  <p>{setEvnt.Title}</p>
                </div>
              </div>
              <div className='flexColumn eventDescription'>
                <p><strong>Date:</strong> {formatDate(setEvnt.Date_Implement)}</p>
                <p><strong>Location:</strong> Technological University of the philippines - Manila</p>
              </div>
              <div className='seeMore'>
                <a>See More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button className={`btnLM`}>Load More</Button>
      </div>
    </div>
  )
}

export default AnnEvent