import React, { useState } from 'react'

const DashboardNavBar = () => {
  const toggleMenu = () => {
    const navItems = document.querySelector('.navItems');
    // toggle add if the class doesn't exists and remove if it's exists
    navItems.classList.toggle('active');

    const topBar = document.querySelector('.top-bar');
    topBar.classList.toggle('activeTopBar')
  }

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='max-w-1xl'>
        <div className='top-bar h-16'>
          {/* make the toggle buttons */}
          <div className='lg:hidden block absolute right-14'>
            <button className='flex flex-col space-y-1.5 h-14 justify-center' onClick={toggleMenu}>
              <span className='bg-white w-6 h-0.5'></span>
              <span className='bg-white w-6 h-0.5'></span>
              <span className='bg-white w-6 h-0.5'></span>
            </button>
          </div>
          <div className='w-[100vw] lg:flex lg:flex-row lg:items-center lg:space-x-14 lg:h-14'>
            <div className='pt-5 lg:pt-0 pl-20'>
              <h1>Logo</h1>
            </div>
            <div className='w-full navItems hidden lg:block mt-12 lg:mt-0'>
              <div className='w-full lg:justify-between flex flex-col items-center lg:flex-row space-y-5 lg:space-y-0 lg:mt-0'>
                {/* <div className='hidden lg:block'> */}
                  {/* <div className='flex space-x-12 '> */}
                    {/* <div className=''>
                      <h1>Logo</h1>
                    </div> */}
                    {/* <div className='nav-links flex flex-col lg:space-x-12 lg:flex-row mt-44 lg:mt-0'> */}
                    <div className='nav-links flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0'>
                      <a href="">Home</a>
                      <a href="">Books</a>
                      <a href="">Libraries</a>
                      <a href="">Contact</a>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0 lg:mr-24'>
                      <a href="">cart</a>
                      <a href="">light/dark</a>
                      <a href="">profile pic</a>
                    </div>
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
            {/* <div className=' flex h-14 items-center justify-center'> */}
              {/* <div className='hidden lg:block'> */}
                {/* <div className='flex flex-col lg:flex-row lg:space-x-12'>
                  <a href="">Login</a>
                  <a href="">SignUp</a>
                  <a href="">Cart</a>
                </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </nav>
    // <div className='top-bar h-16 bg-cyan-800'>
    //   <div className='w-full toggle-icons flex flex-col gap-1 sm:hidden' onClick={toggleMenu}>
    //     <div className='toggle-icon bg-white w-6 h-0.5'></div>
    //     <div className='bg-white w-6 h-0.5'></div>
    //     <div className='bg-white w-6 h-0.5'></div>
    //   </div>
    //   <nav className='nav-menu flex justify-between'>
    //     <nav className='left-navbar flex gap-6'>
    //       <h1>Logo</h1>
    //       <ul className='flex gap-5'>
    //         <li><a href="">Home</a></li>
    //         <li><a href="">Books</a></li>
    //         <li><a href="">Libraries</a></li>
    //         <li><a href="">Contact</a></li>
    //       </ul>
    //     </nav>
    //     <nav className='right-navbar'>
    //       <ul className='flex gap-5'>
    //         <li><a href="">Login</a></li>
    //         <li><a href="">SignUp</a></li>
    //         <li><a href=""></a>Cart</li>
    //       </ul>
    //     </nav>
    //   </nav>
    // </div>
  )
}

export default DashboardNavBar
