import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";

const Job = () => {
    const [job, setJob] = useState(null)
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
                                labels: sampleData.boolean.map((data) => data.label),
                                datasets: [
                                    {
                                        data: sampleData.boolean.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="person-pie charts">
                        <h2>First job related to the course took up to the college</h2>
                        <Pie
                            data={{
                                labels: sampleData.gender.map((data) => data.label),
                                datasets: [
                                    {
                                        data: sampleData.gender.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="charts">
                    <h2>Reason for staying on the job</h2>
                    <Bar
                        data={{
                            labels: sampleData.regions.map((data) => data.label),
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: sampleData.regions.map((data) => data.value),
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
                            labels: sampleData.regions.map((data) => data.label),
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: sampleData.regions.map((data) => data.value),
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
                            labels: sampleData.regions.map((data) => data.label),
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: sampleData.regions.map((data) => data.value),
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
                            labels: sampleData.gender.map((data) => data.label),
                            datasets: [
                                {
                                    data: sampleData.gender.map((data) => data.value),
                                },
                            ],
                        }}
                    />
                </div>
                <div className="person-pie charts">
                    <h2>How long to land first job</h2>
                    <Pie
                        data={{
                            labels: sampleData.gender.map((data) => data.label),
                            datasets: [
                                {
                                    data: sampleData.gender.map((data) => data.value),
                                },
                            ],
                        }}
                    />
                </div>
                <div className="charts">
                    <h2>How did you find your first job</h2>
                    <Bar
                        data={{
                            labels: sampleData.regions.map((data) => data.label),
                            datasets: [
                                {
                                    axis: 'y',
                                    label: "No. of Alumni",
                                    data: sampleData.regions.map((data) => data.value),
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
                            labels: sampleData.age.map((data) => data.label),
                            datasets: [
                                {
                                    label: "No. of Alumni",
                                    data: sampleData.age.map((data) => data.value),
                                },
                            ],
                        }}
                    />
                </div>
                <div  className="person-pie charts">
                    <h2>INITIAL GROSS MONTHLY EARNING IN YOUR FIRST JOB AFTER COLLEGE</h2>
                    <Pie
                        data={{
                            labels: sampleData.gender.map((data) => data.label),
                            datasets: [
                                {
                                    data: sampleData.gender.map((data) => data.value),
                                },
                            ],
                        }}
                    />
                </div>                    
                <div className="person-pie charts">
                    <h2>WAS THE CURRICULUM YOU HAD IN COLLEGE RELEVANT TO YOUR FIRST JOB?</h2>
                    <Pie
                        data={{
                            labels: sampleData.gender.map((data) => data.label),
                            datasets: [
                                {
                                    data: sampleData.gender.map((data) => data.value),
                                },
                            ],
                        }}
                    />
                </div> 
            </div>                   
                <div className="charts">
                    <h2>SUGGESTIONS TO FURTHER IMPROVE YOUR COURSE CURRICULUM.</h2>
                    <p>Suggestion 1</p>
                    <p>Suggestion 1</p>
                    <p>Suggestion 1</p>
                    <p>Suggestion 1</p>
                    <p>Suggestion 1</p>
                </div>
            </div>
        </div>
    )
}

export default Job
