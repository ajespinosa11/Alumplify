import React, { useEffect } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import sampleData from "./sampledata/sampleData.json";
import Clock from 'react-live-clock';

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

const Dashboard = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#FCF5E5'

  }, [])
  return (
    <div className='adminpage'>
    <div className='admin-navbar'>
      <div>
      <img src="logo.png" alt="" />
      <div className="nav-title">
        <h1>ALUMPLIFY</h1>
        <p>Technological University of the Philippines</p>
      </div>          
      </div>
      <div className="date-time">
        <h1><Clock format="HH:mm:ss" interval={1000} ticking={true}/></h1>
        <div className="date">
          <h3>{formattedDate}</h3>
        </div>
      </div>
    </div>
    <div className="admin-wrapper">
      <div className="content">
        <h1 id='dashboard-title'>OVERVIEW</h1>
        
        <div className="cards flexRow">
          <div className="flexRow data-card">
            <span className="material-symbols-outlined">
              face
            </span>
            <div className='flexColumn data'>
              <h4>RESPONDENTS</h4>
              <h3>69</h3>
            </div>
          </div>
          <div className="flexRow data-card">
            <span class="material-symbols-outlined">
              explore
            </span>
            <div className='flexColumn data'>
              <h4>SITEVISIT</h4>
              <h3>911</h3>
            </div>
          </div>
          <div className="flexRow data-card">
            <span class="material-symbols-outlined">
              person_check
            </span>
            <div className='flexColumn data'>
              <h4>ALUMNI</h4>
              <h3>911</h3>
            </div>
          </div>
          <div className="flexRow data-card">
            <span class="material-symbols-outlined">
              note_stack
            </span>
            <div className='flexColumn data'>
              <h4>ABSTRACT</h4>
              <h3>31</h3>
            </div>
          </div>
        </div>
        
        <div className="flexRow graphs">
          <div className="charts">
            <h3>LAST 6 MONTHS OF ALUMNI DATA </h3>
          <Line
            data={{
              labels: sampleData.respondents.map((data) => data.label),
              datasets: [
                {
                  label: "Register Alumni",
                  data: sampleData.respondents.map((data) => data.value),
                },
                {
                  label: "Alumni Respondents",
                  data: sampleData.respondents.map((data) => data.respondents),
                },
              ],
            }}
          />
        </div>
        <div id='dboard-doughnut' className="charts">
          <h3>Book of Abstract per department</h3>
          <Doughnut
            data={{
              labels: sampleData.boa.map((data) => data.label),
              datasets: [
                {
                  label: "BOA",
                  data: sampleData.boa.map((data) => data.value),
                },
              ],
            }}
          />
        </div>
        <div className="charts data-story">
          <h3>MOST VIEWED STORIES</h3>
          <table>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Date Published</th>
              <th>Views</th>
            </tr>
            <tr>
              <td><span class="material-symbols-outlined">
                feed
              </span></td>
              <td>Alfreds Futterkiste</td>
              <td>01/05/2002</td>
              <td>5000</td>
            </tr>
            <tr>
              <td><span class="material-symbols-outlined">
                feed
              </span></td>
              <td>Centro comercial Moctezuma</td>
              <td>12/12/2005</td>
              <td>8000</td>
            </tr>
            <tr>
              <td><span class="material-symbols-outlined">
                feed
              </span></td>
              <td>Centro comercial Moctezuma</td>
              <td>12/12/2005</td>
              <td>8000</td>
            </tr>
            <tr>
              <td><span class="material-symbols-outlined">
                feed
              </span></td>
              <td>Centro comercial Moctezuma</td>
              <td>12/12/2005</td>
              <td>8000</td>
            </tr>
            <tr>
              <td><span class="material-symbols-outlined">
                feed
              </span></td>
              <td>Centro comercial Moctezuma</td>
              <td>12/12/2005</td>
              <td>8000</td>
            </tr>
          </table>
        </div>
        
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Dashboard