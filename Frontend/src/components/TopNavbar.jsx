import React, { useState } from 'react'

const TopNavbar = () => {
  const toggleMenu = () => {
    const navItems = document.querySelector('.navItems');
    navItems.classList.toggle('active');
  }

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='max-w-1xl'>
        <div className='relative h-16'>
          {/* make the toggle buttons */}
          <div className='lg:hidden block absolute right-14'>
            <button className='flex flex-col space-y-1.5 h-14 justify-center'>
              <span className='bg-white w-6 h-0.5'></span>
              <span className='bg-white w-6 h-0.5'></span>
              <span className='bg-white w-6 h-0.5'></span>
            </button>
          </div>
          <div className='relative navItems hidden lg:block'>
            <div className='absolute left-28 flex h-14 items-center space-x-12'>
              {/* <div className='hidden lg:block'> */}
                <div className='flex space-x-12'>
                  <div className=''>
                    <h1>Logo</h1>
                  </div>
                  <a href="">Home</a>
                  <a href="">Books</a>
                  <a href="">Libraries</a>
                  <a href="">Contact</a>
                </div>
              {/* </div> */}
            </div>
            <div className='absolute right-28 flex h-14 items-center'>
              {/* <div className='hidden lg:block'> */}
                <div className='flex space-x-12'>
                  <a href="">Login</a>
                  <a href="">SignUp</a>
                  <a href="">Cart</a>
                </div>
              {/* </div> */}
            </div>
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

export default TopNavbar
