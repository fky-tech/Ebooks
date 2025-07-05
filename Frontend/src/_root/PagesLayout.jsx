import React from 'react'
import TopNavbar from '../components/TopNavbar'
import { Outlet } from 'react-router-dom'

const PagesLayout = () => {
  return (
    <div className="min-h-[100vh]">
      <TopNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PagesLayout
