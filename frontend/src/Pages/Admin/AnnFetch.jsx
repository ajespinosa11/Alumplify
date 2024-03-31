import React, { useEffect } from 'react'
import { AlumniHooks } from '../../Hooks/AlumniHooks' 

const AnnFetch = () => {
    const {Alumni, dispatch} = AlumniHooks()
    useEffect(()=> {
        const ftchStories = async () => {
            console.log("Here")
            const eventRes =  await fetch('/api/contents/events')
            const EventJson = await eventRes.json()
            if(eventRes.ok){
              dispatch({type: 'SET_ALUM', payload: EventJson})
            }
        }
        ftchStories()
    }, [])
      
  return {Alumni}
}

export default AnnFetch