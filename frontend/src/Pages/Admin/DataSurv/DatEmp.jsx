import { useEffect, useState } from 'react'

const DatEmp = () => {
  const [datEmp, setDatEmp] = useState(null)

  useEffect(() => {
    const fetchSurv = async () => {
      try{
        const response = await fetch('/api/contents/response/Employee')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }else if (response.ok){
          const json = await response.json()
          setDatEmp(json) 
        }
      } catch(e) {
        console.error('Error fetching data:', e);
      }
    }
    fetchSurv()
  }, [])

  const datQ1 = (ans) => {
    let yesCount = 0;
    let noCount = 0;
    if(datEmp !== null){
      datEmp.forEach(data => {
           if (data.Answer.quesAns1 === "YES")
               yesCount++;
           else if (data.Answer.quesAns1 === "NO")
               noCount++;
       });
     }
     if(ans === "YES") return yesCount;
     else if(ans === "NO") return noCount;
   }

  return {datQ1}
}

export default DatEmp