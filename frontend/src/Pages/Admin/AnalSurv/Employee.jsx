import React, { useEffect, useState } from 'react'
import { Pie, Bar } from 'react-chartjs-2'
import DatEmp from '../DataSurv/DatEmp'

const Employee = () => {
  const [employee, setDatEmp] = useState(null)

  useEffect(() => {
    const fetchSurv = async () => {
      try{
        const response = await fetch('/api/contents/response/Employee')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }else if (response.ok){
          const json = await response.json()
          setDatEmp(json) 
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
      <h1 id=''>Alumni Job data</h1>
        <div className='flexRow'>
         
          <div className='flexColumn '>
            <div className="person-pie charts">
                <h2>Presently Employed</h2>
                <Pie
                    data={{
                        labels: ['YES', 'NO'],
                        datasets: [
                            {
                              label: 'Presently Employed',
                              data: [DatEmp(employee).Q1("YES"), DatEmp(employee).Q1("NO")],
                            }
                        ],
                    }}
                />
            </div>
            <div className="person-pie charts">
                <h2>Employment Status</h2>
                <Pie
                    data={{
                        labels: DatEmp(employee).Q3().map(stat => stat.stats),
                        datasets: [
                            {
                              label: ['Status'],
                              data: DatEmp(employee).Q3().map(stat => stat.count)
                            }
                        ],
                    }}
                />
            </div>
            <div className="person-pie charts">
                <h2>Major Company currently employed</h2>
                <Pie
                    data={{
                        labels: [
                          "AGRICULTURE",
                          "FISHING",
                          "MINING ",
                          "MANUFACTURING",
                          "ELECTRICITY",
                          "CONSTRUCTION",
                          "WHOLESALE TRADE",
                          "HOTELS AND RESTAURANTS",
                          "TRANSPORT ",
                          "FINANCIAL INTERMEDIATION",
                          "REAL ESTATE",
                          "PUBLIC ADMINISTRATION AND DEFENSE",
                          "EDUCATION",
                          "HEALTH AND SOCIAL WORK",
                          "OTHER COMMUNITY",
                          "PRIVATE HOUSEHOLD",
                          "EXTRA-TERRITORIAL ORGANIZATIONS",
                          "IT INDUSTRY"
                        ],
                        datasets: [
                            {
                              label: 'Presently Employed',
                              data: DatEmp(employee).Q6(),
                            }
                        ],
                    }}
                />
            </div>
          </div>
          <div className='flexColumn'>
          <div className="charts">
              <h2>Reason for not currently employed</h2>
                <Bar
                    data={{
                        labels: [
                        'Further Study',
                        'Family concern',
                        'Health-related reason(s)',
                        'Lack of work experience',
                        'No job opportunity',
                        'Did not look for a job',
                        'Other'
                        ],
                        datasets: [
                            {
                                axis: 'y',
                                data: DatEmp(employee).Q2(),
                                backgroundColor: 'orange'
                            },
                        ],
                    }}
                    options={{
                        indexAxis: 'y',
                    }}
                />
            </div>
            <div className="person-pie charts">
                <h2>Place of work or Business</h2>
                <Pie
                    data={{
                        labels: DatEmp(employee).Q8().map(data => data.place),
                        datasets: [
                            {
                              label: ['Presently Employed'],
                              data: DatEmp(employee).Q8().map(data => data.count),
                            }
                        ],
                    }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee