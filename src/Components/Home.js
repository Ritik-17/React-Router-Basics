import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    
    <div>
        <Outlet/>
        <div>Home</div>
     </div>
  )
}

export default Home