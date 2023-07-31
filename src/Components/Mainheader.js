import React from 'react'
import { Outlet } from 'react-router-dom'

const Mainheader = () => {
  return (
    <div>
    {/* outlet allows the parent element to render child elements */}
        <Outlet/>
    </div>
  )
}

export default Mainheader