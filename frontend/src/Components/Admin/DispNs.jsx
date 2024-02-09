import React from 'react'
import testPic from '../../Assets/jpg/footer.jpg'

const DispNs = () => {
    const selClick = (e) => {
        console.log("hello")
      }
  return (
    <div className='singleCont'>
        <div onClick={(e) => selClick()} className='flexColumn innerBoa'>
            <div className='flexRow' style={{gap: '20px'}}>
                <div className='imgContent'>
                    <img src={testPic} alt="Pic Content" width={'100%'} height={'100%'}/>
                </div>
                <div className='innerContDesc'>
                    <div className='ContDesc'>
                        <div style={{fontSize: '12px'}}>
                            DECEMBER 8, 2023
                        </div>
                        <div style={{fontSize: '14px', fontWeight:'bold'}}>
                            FEAST OF IMMACULATE CONCEPTION OF MARY
                        </div>
                        <div style={{fontSize: '13px'}}>
                            December 8 of every year is declared as a special non-working holiday in the entire country to commemorate the Feast of the Immaculate Conception of Mary.
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