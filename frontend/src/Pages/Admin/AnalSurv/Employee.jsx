import React, { useEffect, useState } from 'react'
import { Pie, Bar } from 'react-chartjs-2'
import DatEmp from '../DataSurv/DatEmp'

const Employee = () => {

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
                              data: [DatEmp().datQ1("YES"), DatEmp().datQ1("NO")],
                            }
                        ],
                    }}
                />
            </div>
            <div className="person-pie charts">
                <h2>Employment Status</h2>
                <Pie
                    data={{
                        labels: ['Regular/Permanent', 
                        'Temporary',
                        'Casual',
                        'Contractual',
                        'Self-Employed'],
                        datasets: [
                            {
                              data: [40, 50, 30, 20, 60],
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
                        'Agriculture', 
                        'Fishing',
                        'Mining',
                        'Manufacturing',
                        'Electricity',
                        'Construction',
                        'Wholesale and Trade',
                        'Hotels and Restaurants'],
                        datasets: [
                            {
                              label: 'Presently Employed',
                              data: [40, 50, 30, 20, 60, 30, 40, 10],
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
                        'Did not look for a job'
                        ],
                        datasets: [
                            {
                                axis: 'y',
                                label: "Reason not employed",
                                data: [10, 20, 40, 50, 30],
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
                        labels: ['Local', 'Abroad'],
                        datasets: [
                            {
                              label: 'Presently Employed',
                              data: [10, 30],
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