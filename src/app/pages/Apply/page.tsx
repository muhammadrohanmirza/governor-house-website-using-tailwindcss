import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

const Apply = () => {
  return (
    
    <div id="apply" className=' w-full h-[500px]' >
<center>
    <div id="apply-box" className=' box_shadow xs:w-[90%] sm:w-[50%]  h-[360px] '>
            <div id="heading-div" className='text-main text-center item-center pt-8 pl-10 pr-10'>
                <h1 className='text-2xl sm:text-3xl'>
                    Before continuing to the application please subscribe on these social media platforms.
                </h1>
            </div>

            <div id="icon-div" className='pt-10 '>
                <Link href="https://www.facebook.com/TeamKTessori" target="_blank"><Image className='w-8 h-8 ' id='img' alt='facebook icon' src={require("../../../../public/assests/icon/facebook-circle-logo-36.png")} /></Link>
            </div>

            <div id="button-container" className=''>
                <div id="hover-message">Click the icon above first.</div>
                <button id='btn-continue' className='text-[20px] mt-5 w-[150px] h-[40px] text-gray-300 bg-blue-700 ' >Continue</button>
            </div>

            <div id="text-div" className='text-black pt-5 '>
                <p id='para' className='text-sm '>Already applied?<Link href="/pages/Dawnloadadmitcard" className='underline text-main'> Get Admit Card</Link></p>
            </div>
    </div>
    </center>

    <div className="flex items-center justify-center pt-10 space-x-3 sm:space-x-4 lg:space-x-6">
      {/* Step 1 */}
      <div className="flex items-center space-x-1.5">
        <div className="flex items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-full text-blue-500 text-xs font-semibold">
          1
        </div>
        <span className="text-blue-500 text-xs font-medium">Facebook</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-12 h-px bg-gray-300"></div>

      {/* Step 2 */}
      <div className="flex items-center space-x-1.5">
        <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full text-gray-500 text-xs font-semibold">
          2
        </div>
        <span className="text-gray-500 text-xs font-medium">Youtube</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-12 h-px bg-gray-300"></div>

      {/* Step 3 */}
      <div className="flex items-center space-x-1.5">
        <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full text-gray-500 text-xs font-semibold">
          3
        </div>
        <span className="text-gray-500 text-xs font-medium">Twitter</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-12 h-px bg-gray-300"></div>

      {/* Step 4 */}
      <div className="flex items-center space-x-1.5">
        <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full text-gray-500 text-xs font-semibold">
          4
        </div>
        <span className="text-gray-500 text-xs font-medium">Instagram</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-12 h-px bg-gray-300"></div>

      {/* Step 5 */}
      <div className="flex items-center space-x-1.5">
        <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full text-gray-500 text-xs font-semibold">
          5
        </div>
        <span className="text-gray-500 text-xs font-medium">Apply</span>
      </div>
    </div>


    </div>
  )
}

export default Apply;

