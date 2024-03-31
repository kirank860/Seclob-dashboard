import React from 'react'
import logo2 from "../assets/Logo_company.svg"
import dashboard from "../assets/dashboard.svg"
import upload from "../assets/upload.svg"
import invoice from "../assets/invoice.svg"
import schedule from "../assets/schedule.svg"
import calender from "../assets/Calendar.svg"
import notification from "../assets/Notification.svg"
import settings from "../assets/Setting.svg"
import Navbar from '../Navbar'

const Upload = () => {
  return (
    <div className='flex  bg-[#F5F5F5] h-screen'>
   <div className='bg-white w-[220px] flex justify-center'>
    <div className=' mt-10 '>
      <img src={logo2}/>
      <ul className='ml-[-20px] mt-5'>
      <li className='flex'> <img src={dashboard} alt='icon' /><span className='ml-3 py-5'> Dashboard </span></li>
      <li className='flex'> <img src={upload} alt='icon'/><span className='ml-3 py-5'> Upload </span></li>
      <li className='flex'> <img src={invoice} alt='icon'/><span className='ml-3 py-5'> Invoice </span></li>
      <li className='flex'> <img src={schedule}alt='icon' /><span className='ml-3 py-5'> Schedule </span></li>
      <li className='flex'> <img src={calender}alt='icon' /><span className='ml-3 py-5'> Calendar </span></li>
      <li className='flex'> <img src={notification}alt='icon' /><span className='ml-3 py-5'> Notification </span></li>
      <li className='flex'> <img src={settings}  alt='icon' /><span className='ml-3 py-5'> Settings </span></li>
    </ul>
    </div>
   </div>
   {/* navbar--- */}
   <Navbar/>
    </div>
  )
}

export default Upload
