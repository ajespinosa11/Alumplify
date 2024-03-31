import React, { useEffect, useState } from 'react'
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";
import DatJob from '../DataSurv/DatJob';

const Job = () => {
    const [Job, setJob] = useState(null)
    useEffect(() => {
        const fetchSurv = async () => {
            const response = await fetch('/api/contents/response/Job')
            const json = await response.json()

            if(response.ok){
                setJob(json)
            }
        }
        fetchSurv()
        document.body.style.backgroundColor = '#FCF5E5'
    },[])

    return (
        <div className='jobStyle'> 
            <div className="content">
                <h1 id=''>Alumni Job data</h1>
                <div className='flexRow '>
                    <div className="person-pie charts">
                        <h2>First job after college</h2>
                        <Pie
                            data={{
                                labels: DatJob(Job).Q1().map(data => data.yesNo),
                                datasets: [
                                    {
                                        label: ["First Job"],
                                        data: DatJob(Job).Q1().map(data => data.count),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="person-pie charts">
                        <h2>First job related to the course took up to the college</h2>
                        <Pie
                            data={{
                                labels: DatJob(Job).Q3().map(data => data.yesNo),
                                datasets: [
                                    {
                                        label: ["Related Job"],
                                        data: DatJob(Job).Q3().map(data => data.count),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="charts">
                    <h2>Reason for staying on the job</h2>
                    <Bar
                        data={{
                            labels: [
                                "Salaries and Benefits",
                                "Career Challenge",
                                "Related to special skills",
                                "Related to course or program of study",
                                "Proximity to residence",
                                "Peer Influence",
                                "Family Influence",
                                "Other"
                            ],
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "Alumni",
                                    data: DatJob(Job).Q2(),
                                    backgroundColor: 'orange'
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y',
                        }}
                    />
                </div>
            </div>
                
            <div className='flexRow '>
                    
                <div className="charts">
                    <h2>Reason for accepting job</h2>
                    <Bar
                        data={{
                            labels: [
                                "Salaries and Benefits",
                                "Career Challenge",
                                "Related to special skills",
                                "Related to course or program of study",
                                "Proximity to residence",
                                "Other"
                            ],
                            datasets: [
                                {
                                    axis: 'y',
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q4(),
                                    backgroundColor: 'orange'
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y',
                        }}
                    />
                </div>
                <div className="charts">
                    <h2>Reason for changing job</h2>
                    <Bar
                        data={{
                            labels:  [
                                "Salaries and Benefits",
                                "Career Challenge",
                                "Related to special skills",
                                "Related to course or program of study",
                                "Proximity to residence",
                                "Other"
                            ],
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: DatJob(Job).Q5(),
                                    backgroundColor: 'orange'
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y',
                        }}
                    />
                </div>
            </div>
            <div className='flexRow '>
                <div className="person-pie charts">
                    <h2>How long stay on first job</h2>
                    <Pie
                        data={{
                            labels: DatJob(Job).Q6().map(data => data.hwLong),
                            datasets: [
                                {
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q6().map((data) => data.count),
                                },
                            ],
                        }}
                    />
                </div>
                <div className="person-pie charts">
                    <h2>How long to land first job</h2>
                    <Pie
                        data={{
                            labels: DatJob(Job).Q7().map(data => data.hwLong),
                            datasets: [
                                {
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q7().map(data => data.count),
                                },
                            ],
                        }}
                    />
                </div>
                <div className="charts">
                    <h2>How did you find your first job</h2>
                    <Bar
                        data={{
                            labels: [
                                "Response to an advertisement",
                                "As walk-in applicant",
                                "Recommended by someone",
                                "Information from friends",
                                "Arranged by school's job placement officer",
                                "Family Business",
                                "Job fair or public employment service office (PESO)",
                                "Other"
                            ],
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: DatJob(Job).Q5(),
                                    backgroundColor: 'orange'
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y',
                        }}
                    />
                </div>
            </div>
            <div className='flexRow '>
                <div className="charts">
                    <h2>Job level position</h2>
                    <Bar
                        data={{
                            labels: [
                                "Clerical",		
                                "Professional",		
                                "Managerial",	
                                "Self-employed",
                            ],
                            datasets: [
                                {
                                    label: "First Job",
                                    data: DatJob(Job).Q9().fstJob,
                                },
                                {
                                    label: "Current Job",
                                    data: DatJob(Job).Q9().currJob,
                                },
                            ],
                        }}
                    />
                </div>
                <div  className="person-pie charts">
                    <h2>INITIAL GROSS MONTHLY EARNING IN YOUR FIRST JOB AFTER COLLEGE</h2>
                    <Pie
                        data={{
                            labels: DatJob(Job).Q10().map(data => data.gross),
                            datasets: [
                                {
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q10().map(data => data.count),
                                },
                            ],
                        }}
                    />
                </div>                    
                <div className="person-pie charts">
                    <h2>WAS THE CURRICULUM YOU HAD IN COLLEGE RELEVANT TO YOUR FIRST JOB?</h2>
                    <Pie
                        data={{
                            labels: DatJob(Job).Q11().map(data => data.yesNo),
                            datasets: [
                                {
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q11().map(data => data.count),
                                },
                            ],
                        }}
                    />
                </div> 
            </div>
            <div>
                <h2>Useful learnings in college</h2>
                    <Bar
                        data={{
                            labels: [
                                "Communication Skills",
                                "Human Relation Skills",
                                "Entrepreneurial Skills",
                                "Information Technology Skills",
                                "Problem-solving skills",
                                "Critical Thinking Skills",
                                "Other"
                            ],
                            datasets: [
                                {
                                    axis: 'y',
                                    label: ["Alumni"],
                                    data: DatJob(Job).Q12(),
                                    backgroundColor: 'blue'
                                },
                            ],
                        }}
                        options={{
                            indexAxis: 'y',
                        }}
                    />
                </div>                   
                <div className="charts">
                    <h2>SUGGESTIONS TO FURTHER IMPROVE YOUR COURSE CURRICULUM.</h2>
                    {Job != null ? Job.map((data) => <p>{data.quesAns13}</p>) 
                     : ""}
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Job
