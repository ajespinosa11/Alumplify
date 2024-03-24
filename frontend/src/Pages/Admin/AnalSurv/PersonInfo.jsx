
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";
import React, { useState, useEffect } from 'react';
import datPers from '../DataSurv/DatPers'


const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {

    const [persondata, setPersonInfo] = useState([]);

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
      <div>
          <div className="content">
              <h1 id='personinfo-title'>Alumni Personal information Data</h1>
              <div className="charts">
                  <h2>Alumni Ages</h2>
                  <Bar
                      data={{
                          labels: datPers().datQ1().map((group) => group.age),
                          datasets: [
                              {
                                  label: "No. of Alumni",
                                  data: datPers().datQ1().map((group) => group.count),
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
          </div>
      </div>
    )
}

export default AdminPersonInfo
