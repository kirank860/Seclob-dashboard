import React from 'react'
import bell from "./assets/bell.svg"
import profile from "./assets/profile.svg"
import Sheetone from "./Components/Sheetone"
const Navbar = () => {
  return (
    <div className='w-full h-screen'>
    <nav className='flex flex-wrap justify-between items-center m-10'>
      <div>
        <h1 className='text-[#000000] text-2xl'>Upload CSV</h1>
      </div>
      <div className='flex items-center space-x-4'>
        <span><img src={ bell} alt='bell'/></span>
        <span><img src={profile} alt='profile'/></span>
      </div>
    </nav>
    <div className='flex mt-[150px] items-center justify-center'>
<Sheetone/>
    </div>
  
  </div>
  
  )
}

export default Navbar
