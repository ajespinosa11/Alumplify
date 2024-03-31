import React, { useEffect, useState } from 'react'
import InpNS from '../../Components/Admin/InptNs'
import InptAnn from '../../Components/Admin/InptAnn'
import DispAnn from '../../Components/Admin/DispAnn'
import DispNs from '../../Components/Admin/DispNs'
import cosLog from '../../Assets/png/cosLogo.png'
import AnnView from '../../Components/Admin/AnnView'
import NSView from '../../Components/Admin/NSView'
import { AlumniHooks } from '../../Hooks/AlumniHooks' 


const InptNsAnn = () => {
  const {Event, Stories, dispatch} = AlumniHooks()
  const [clickAdd, setClick] = useState(false)
  const [catNsAnn, setCatAnn] = useState()
  const [indivEvnt, setIndivEvnt] = useState(null) // Changes Content Event
  const [defEvent, setDefEvnt] = useState(null) // default content Event
  const [indivNS, setIndivNS] = useState(null) // Changes Content News & Stroies
  const [defNS, setDefNS] = useState(null) // default content News & Stroies
  const [disable, setDisable] = useState(true)

  const ftchNSEvnt = async () => {
    document.body.style.backgroundColor = '#FCF5E5'
    const eventRes =  await fetch('/api/contents/events')
    const EventJson = await eventRes.json()
    const NSRes = await fetch('/api/contents/stories')
    const NSJson = await NSRes.json()
   
    if(NSRes.ok && eventRes.ok){
      dispatch({Variable: "NSAnn", type: 'SET_ALUM', NSLoad: NSJson, eventLoad: EventJson})
    }
  }
  useEffect((e) => ftchNSEvnt,[])

  const inpt = () => {
    if(clickAdd){
      if(catNsAnn === 0)
        return <InpNS />
      if(catNsAnn === 1)
        return <InptAnn />
    }else{
      if(catNsAnn === 1 && indivEvnt != null)
        return <AnnView 
        setEvents = {ftchNSEvnt}
        viewEvnt = {indivEvnt}
        editEvnt = {setIndivEvnt}
        defEvnt = {defEvent}
        editDefEvnt = {setDefEvnt}
        disable = {disable}
        setDis = {setDisable}
        />
      else if(catNsAnn === 0 && indivNS != null){
        return <NSView 
        setNS = {ftchNSEvnt}
        viewNS = {indivNS}
        editNS = {setIndivNS}
        defNS = {defNS}
        editDefNS = {setDefNS}
        disable = {disable}
        setDis = {setDisable}
        />
      }
      else{
          return (
          <div className='nsAnnVis'>
            CLICK EITHER (NEWS/EVENTS)
          </div>
          )
        }
    }
  }

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
        <div className= 'flexRow nsAnnCat'>
          <div onClick={(e) => setCatAnn(0)} style={{borderBottom: `${catNsAnn === 0 ? 'solid 1px white' : ''}`, borderRight: 'solid 1px rgba(128, 128, 128, 0.691)'}}>
            NEWS & STORIES
          </div>
          <div onClick={(e) => setCatAnn(1)} style={{ borderBottom: `${catNsAnn === 1 ? 'solid 1px white' : ''}` ,borderLeft: 'solid 1px rgba(128, 128, 128, 0.691)'}}>
            EVENTS
          </div>
        </div>
        <div className='flexRow searchBoa'>
          <div className='flexRow'>
            <input type="text" placeholder='search'/>
          </div>
          <div onClick={(e) => setClick(true)} className='postAbstract'>
            + Post Content
          </div>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          {
            catNsAnn === 0 ? Stories.map((ns) => (
              <DispNs key ={ns._id} 
                NSData = {ns}
                click = {setClick}
                getNSIndiv={setIndivNS}
                getDefNS = {setDefNS}
                disable = {setDisable}
              />
            )) 
            : 
            catNsAnn === 1 ?
            Event && Event.map((evnt) => (
              <DispAnn key={evnt._id}
                event = {evnt}
                click = {setClick}
                getEvntIndiv={setIndivEvnt}
                getDefEvnt = {setDefEvnt}
                disable = {setDisable}/>
                ))
                :  ''
                } 
                
        </div>
      </div>
    </div>
  )
}

export default InptNsAnn