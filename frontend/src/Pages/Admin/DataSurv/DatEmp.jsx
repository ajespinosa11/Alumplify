import { useEffect, useState } from 'react'

const DatEmp = () => {
    const [emp, setEmp] = useState(null)

    useEffect(() => {
      const fetchSurv = async () => {
        try{
          const response = await fetch('/api/contents/response/Employee')
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }else if (response.ok){
            const json = await response.json()
            setEmp(json)
          }
        } catch(e) {
          console.error('Error fetching data:', e);
        }
      }
      fetchSurv()
      document.body.style.backgroundColor = '#FCF5E5'
  },[])

  const DatQ1Yes = () => {
    let yesCount = 0

    return 6
  }

  const DatQ1No = () => {
    let noCount = 0
    
   

    return 20
  }
  
  return {DatQ1Yes, DatQ1No}
}

export default DatEmp