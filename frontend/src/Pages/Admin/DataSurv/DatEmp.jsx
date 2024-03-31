
const DatEmp = (employee) => {

  const Q1 = (ans) => {
    let yesCount = 0;
    let noCount = 0;
    if(employee !== null){
      employee.forEach(data => {
           if (data.Answer.quesAns1 === "empYes")
               yesCount++;
           else if (data.Answer.quesAns1 === "empNo")
               noCount++;
       });
     }
     if(ans === "YES") return yesCount;
     else if(ans === "NO") return noCount;
   }

   const Q2 = () => {
    let setAns = [0, 0, 0, 0, 0, 0, 0]
    if(employee !== null){
        employee.map(data => {
          for(let i = 1; i <= setAns.length; i++){
            if(data.Answer.quesAns2[`check${i}`] === true){
              setAns[i-1] += 1
            } 
          }
       });
     }
     return setAns
   }

   const Q3 = () => {
    const empStats = new Map()

    if(employee != null){
      employee.map((data) => {
        const indiStatus= data.Answer.quesAns3
        empStats.set(indiStatus, (empStats.get(indiStatus) || 0) + 1);
      });
    }
    // Convert map to array of objects
    const ques3Set = Array.from(empStats, ([stats, count]) => ({ stats, count }));

    return ques3Set;
   }

   const Q6 = () => {
    let setAns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    if(employee !== null){
        employee.map(data => {
          for(let i = 1; i <= setAns.length; i++){
            if(data.Answer.quesAns6[`check${i}`] === true){
              setAns[i-1] += 1
            } 
          }
       });
     }
     return setAns
   }

   const Q8 = () => {
    const placeWork = new Map()

    if(employee != null){
      employee.map((data) => {
        const indivPlace= data.Answer.quesAns8
        placeWork.set(indivPlace, (placeWork.get(indivPlace) || 0) + 1);
      });
    }
    // Convert map to array of objects
    const ques8Set = Array.from(placeWork, ([place, count]) => ({ place, count }));

    return ques8Set;
   }

  return {Q1, Q2, Q3, Q6, Q8}
}

export default DatEmp