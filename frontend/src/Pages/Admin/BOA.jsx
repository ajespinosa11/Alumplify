import React, { useEffect, useState } from 'react'
import BoaInpt from '../../Components/Admin/BoaInpt';
import BoaDisp from '../../Components/Admin/BoaDisp';
import BoaView from '../../Components/Admin/BoaView';
import cosLog from '../../Assets/png/cosLogo.png'

const BOAInpt = () => {
  const [boa, setBoa] = useState(null)
  const [clickAdd, setClick] = useState(true)
  const [indivBoa, setIndivBoa] = useState(null) // Changes Content
  const [defBoa, setDefBoa] = useState(null) // default content
  const [disable, setDisable] = useState(true)


  const inpt = () => {
    if(clickAdd){
      return <BoaInpt />
    }else if(!clickAdd && indivBoa != null){
      return <BoaView 
      viewBoa = {indivBoa}
      editBoa = {setIndivBoa}
      defboa = {defBoa}
      editDefBoa = {setDefBoa}
      disable = {disable}
      setDis = {setDisable}
      />;
    }
  }

  useEffect(() => {
      const fetchBoa = async () => {
          const response =  await fetch('/api/contents/abstract')
          const json = await response.json()
          console.log(json)
          if(response.ok){
              setBoa(json)
          }
      }
      fetchBoa()
      document.body.style.backgroundColor = '#FCF5E5'
  }, []) 


  return (
    <div className='flexRow InptCont' >
      <div className='flexColumn InnerInp'>
        <div style={{height: "100px"}}>
          <div className='headerInpt'>
            <div>
              <div className='flexRow innerHeader'>
                <div className= 'cosPicAdmin'>
                  <img src={cosLog} alt="cos logo" width={'100%'} height={'100%'} />
                </div>
                <div>
                  <div style={{fontSize: '30px', color: '#BF9745',
                          fontFamily: 'Abhaya Libre, serif', fontWeight: 'bold', 
                          letterSpacing: '5px'}}>
                    ALUMPLIFY
                  </div>
                  <div style={{fontSize: '12px', color: 'white',
                          fontFamily: 'Nunito Sans, sans-serif;',
                          textDecoration: 'italic', fontStyle: 'italic'}}>
                    Technological University of the Philippines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {inpt()}
      </div>
      <div className='flexColumn listCont'>
        <div style={{fontSize: '30px', textAlign:"center", borderBottom: 'solid 1px gray '}}>
          Abstract
        </div>
        <div className='flexRow searchBoa'>
          <div className='flexRow'>
            <input type="text" placeholder='search'/>
          </div>
          <div onClick={(e) => setClick(true)} className='postAbstract'>
            + Post Abstract
          </div>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
            {boa && boa.map((getBoa) => (
            < BoaDisp 
            key = {getBoa._id }
            boa = {getBoa}
            click = {setClick}
            getBoaIndiv={setIndivBoa}
            getDefBoa = {setDefBoa}
            disable = {setDisable}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BOAInpt