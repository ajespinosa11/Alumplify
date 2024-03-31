import React, { useEffect, useState } from 'react'
import { Pie, Bar } from 'react-chartjs-2'
import DatEduc from '../DataSurv/DatEduc'

const Education = () => {

  const [education, setEduc] = useState(null)

    useEffect(() => {
        const fetchSurv = async () => {
          try{
            const response = await fetch('/api/contents/response/Educ/')
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }else if (response.ok){
              const json = await response.json()
              setEduc(json) 
            }
          } catch(e) {
            console.error('Error fetching data:', e);
          }
        }
        fetchSurv()
    }, [])

    DatEduc(education).Q4()
  return (
    <div>
      <div className='flexRow'>
        <div className="person-pie charts">
            <h2>Educational Attainment</h2>
            <Pie
                data={{
                    labels: DatEduc(education).Q1().map((group) => group.crs),
                    datasets: [
                        {
                          label: ["Alumni"],
                          data: DatEduc(education).Q1().map((group) => group.count),
                        }
                    ],
                }}
            />
        </div>
        <div className="person-pie charts">
          <h2>Year Graduated</h2>
          <Pie
              data={{
                  labels: DatEduc(education).Q2().map((group) => group.year),
                  datasets: [
                      {
                        label: DatEduc(education).Q2().map((group) => group.year),
                        data: DatEduc(education).Q2().map((group) => group.count)
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
                            data: DatEduc(education).Q4().undGrad,
                            backgroundColor: 'blue'
                        },
                        {
                          axis: 'x',
                          label: "Graduate",
                          data: DatEduc(education).Q4().grad,
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
                    labels: DatEduc(education).Q7().map((group) => group.purs),
                    datasets: [
                        {
                            axis: 'y',
                            data: DatEduc(education).Q7().map((group) => group.count),
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