import React from "react";
import { Link, useLocation } from "react-router-dom";
import excel from "../assets/excel.svg";
import refresh from "../assets/refresh.svg";
import Uploaded from "../assets/uploaded.svg";
import Uploads from "./Uploads";

const Sheetone = () => {
  const location = useLocation();
  const isUploadRoute = location.pathname === "/upload";
  const isUploadingRoute = location.pathname === "/uploading";
  const isUploadedRoute = location.pathname === "/uploaded";

  return (
    <>
    <div className={`w-[550px] rounded-md h-[300px] bg-[#fff] ${isUploadedRoute ? 'hidden' : ''}`}>
  
      <div className="flex items-center h-full justify-center">
        <div className="items-center justify-center flex">
          <div>
            <img className="mx-auto" src={excel} alt="sheet" />
            {isUploadRoute && (
              <p className="text-gray-600">
                Drop your excel sheet here to{" "}
                <span className="text-blue-600">browse</span>
              </p>
            )}
            {isUploadingRoute && (
              <p className="text-gray-600">
                {" "}
                upload-template.xlsx
                <h4 className="text-red-600 flex items-center justify-center">
                  remove
                </h4>
              </p>
            )}
          </div>
        </div>
      </div>
      <Link to="/uploading">
        {isUploadRoute && (
          <button className="w-full rounded-lg text-white bg-[#605BFF] px-8 py-3 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Upload</span>
          </button>
        )}
      </Link>
  
      <Link to="/uploaded">
        {isUploadingRoute && (
          <button className="w-full rounded-lg text-white bg-[#605BFF] px-8 py-3 flex items-center justify-center">
            <img src={refresh} alt="refresh" />
          </button>
        )}
      </Link>
    </div>
    {isUploadedRoute && (
      <div className="w-full">
 <img  src={Uploaded} alt="refresh" className="mx-auto mt-[-10px]" />
   <Uploads/>
      </div>
    )}
    </>
  );
  };

export default Sheetone;
