import Sidenavbar from "../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";
import React, { useState, useEffect } from 'react';


const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {

    const [persondata, setPersonInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from the API endpoint
            const response = await fetch('http://localhost:5000/api/content');
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

      const groupAges = (data) => {
        const ageMap = new Map();
        data.forEach((item) => {
            const age = item.age;
          ageMap.set(age, (ageMap.get(age) || 0) + 1);
        });
    
        // Convert map to array of objects
        const groupedAges = Array.from(ageMap, ([age, count]) => ({ age, count }));
    
        return groupedAges;
      };
    
      // Group similar ages
      const ageGroups = groupAges(persondata);

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
                                labels: ageGroups.map((group) => group.age),
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
                                labels: sampleData.civil.map((data) => data.label),
                                datasets: [
                                    {
                                        data: sampleData.civil.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
                        <h2>Alumni Gender</h2>
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
                        <h2>Region of Origin</h2>
                        <Bar
                            data={{
                                labels: filteredData.map((data) => data.label),
                                datasets: [
                                    {
                                        axis: 'y',
                                        label: "No. of Alumni",
                                        data: filteredData.map((data) => data.value),
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
                                labels: sampleData.residence.map((data) => data.label),
                                datasets: [
                                    {
                                        data: sampleData.residence.map((data) => data.value),
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
