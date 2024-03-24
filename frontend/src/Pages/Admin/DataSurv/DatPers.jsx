import React, { useEffect, useState } from 'react'

const DatPers = () => {
  const [person, setPerson] = useState(null)

  useEffect(() => {
      const fetchSurv = async () => {
        try{
          const response = await fetch('/api/contents/response/persInf')
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }else if (response.ok){
            const json = await response.json()
            setPerson(json) 
          }
        } catch(e) {
          console.error('Error fetching data:', e);
        }
      }
      fetchSurv()
    }, [])
  const datQ1 = () => {
      const ageMap = new Map();
  
      if(person !== null){
        person.forEach((data) => {
          const curDate = new Date();
          const getDate = new Date(data.Answer.quesAns7);
          const curYear = curDate.getFullYear();
          const age = curYear - getDate.getFullYear();

          ageMap.set(age, (ageMap.get(age) || 0) + 1);
        
        });
      }

      // Convert map to array of objects
      const ques1Set = Array.from(ageMap, ([age, count]) => ({ age, count }));
  
      return ques1Set;
  }

  return {datQ1}

}

export default DatPers