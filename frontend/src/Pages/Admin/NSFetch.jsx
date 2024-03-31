import React, { useEffect } from 'react'
import { AlumniHooks } from '../../Hooks/AlumniHooks' 

const NSFetch = () => {
    const {Alumni, dispatch} = AlumniHooks()
    useEffect(()=> {
        const ftchStories = async () => {
            console.log("Here")
            const NSRes = await fetch('/api/contents/stories')
            const NSJson = await NSRes.json()
            if(NSRes.ok){
                dispatch({ type: 'SET_ALUM', payload: NSJson})
            }
        }
        ftchStories()
    }, [])
      
  return {Alumni}
  
}

export default NSFetch