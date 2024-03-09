import React from 'react';
import Sidenavbar from "../../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../../sampledata/sampleData.json";

const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {
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
