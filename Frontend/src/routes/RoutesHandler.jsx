import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PagesLayout from '../_root/PagesLayout'
import HomePage from '../_root/pages/User/HomePage'
import UserDashboard from '../_root/pages/User/UserDashboard'
import DashboardNavBar from '../components/DashboardNavBar'
import BookDetailCard from '../components/BookDetailCard'
import PaidBookDetail from '../components/PaidBookDetail'
import CartPage from '../_root/pages/User/CartPage'
import LibrariesPage from '../_root/pages/User/LibrariesPage'

const RoutesHandler = () => {
  return (
    <main>
      <Routes>
        <Route element={<PagesLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<UserDashboard />}/>
          {/* <Route path='/dashboardNavbar' element={<DashboardNavBar />}/> */}
          <Route path='/freeDetail/:id' element={<BookDetailCard />}/>
          <Route path='/paidDetail/:id' element={<PaidBookDetail />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/library' element={<LibrariesPage />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default RoutesHandler


