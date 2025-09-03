import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
     <div>
      <div>
        <Navbar/>
      </div>
      <div className='flex gap-3'>
        
        <Sidebar activeMenu={activeMenu}/>
        <div>
          {children}
        </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout