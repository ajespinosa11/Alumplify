
const DatEduc = (education) => {
  const Q1 = () => {
    const course = new Map()

    if(education != null){
        education.map((data) =>{
            const indivCourse = data.Answer.quesAns1
            course.set(indivCourse, (course.get(indivCourse) || 0) + 1);
        })
    }
    // Convert map to array of objects
    const ques1Set = Array.from(course, ([crs, count]) => ({ crs, count }));

    return ques1Set;

  }
  const Q2 = () => {
    const yrGrad = new Map()

    if(education != null){
        education.map((data) =>{
            const indivYearGrad = data.Answer.quesAns2
            yrGrad.set(indivYearGrad, (yrGrad.get(indivYearGrad) || 0) + 1);
        })
    }
    // Convert map to array of objects
    const ques2Set = Array.from(yrGrad, ([year, count]) => ({ year, count }));

    return ques2Set;

  }

  const Q4 = () => {
    let grad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let undGrad = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
    if(education != null){
        education.map((data) =>{
            var incUndGrad = 0
            var incGrad = 0
            
            for(let i = 1; i < 15; i++){
                if(data.Answer.quesAns4[`row${i}`].check1 === true){
                    undGrad[i-1] += 1; 
                }else if(data.Answer.quesAns4[`row${i}`].check2 === true){
                    grad[i-1] += 1;
                }
            }
        })
    }
    return {undGrad,grad};

  }
  const Q7 = () => {
    const pursue = new Map()

    if(education != null){
        education.map((data) =>{
            const indivPursue = data.Answer.quesAns7
            pursue.set(indivPursue, (pursue.get(indivPursue) || 0) + 1);
        })
    }
    // Convert map to array of objects
    const ques7Set = Array.from(pursue, ([purs, count]) => ({ purs, count }));

    return ques7Set;

  }

  return {Q1, Q2, Q4, Q7}
}

export default DatEduc