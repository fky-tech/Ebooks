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
import Footer from '../components/footer'
import AuthLayout from '../_auth/AuthLayout'
import UserLoginForm from '../_auth/user/UserLoginForm'
import UserRegisterForm from '../_auth/user/UserRegisterForm'

const RoutesHandler = () => {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<UserLoginForm />} />
          <Route path='/register' element={<UserRegisterForm />}/>
        </Route>
        <Route element={<PagesLayout />}>
          <Route path='/' element={<HomePage />}/>
          {/* <Route path='/footer' element={<Footer />} /> */}
          <Route path='/dashboard' element={<UserDashboard />}/>
          {/* <Route path='/dashboardNavbar' element={<DashboardNavBar />}/> */}
          <Route path='/freeDetail/:id' element={<BookDetailCard />}/>
          <Route path='/paidDetail/:id' element={<PaidBookDetail />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/library/:id' element={<LibrariesPage />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default RoutesHandler


