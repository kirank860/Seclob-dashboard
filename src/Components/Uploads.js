import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Uploads = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
  return (
    <div className="mt-[50px]  lg:mt-[200px] pb-20 lg:ml-16 md:ml-16 sm:ml-16 ">
      <h1 className="text-2xl text-black">Uploads</h1>
      <div className="overflow-auto">
      <div className="w-[70rem] mt-10  py-5 sm:py-5 sm:px-1 lg:py-5 lg:px-1 md:py-5 md:px-1 rounded-md flex justify-center items-center bg-[#f9f7f7] h-auto ">
        {/* box */}
        <div className="w-full block px-2 py-0 ">
           <div className="flex justify-around pb-5">
            <li>Sl No</li>
            <li>Links</li>
            <li>Prefix</li>
            <li>Add Tags</li>
            <li>Selected Tags</li>
           </div>
        <div className="bg-white mb-3 justify-around py-3 px-2 flex w-full rounded-md">
      <li>01</li>
      <li style={{ color: "blue", textDecoration: "underline" }}>
        <a href="https://www.google.com/">www.google.com</a>
      </li>
      <li>prefixsample</li>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="select tags"> Tag 1</option>
        <option value="select tags"> Tag 2</option>
        <option value="select tags"> Tag 3</option>
        <option value="select tags"> Tag 4</option>
        
        {/* Add more options as needed */}
      </select>
      {selectedOption === 'select tags' && <li className="text-white bg-[#605BFF] py-1 rounded-lg px-5"> tags <FontAwesomeIcon icon={faTimes} /></li>}
      {/* <li>tag 1</li> */}
     
    </div>
    <div className="bg-white mb-3 justify-around py-3  px-2 flex w-full rounded-md">
      <li>02</li>
      <li style={{ color: "blue", textDecoration: "underline" }}>
        <a href="https://www.google.com/">www.google.com</a>
      </li>
      <li>prefixsample</li>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="select tags"> Tag 1</option>
        <option value="select tags"> Tag 2</option>
        <option value="select tags"> Tag 3</option>
        <option value="select tags"> Tag 4</option>
        
        {/* Add more options as needed */}
      </select>
      {selectedOption === 'select tags' && <li className="text-white bg-[#605BFF] py-1 rounded-lg px-5"> tags <FontAwesomeIcon icon={faTimes} /></li>}
      {/* <li>tag 1</li> */}
     
    </div>
    <div className="bg-white mb-3 justify-around py-3  px-2 flex w-full rounded-md">
      <li>03</li>
      <li style={{ color: "blue", textDecoration: "underline" }}>
        <a href="https://www.google.com/">www.google.com</a>
      </li>
      <li>prefixsample</li>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="select tags"> Tag 1</option>
        <option value="select tags"> Tag 2</option>
        <option value="select tags"> Tag 3</option>
        <option value="select tags"> Tag 4</option>
        
        {/* Add more options as needed */}
      </select>
      {selectedOption === 'select tags' && <li className="text-white bg-[#605BFF] py-1 rounded-lg px-5"> tags <FontAwesomeIcon icon={faTimes} /></li>}
      {/* <li>tag 1</li> */}
     
    </div>
    <div className="bg-white mb-3 justify-around py-3  px-2 flex w-full rounded-md">
      <li>02</li>
      <li style={{ color: "blue", textDecoration: "underline" }}>
        <a href="https://www.google.com/">www.google.com</a>
      </li>
      <li>prefixsample</li>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="select tags"> Tag 1</option>
        <option value="select tags"> Tag 2</option>
        <option value="select tags"> Tag 3</option>
        <option value="select tags"> Tag 4</option>
        
        {/* Add more options as needed */}
      </select>
      {selectedOption === 'select tags' && <li className="text-white bg-[#605BFF] py-1 rounded-lg px-5"> tags <FontAwesomeIcon icon={faTimes} /></li>}
      {/* <li>tag 1</li> */}
     
    </div>
    <div className="bg-white mb-3 justify-around py-3  px-2 flex w-full rounded-md">
      <li>02</li>
      <li style={{ color: "blue", textDecoration: "underline" }}>
        <a href="https://www.google.com/">www.google.com</a>
      </li>
      <li>prefixsample</li>
       <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="select tags"> Tag 1</option>
        <option value="select tags"> Tag 2</option>
        <option value="select tags"> Tag 3</option>
        <option value="select tags"> Tag 4</option>
        
        {/* Add more options as needed */}
      </select>
      {selectedOption === 'select tags' && <li className="text-white bg-[#605BFF] py-1 rounded-lg px-5"> tags <FontAwesomeIcon icon={faTimes} /></li>}
      {/* <li>tag 1</li> */}
     
    </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Uploads;
