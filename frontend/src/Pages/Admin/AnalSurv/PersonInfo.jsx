
import { Bar, Pie } from "react-chartjs-2";
import sampleData from "../sampledata/sampleData.json";
import React, { useState, useEffect } from 'react';
import datPers from '../DataSurv/DatPers'


const filteredData = sampleData.regions.filter((data) => data.value !== 0);

function AdminPersonInfo() {
    const [person, setPerson] = useState(null)

    useEffect(() => {
        const fetchSurv = async () => {
          try{
            const response = await fetch('/api/contents/response/persInf/')
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }else if (response.ok){
              const json = await response.json()
              setPerson(json) 
            }
          } catch(e) {
            console.error('Error fetching data:', e);
          }
        }
        fetchSurv()
    }, [])

    return (
      <div>
          <div className="content">
              <h1 id='personinfo-title'>Alumni Personal information Data</h1>
              <div className="charts">
                  <h2>Alumni Ages</h2>
                  <Bar
                      data={{
                          labels: datPers(person).Q1().map((group) => group.age),
                          datasets: [
                              {
                                  data: datPers(person).Q1().map((group) => group.count),
                              },
                        
                          ],
                          
                      }}
                  />
              </div>
              <div  className="person-pie charts">
                  <h2>Civil Status</h2>
                  <Pie
                      data={{
                          labels: datPers(person).Q5().map((group) => group.stats),
                          datasets: [
                              {
                                label:datPers(person).Q5().map((group) => group.stats),
                                data: datPers(person).Q5().map((group) => group.count),
                              },
                          ],
                      }}
                  />
              </div>
              <div  className="person-pie charts">
                  <h2>Alumni Gender</h2>
                  <Pie
                      data={{
                          labels: datPers(person).Q6().map((group) => group.gender),
                          datasets: [
                              {
                                label:datPers(person).Q6().map((group) => group.gender),
                                data: datPers(person).Q6().map((group) => group.count),
                              },
                          ],
                      }}
                  />
              </div>
              <div className="charts">
                  <h2>Region of Origin</h2>
                  <Bar
                      data={{
                          labels: datPers(person).Q8().map((group) => group.origin),
                          datasets: [
                              {
                                  axis: 'y',
                                  label: "Region",
                                  data: datPers(person).Q8().map((group) => group.count),
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
