import Sidenavbar from "../../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import React, { useState, useEffect } from 'react';

//filter regions sample
//const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {

    const [persondata, setPersonInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from the API endpoint
            const response = await fetch('http://localhost:5000/api/aluminfo');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
    
            // Set the fetched data to state
            setPersonInfo(data);
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

        const groupAges = (data) => groupDataByKey(data, 'age');
        const groupCivilStatus = (data) => groupDataByKey(data, 'civil_status');
        const groupGender = (data) => groupDataByKey(data, 'gender');
        const groupRegion = (data) => groupDataByKey(data, 'region');
        const groupResidence = (data) => groupDataByKey(data, 'residence');
        
        const ageGroups = groupAges(persondata);
        const civilStatusGroups = groupCivilStatus(persondata);
        const genderGroups = groupGender(persondata);
        const regionGroups = groupRegion(persondata);
        const residenceGroups = groupResidence(persondata);
    
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
                    <a href=" "><h3>Employment</h3></a>
                    <a href="/Alumni-job"><h3>Job</h3></a>
                </div>
            </div>
            <div className="admin-wrapper">
                <Sidenavbar />
                <div className="content">
                    <h1 id='personinfo-title'>Alumni Personal information Data</h1>
                    <div className="charts">
                        <h2>Alumni Ages</h2>
                        <Bar
                            data={{
                                labels: ageGroups.map((group) => group.age), //group.age yung name nung variable sa db
                                datasets: [
                                    {
                                        label: "No. of Alumni",
                                        data: ageGroups.map((group) => group.count),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>Civil Status</h2>
                        <Pie
                            data={{
                                labels: civilStatusGroups.map((group) => group.civil_status),
                                datasets: [
                                    {
                                        label: " Alumni",
                                        data: civilStatusGroups.map((group) => group.count),
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
                        <h2>Alumni Gender</h2>
                        <Pie
                            data={{
                                labels: genderGroups.map((group) => group.gender),
                                datasets: [
                                    {
                                        label: " Alumni",
                                        data: genderGroups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red for female
                                            'rgba(54, 162, 235, 0.7)', // Blue for male
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div className="charts">
                        <h2>Region of Origin</h2>
                        <Bar
                            data={{
                                labels: regionGroups.map((group) => group.region),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: regionGroups.map((group) => group.count),
                                        backgroundColor: 'orange'
                                    },
                                ],
                            }}
                            options={{
                                indexAxis: 'y',
                            }}
                        />
                    </div>
                    <div id='person-pie-end' className="charts">
                        <h2>Location of Residence</h2>
                        <Pie
                            data={{
                                labels: residenceGroups.map((group) => group.residence),
                                datasets: [
                                    {
                                        label: " Alumni",
                                        data: residenceGroups.map((group) => group.count),
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.7)', // Red for female
                                            'rgba(54, 162, 235, 0.7)', // Blue for male
                                            // You can add more colors if needed
                                        ],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default AdminPersonInfo
