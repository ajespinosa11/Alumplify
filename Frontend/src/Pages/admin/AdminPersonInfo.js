<<<<<<< HEAD:Frontend/src/Pages/AdminPersonInfo.js
import Sidenavbar from "../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";
import React, { useState, useEffect } from 'react';

=======
import React from 'react';
import Sidenavbar from "../../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../../sampledata/sampleData.json";
>>>>>>> 7a9a7c07e01fe638da87b9b49875d1cf7c1fca8a:Frontend/src/Pages/admin/AdminPersonInfo.js

const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {

    const [civildata, agedata, setPersonInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch data from the API endpoint
            const response = await fetch('http://localhost:5000/api/alumndata');
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

      //group of age
      const groupData = (data) => {
        const groupMap = new Map();
      
        data.forEach((item) => {
          const age = item.age;
          const civilStatus = item.civil_status;
      
          const key = `${age}_${civilStatus}`;
          groupMap.set(key, (groupMap.get(key) || 0) + 1);
        });
      
        // Convert map to array of objects
        const groupedData = Array.from(groupMap, ([key, count]) => {
          const [age, civilStatus] = key.split('_');
          return { age, civilStatus, count };
        });
      
        return groupedData;
      };
      
      // Group similar ages and civil_statuses
      const groupedData = groupData(civildata);
      
      /*
      
      const renderAgeChart = (ageData) => {
  // Code to render a chart based on ageData
  // Use a library like Chart.js or any other charting library
};

const renderCivilStatusChart = (civilStatusData) => {
  // Code to render a chart based on civilStatusData
  // Use a library like Chart.js or any other charting library
};

// In your component or render function
// ...

// Group similar ages and civil_statuses
const groupedData = groupData(civildata);

// Separate the grouped data for age and civil status
const ageData = groupedData.map(({ age, count }) => ({ label: age, count }));
const civilStatusData = groupedData.map(({ civilStatus, count }) => ({ label: civilStatus, count }));

// Render charts
renderAgeChart(ageData);
renderCivilStatusChart(civilStatusData);

       */


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
                                labels: civilGroups.map((civildata) => civildata.civil_status),
                                datasets: [
                                    {
                                        data: civilGroups.map((civildata) => civildata.civilcount),
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