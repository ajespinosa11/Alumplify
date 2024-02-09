import React from 'react'

const BoaDisp = ({boa, click, getBoaIndiv, getDefBoa, disable}) => {

  const selClick = (e) => {
    click(false)
    fetchIndivBoa(boa._id)
    disable(true)
  }

  const fetchIndivBoa = async (id) => {
    const response =  await fetch('/api/contents/abstract/' + id)
    const json = await response.json()
    
    if(response.ok){
        getBoaIndiv(json)
        getDefBoa(json)
    }
  }

  return (
    <div className='singleCont'>
        <div onClick={(e) => selClick()} className='flexColumn innerBoa'>
            <div style={{fontSize: '12px'}}>
                {boa.Date_Publish}
            </div>
            <div className='boaTitle' style={{fontSize: '14px', fontWeight:'bold'}}>
                {boa.Title}
            </div>
            <div style={{fontSize: '13px'}}>
                {boa.Author}
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

export default BoaDisp