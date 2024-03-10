import React from 'react'
import { Pie, Bar } from 'react-chartjs-2'

const Education = () => {
  return (
    <div>
      <div className='flexRow'>
        <div className="person-pie charts">
            <h2>Educational Attainment</h2>
            <Pie
                data={{
                    labels: ['BS in Computer Science', 
                    'BS in Information Technology',
                    'BS in Information System',
                    ],
                    datasets: [
                        {
                          label: 'Presently Employed',
                          data: [40, 50, 20],
                        }
                    ],
                }}
            />
        </div>
        <div className="person-pie charts">
          <h2>Year Graduated</h2>
          <Pie
              data={{
                  labels: ['2021', 
                  '2022',
                  ],
                  datasets: [
                      {
                        label: 'Presently Employed',
                        data: [40, 50]
                      }
                  ],
              }}
          />
        </div>
      </div>
      <div>
      <div className="charts">
          <h2>Reasons for Taking the course(s) or pursuing degree(s)</h2>
            <Bar
                data={{
                    labels: [
                    'High grades in the course of subject',
                    'Good grades in high school',
                    'Influence of Parents or relatives',
                    'Peer influence',
                    'Inspired by a role model',
                    'Strong passion for the profession',
                    'Prospect for immediate employment',
                    'Status or prestige of the profession',
                    'Availability of course offering in chosen institution',
                    'Prospect of career advancement',
                    'Affordable for the family',
                    'Prospect of attractive compensation',
                    'Opportunity for employment abroad',
                    'No particular choice or no better idea',
                    ],
                    datasets: [
                        {
                            axis: 'x',
                            label: "Undergraduate",
                            data: [10, 20, 33, 10, 20, 33, 10, 20, 33, 10, 20, 33, 10, 20, 33],
                            backgroundColor: 'blue'
                        },
                        {
                          axis: 'x',
                          label: "Graduate",
                          data: [40, 20, 54, 40, 20, 54, 40, 20, 54, 40, 20, 54, 40, 20, 54],
                          backgroundColor: 'red'
                        },
                        
                    ],
                }}
                options={{
                    indexAxis: 'x',
                }}
            />
        </div>
        <div className="charts">
          <h2>Pursue advance studies</h2>
            <Bar
                data={{
                    labels: [
                    'Promotion',
                    'Professional Development',
                    
                    ],
                    datasets: [
                        {
                            axis: 'y',
                            label: "Pursue advance studies?",
                            data: [10, 20],
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

export default Education