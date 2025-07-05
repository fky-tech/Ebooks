import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PagesLayout from '../_root/PagesLayout'
import HomePage from '../_root/pages/User/HomePage'

const RoutesHandler = () => {
  return (
    <main>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route path='/' element={<HomePage />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default RoutesHandler


