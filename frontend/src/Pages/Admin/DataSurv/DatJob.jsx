
const DatJob = (Job) => {

    const Q1 = () => {
        const ansYesNo = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivBool = data.quesAns1;
                ansYesNo.set(indivBool, (ansYesNo.get(indivBool) || 0) + 1);
            }) 
        }
        const setAns = Array.from(ansYesNo, ([yesNo, count]) => ({ yesNo, count }));

        return setAns; 
    }

    const Q2 = () => {
        const ansArr = [0, 0, 0, 0, 0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= ansArr.length; i++){
                    if(data.quesAns2[`check${i}`] === true){
                        ansArr[i-1] += 1
                    }
                }
            }) 
        }

        return ansArr; 
    }


    const Q3 = () => {
        const ansYesNo = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivBool = data.quesAns3;
                ansYesNo.set(indivBool, (ansYesNo.get(indivBool) || 0) + 1);
            }) 
        }
        const setAns = Array.from(ansYesNo, ([yesNo, count]) => ({ yesNo, count }));

        return setAns; 
    }

    const Q4 = () => {
        const ansArr = [0, 0, 0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= ansArr.length; i++){
                    if(data.quesAns4[`check${i}`] === true){
                        ansArr[i-1] += 1
                    }
                }
            }) 
        }
        return ansArr; 
    }

    const Q5 = () => {
        const ansArr = [0, 0, 0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= ansArr.length; i++){
                    if(data.quesAns5[`check${i}`] === true){
                        ansArr[i-1] += 1
                    }
                }
            }) 
        }
        return ansArr; 
    }

    const Q6 = () => {
        const longerJob = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivLong = data.quesAns6;
                longerJob.set(indivLong, (longerJob.get(indivLong) || 0) + 1);
            }) 
        }
        const setAns = Array.from(longerJob, ([hwLong, count]) => ({ hwLong, count }));

        return setAns; 
    }
    
    const Q7 = () => {
        const longerJob = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivLong = data.quesAns7;
                longerJob.set(indivLong, (longerJob.get(indivLong) || 0) + 1);
            }) 
        }
        const setAns = Array.from(longerJob, ([hwLong, count]) => ({ hwLong, count }));

        return setAns; 
    }

    const Q8 = () => {
        const ansArr = [0, 0, 0, 0, 0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= ansArr.length; i++){
                    if(data.quesAns8[`check${i}`] === true){
                        ansArr[i-1] += 1
                    }
                }
            }) 
        }
        return ansArr; 
    }

    const Q9 = () => {
        const fstJob = [0, 0, 0, 0]
        const currJob = [0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= 4; i++){
                    if(data.quesAns9[`row${i}`] === "FIRST JOB"){
                        fstJob[i-1] += 1
                    }else if(data.quesAns9[`row${i}`] === "CURRENT OR PRESENT JOB"){
                        currJob[i-1] += 1
                    }
                }
            }) 
        }
        return {fstJob,currJob}; 
    }

    const Q10 = () => {
        const grossPay = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivGross = data.quesAns10;
                grossPay.set(indivGross, (grossPay.get(indivGross) || 0) + 1);
            }) 
        }
        const setAns = Array.from(grossPay, ([gross, count]) => ({ gross, count }));

        return setAns; 
    }

    const Q11 = () => {
        const ansYesNo = new Map()
        if(Job != null){
            Job.map((data) => {
                const indivBool = data.quesAns11;
                ansYesNo.set(indivBool, (ansYesNo.get(indivBool) || 0) + 1);
            }) 
        }
        const setAns = Array.from(ansYesNo, ([yesNo, count]) => ({ yesNo, count }));

        return setAns; 
    }

    const Q12 = () => {
        const ansArr = [0, 0, 0, 0, 0, 0]
        if(Job != null){
            Job.map((data) => {
                for(let i = 1; i <= ansArr.length; i++){
                    if(data.quesAns12[`check${i}`] === true){
                        ansArr[i-1] += 1
                    }
                }
            }) 
        }
        return ansArr; 
    }
    return {Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12}
}

export default DatJob