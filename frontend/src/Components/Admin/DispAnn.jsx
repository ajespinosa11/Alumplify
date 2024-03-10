import React from 'react'
import testPic from '../../Assets/jpg/footer.jpg'

const DispAnn = ({event, click, getEvntIndiv, getDefEvnt, disable}) => {
  const selClick = (e) => {
    click(false)
    fetchIndivEvnt(event._id)
    disable(true)
  }

  const fetchIndivEvnt = async (id) => {
    const response =  await fetch('/api/contents/events/' + id)
    const json = await response.json()
    
    if(response.ok){
        getEvntIndiv(json)
        getDefEvnt(json)
    }
  }
return (
<div onClick={(e) => selClick()} className='flexRow singleCont'>
    {/* <div onClick={(e) => selClick()} className='flexRow innerBoa'> */}
        <div className='imgContent'>
            <img src={event.Picture.Images[event.Picture.Images.length - 1]} alt="Pic Content" width={'100%'} height={'100%'}/>
        </div>
        <div className='innerContDesc'>
            <div className='ContDesc'>
                <div style={{fontSize: '12px'}}>
                    {event.Date_Implement}
                </div>
                <div style={{fontSize: '14px', fontWeight:'bold'}}>
                    {event.Title}
                </div>
                <div style={{fontSize: '13px'}}>
                    December 8 of every year is declared as a special non-working holiday in the 
                </div>
            </div>
        </div>
    {/* </div> */}
    <div className='moreIcon' onClick={(e) => console.log('hello')}>
        <span className="material-symbols-outlined ">
            more_horiz
        </span>
    </div>
</div>
)
}

export default DispAnn