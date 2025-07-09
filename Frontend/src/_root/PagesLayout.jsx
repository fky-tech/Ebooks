import React from 'react'
import TopNavbar from '../components/TopNavbar'
import { Outlet } from 'react-router-dom'
import DashboardNavBar from '../components/DashboardNavBar'
import Footer from '../components/footer'

const PagesLayout = () => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <div className='fixed left-0 top-0 w-full z-50'>
        <TopNavbar />
        {/* <DashboardNavBar/> */}
      </div>
      <div className=''>
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default PagesLayout
