import React, { useState, useEffect } from 'react';
import Sidenavbar from "../../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../../sampledata/sampleData.json";

const AdminJob = () => {

    const [personjob, setPersonJob] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from the API endpoint
            const response = await fetch('http://localhost:5000/api/alumjob');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
    
            // Set the fetched data to state
            setPersonJob(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const groupDataByKey = (data, key) => {
        const dataMap = new Map();
        data.forEach((item) => {
            const value = item[key];
            dataMap.set(value, (dataMap.get(value) || 0) + 1);
        });
    
        return Array.from(dataMap, ([value, count]) => ({ [key]: value, count }));
    };

    const groupQuest1 = (data) => groupDataByKey(data, 'Question1');
    const groupQuest2 = (data) => groupDataByKey(data, 'Question2');
    const groupQuest3 = (data) => groupDataByKey(data, 'Question3');
    const groupQuest4 = (data) => groupDataByKey(data, 'Question4');
    const groupQuest5 = (data) => groupDataByKey(data, 'Question5');
    const groupQuest6 = (data) => groupDataByKey(data, 'Question6');
    const groupQuest7 = (data) => groupDataByKey(data, 'Question7');
    const groupQuest8 = (data) => groupDataByKey(data, 'Question8');
    const groupQuest9 = (data) => groupDataByKey(data, 'Question9');
    const groupQuest10 = (data) => groupDataByKey(data, 'Question10');
    const groupQuest11 = (data) => groupDataByKey(data, 'Question11');
    

    const quest1Groups = groupQuest1(personjob);
    const quest2Groups = groupQuest2(personjob);
    const quest3Groups = groupQuest3(personjob);
    const quest4Groups = groupQuest4(personjob);
    const quest5Groups = groupQuest5(personjob);
    const quest6Groups = groupQuest6(personjob);
    const quest7Groups = groupQuest7(personjob);
    const quest8Groups = groupQuest8(personjob);
    const quest9Groups = groupQuest9(personjob);
    const quest10Groups = groupQuest10(personjob);
    const quest11Groups = groupQuest11(personjob);
    

    
    return (
        <body>
            <div className='admin-navbar'>
                <div>
                    <img src="logo.png" alt="" />
                    <div className="nav-title">
                        <h1>ALUMPLIFY</h1>
                        <p>Technological University of the Philippines</p>
                    </div>
                </div>
                <div className="navdata">
                    <a href="/Personal-information"><h3>Personal Information</h3></a>
                    <a href=" "><h3>Education</h3></a>
                    <a href="/Alumni-job"><h3>Employment</h3></a>
                    <a href="/Alumni-job"><h3>Job</h3></a>
                </div>
            </div>
            <div className="admin-wrapper">
                <Sidenavbar />
                <div className="content">
                    <h1 id=''>Alumni Job data</h1>
                <div id='person-pie' className="charts">
                        <h2>First job after college</h2>
                        <Pie
                            data={{
                                labels: quest1Groups.map((group) => group.Question1),
                                datasets: [
                                    {
                                        data: quest1Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>First job related to the course took up to the college</h2>
                        <Pie
                            data={{
                                labels: quest2Groups.map((group) => group.Question2),
                                datasets: [
                                    {
                                        data: quest2Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="charts">
                        <h2>Reason for staying on the job</h2>
                        <Bar
                            data={{
                                labels: quest3Groups.map((group) => group.Question3),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: quest3Groups.map((group) => group.count),
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
                        <h2>Reason for accepting job</h2>
                        <Bar
                            data={{
                                labels: quest4Groups.map((group) => group.Question4),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: quest4Groups.map((group) => group.count),
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
                                labels: quest5Groups.map((group) => group.Question5),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: quest5Groups.map((group) => group.count),
                                        backgroundColor: 'orange'
                                    },
                                ],
                            }}
                            options={{
                                indexAxis: 'y',
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>How long stay on first job</h2>
                        <Pie
                            data={{
                                labels: quest6Groups.map((group) => group.Question6),
                                datasets: [
                                    {
                                        data: quest6Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>How long to land first job</h2>
                        <Pie
                            data={{
                                labels: quest7Groups.map((group) => group.Question7),
                                datasets: [
                                    {
                                        data: quest7Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="charts">
                        <h2>How did you find your first job</h2>
                        <Bar
                            data={{
                                labels: quest8Groups.map((group) => group.Question8),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: quest8Groups.map((group) => group.count),
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
                        <h2>Job level position</h2>
                        <Bar
                            data={{
                                labels: quest9Groups.map((data) => data.Question9),
                                datasets: [
                                    {
                                        label: "No. of Alumni",
                                        data: quest9Groups.map((data) => data.count),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>INITIAL GROSS MONTHLY EARNING IN YOUR FIRST JOB AFTER COLLEGE</h2>
                        <Pie
                            data={{
                                labels: quest10Groups.map((group) => group.Question10),
                                datasets: [
                                    {
                                        data: quest10Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>                    
                    <div id='person-pie' className="charts">
                        <h2>WAS THE CURRICULUM YOU HAD IN COLLEGE RELEVANT TO YOUR FIRST JOB?</h2>
                        <Pie
                            data={{
                                labels: quest11Groups.map((group) => group.Question11),
                                datasets: [
                                    {
                                        data: quest11Groups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red
                                            'rgba(54, 162, 235, 0.7)', // Blue
                                            'rgba(255, 206, 86, 0.7)', // Yellow
                                            'rgba(75, 192, 192, 0.7)', // Green
                                            'rgba(153, 102, 255, 0.7)', // Purple
                                            'rgba(255, 159, 64, 0.7)' // Orange
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
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
        </body>
    )
}

export default AdminJob
