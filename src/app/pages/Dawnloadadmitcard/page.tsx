"use client"
import React from 'react'
import Link from "next/link";
import { useState } from "react";

const AdmitCardForm = () => {
  const [showOtpError, setShowOtpError] = useState(false);
  const [showemailError, setShowemailError] = useState(false);

  const handleOtpFocus = () => {
    setShowOtpError(true); // Show the error message on focus
  };

  const handleOtpBlur = () => {
    setShowOtpError(false); // Hide the error message on blur
  };

  const handleemailFocus = () => {
    setShowemailError(true); // Show the error message on focus
  };

  const handleemailBlur = () => {
    setShowemailError(false); // Hide the error message on blur
  };

  return (
    
    <>

     <div className=" xs:pl-[50px] sm:pl-[350px] justify-center items-center h-[500px] ">
     <div>
    {/* Title */}
    <h1 className="xs:pl-5 sm:pl-44  text-main xs:text-4xl sm:text-4xl md:text-6xl">
      Download Admit Card
    </h1>
    </div>
      <div className=" mt-10  xs:w-[90%] sm:w-[70%] sm:h-[400px]   bg-white box_shadow rounded-lg p-4 sm:p-6"> 
       

        {/* Form */}
        <form className="space-y-3 sm:space-y-4 mt-10">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block xs:text-xl  sm:text-2xl font-medium text-gray-700"
            >
              Email *
            </label>
            <div className="relative mt-1 flex">
              <input
                type="email"
                id="email"
                placeholder="Email"
                onFocus={handleemailFocus}
              onBlur={handleemailBlur}
              className={`mt-1 w-full px-3 sm:px-4 py-2 border ${
                showemailError ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-main focus:border-main`}
              />
              
              <button
                type="button"
                className="px-3 sm:px-4 py-2 bg-main text-white text-sm font-medium rounded hover:bg-main focus:outline-none focus:ring-2 focus:ring-main"
              >
                Send OTP
              </button>
              
            </div>
            {showemailError && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                Email is required
              </p>
            )}
          </div>

          {/* OTP Field */}
          <div>
            <label
              htmlFor="otp"
              className="block xs:text-xl sm:text-2xl font-medium text-gray-700"
            >
              OTP *
            </label>
            <input
              type="text"
              id="otp"
              placeholder="OTP"
              onFocus={handleOtpFocus}
              onBlur={handleOtpBlur}
              className={`mt-1 w-full px-3 sm:px-4 py-2 border ${
                showOtpError ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-main focus:border-main`}
            />
            {showOtpError && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                OTP must be 6 characters
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className=' flex  mb-7 mt-5 xs:flex-col sm:flex-row  '>
        <Link href={'/pages/Apply'} className='xs:w-full sm:w-auto'>
        <button className=' xs:w-full sm:w-72 sm:ml-40 rounded-md h-[50px] bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base ' >
        GET CARD

        </button>
        </Link>
       
    </div>
        </form>
      </div>
    </div>
    </>
   
  );
}
export default AdmitCardForm;