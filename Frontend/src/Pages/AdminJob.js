import React from 'react'
import Sidenavbar from "../components/Side-navbar";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";

function AdminJob() {
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
                                labels: sampleData.boolean.map((data) => data.label),
                                datasets: [
                                    {
                                        data: sampleData.boolean.map((data) => data.value),
                                    },
                                ],
                            }}
                        />
                    </div>
                    <div id='person-pie' className="charts">
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
                    <div id='person-pie' className="charts">
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
                    <div id='person-pie' className="charts">
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
                    <div id='person-pie' className="charts">
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
                    <div id='person-pie' className="charts">
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
