"use client"
import React from 'react'
import { useState } from "react";
import Link from "next/link";

const Result = () => {
  const [showcnicError, setShowcnicError] = useState(false);
  const [showrnumError, setShowrnumError] = useState(false);

  const handlecnicFocus = () => {
    setShowcnicError(true); // Show the error message on focus
  };

  const handlecnicBlur = () => {
    setShowcnicError(false); // Hide the error message on blur
  };

  const handlernumFocus = () => {
    setShowrnumError(true); // Show the error message on focus
  };

  const handlernumBlur = () => {
    setShowrnumError(false); // Hide the error message on blur
  };
  return (
    <>

     <div className=" xs:pl-[50px] sm:pl-[350px] justify-center items-center h-[500px] ">
     <div>
    {/* Title */}
    <h1 className="xs:pl-5 sm:pl-32  text-main xs:text-2xl sm:text-4xl md:text-6xl">
    Grand Entrance Exam Result
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
              Registration Number *
            </label>
            <div className="relative mt-1 flex">
              <input
                type="Registration Number"
                id="Registration Number"
                placeholder="Registration Number"
                onFocus={handlernumFocus}
              onBlur={handlernumBlur}
              className={`mt-1 w-full px-3 sm:px-4 py-2 border ${
                showrnumError ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-main focus:border-main`}
              />
              
            </div>
            {showrnumError && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                Registration Number is required
              </p>
            )}
          </div>

          {/* OTP Field */}
          <div>
            <label
              htmlFor="otp"
              className="block xs:text-xl sm:text-2xl font-medium text-gray-700"
            >
            CNIC or B-Form Number *
            </label>
            <input
              type="CNIC or B-Form Number"
              id="CNIC or B-Form Number"
              placeholder="CNIC or B-Form Number"
              onFocus={handlecnicFocus}
              onBlur={handlecnicBlur}
              className={`mt-1 w-full px-3 sm:px-4 py-2 border ${
                showcnicError ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-main focus:border-main`}
            />
            {showcnicError && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                CNIC must be 13 characters.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className=' flex  mb-7 mt-5 xs:flex-col sm:flex-row  '>
        <Link href={'/pages/Apply'} className='xs:w-full sm:w-auto'>
        <button className=' xs:w-full sm:w-72 sm:ml-40 rounded-md h-[50px] bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base ' >
        GET RESULT

        </button>
        </Link>
       
    </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Result
