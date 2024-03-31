const DatPers = (person) => {
  
  const Q1 = () => {
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

  const Q5 = () => {
    const status = new Map()

    if(person != null){
      person.forEach((data) => {
        const indiStatus= data.Answer.quesAns5
        status.set(indiStatus, (status.get(indiStatus) || 0) + 1);
      });
    }
    // Convert map to array of objects
    const ques5Set = Array.from(status, ([stats, count]) => ({ stats, count }));

    return ques5Set;
  }

  const Q6 = () => {
    const gend = new Map()

    if(person != null){
      person.forEach((data) => {
        const indiGend= data.Answer.quesAns6
        gend.set(indiGend, (gend.get(indiGend) || 0) + 1);
      });
    }
    // Convert map to array of objects
    const ques6Set = Array.from(gend, ([gender, count]) => ({ gender, count }));

    return ques6Set;
  }

  const Q8 = () => {
    const orig = new Map()

    if(person != null){
      person.forEach((data) => {
        const indivOrig= data.Answer.quesAns8
        orig.set(indivOrig, (orig.get(indivOrig) || 0) + 1);
      });
    }
    // Convert map to array of objects
    const ques8Set = Array.from(orig, ([origin, count]) => ({ origin, count }));

    return ques8Set;
  }

  return {Q1, Q5, Q6, Q8}

}

export default DatPers