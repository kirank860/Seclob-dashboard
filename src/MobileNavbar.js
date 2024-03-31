import React, { useState } from "react";
import burger from "./assets/burger.svg";
import close from "./assets/close.svg";
import logo from "./assets/Logo_company.svg";
import bell from "./assets/bell.svg";
import profile from "./assets/profile.svg";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full relative bg-[#F5F5F5] h-[80px]">
      <div className="flex px-7 flex-wrap justify-between items-center ">
        <div className="flex items-center my-8 justify-center">
          <img src={burger} alt="hamburger" onClick={toggleMenu} />
          <img className="ml-5" src={logo} style={{ width: '80px' }} alt="logo" />
        </div>
        <div className='flex items-center space-x-4'>
          <span><img src={bell} alt='bell'/></span>
          <span><img src={profile} alt='profile'/></span>
        </div>
      </div>
      {/* menu bar toggle */}
      {isMenuOpen && (
        <div className="w-[350px] absolute top-0 left-0 h-screen bg-gray-50 rounded-tr-3xl rounded-br-3xl">
          <div className="flex justify-between mt-8">
            <img className="ml-5" src={logo} style={{ width: '80px' }} alt="logo" />
            <img src={close} alt="hamburger" onClick={toggleMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
