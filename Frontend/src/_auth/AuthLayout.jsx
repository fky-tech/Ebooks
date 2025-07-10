import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-slate-700'>
        <Outlet />
    </div>
  )
}

export default AuthLayout
