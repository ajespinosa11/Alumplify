import React, { useEffect } from 'react'

const Dashboard = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#FCF5E5'

  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard