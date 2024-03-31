import React, { useState } from "react";
import burger from "./assets/burger.svg";
import close from "./assets/close.svg";
import logo from "./assets/Logo_company.svg";
import bell from "./assets/bell.svg";
import profile from "./assets/profile.svg";
import dashboard from "./assets/dashboard.svg";
import upload from "./assets/upload.svg";
import invoice from "./assets/invoice.svg";
import schedule from "./assets/schedule.svg";
import calender from "./assets/Calendar.svg";
import notification from "./assets/Notification.svg";
import settings from "./assets/Setting.svg";
import Sheetone from "./Components/Sheetone";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full relative bg-[#ece9e9be] h-[80px]">
      <div className="flex px-7 flex-wrap justify-between items-center ">
        <div className="flex items-center my-8 justify-center">
          <img src={burger} alt="hamburger" onClick={toggleMenu} />
          <Link to='/'>
            <img
              className="ml-5"
              src={logo}
              style={{ width: "80px" }}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span>
            <img src={bell} alt="bell" />
          </span>
          <span>
            <img src={profile} alt="profile" />
          </span>
        </div>
      </div>
      {/* menu bar toggle */}
      {isMenuOpen && (
    <div className="w-[350px] absolute top-0 left-0 h-screen bg-gray-50 rounded-tr-3xl rounded-br-3xl animate-fadeInRight transform translatex(-180px) transition-transform duration-1000 ease-in-out">

          <div className="flex justify-between mt-8">
            <img
              className="ml-5"
              src={logo}
              style={{ width: "80px" }}
              alt="logo"
            />
            <img src={close} alt="hamburger" onClick={toggleMenu} />
          </div>
          <div className=" px-7 mt-10 ">
            <ul className=" mt-5">
           <Link to='/'>
           <li className="flex">
                {" "}
                <img src={dashboard} alt="icon" />
                <span className="ml-3 py-5"> Dashboard </span>
              </li>
           </Link>
              <li className="flex">
                {" "}
                <img src={upload} alt="icon" />
                <span className="ml-3 py-5"> Upload </span>
              </li>
              <li className="flex">
                {" "}
                <img src={invoice} alt="icon" />
                <span className="ml-3 py-5"> Invoice </span>
              </li>
              <li className="flex">
                {" "}
                <img src={schedule} alt="icon" />
                <span className="ml-3 py-5"> Schedule </span>
              </li>
              <li className="flex">
                {" "}
                <img src={calender} alt="icon" />
                <span className="ml-3 py-5"> Calendar </span>
              </li>
              <li className="flex">
                {" "}
                <img src={notification} alt="icon" />
                <span className="ml-3 py-5"> Notification </span>
              </li>
              <li className="flex">
                {" "}
                <img src={settings} alt="icon" />
                <span className="ml-3 py-5"> Settings </span>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="px-7  mt-5"> 
        <div>
          <h1 className='text-[#000000] text-xl'>Upload CSV</h1>
        </div>
        <div className="mt-10">
          <Sheetone />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
