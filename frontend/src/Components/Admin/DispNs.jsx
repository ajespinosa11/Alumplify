import React from 'react'
import testPic from '../../Assets/jpg/footer.jpg'

const DispNs = ({NSData, click, getNSIndiv, getDefNS, disable}) => {
    const selClick = (e) => {
        click(false)
        fetchIndivEvnt(NSData._id)
        disable(true)
      }
    
      const fetchIndivEvnt = async (id) => {
        const response =  await fetch('/api/contents/stories/' + id)
        const json = await response.json()
        
        if(response.ok){
            getNSIndiv(json)
            getDefNS(json)
        }
        console.log("mood")
    
      }
  return (
    <div className='singleCont'>
        <div onClick={(e) => selClick()} className='flexColumn innerBoa'>
            <div className='flexRow' style={{gap: '20px'}}>
                <div className='imgContent'>
                    <img src={NSData.Picture} alt="Pic Content" width={'100%'} height={'100%'}/>
                </div>
                <div className='innerContDesc'>
                    <div className='ContDesc'>
                        <div style={{fontSize: '12px'}}>
                        {NSData.Date_Publish}
                        </div>
                        <div style={{fontSize: '14px', fontWeight:'bold'}}>
                            {NSData.Title}
                        </div>
                        <div style={{fontSize: '13px'}}>
                            {NSData.Short_Desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='moreIcon' onClick={(e) => console.log('hello')}>
            <span className="material-symbols-outlined ">
                more_horiz
            </span>
        </div>
    </div>
  )
}

export default DispNs