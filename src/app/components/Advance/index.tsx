import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Advance = () => {
  return (
    <div className='xl:w[1300px] lg:w-[90%] w-[90%] m-auto mt-10 mb-10'>
      <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advanced Courses</h1>

      <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <Link href={'/Advance/1'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/AI.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                Artificial Intelligence
                </text>
            </div>
        </div>
        </Link>
        <Link href={'/Advance/2'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/metaverse.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                    Web 3 and Metaverse
                </text>
            </div>
        </div>
        </Link>
        <Link href={'/Advance/3'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/cloudComputing.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                    Cloud-Native Computing
                </text>
            </div>
        </div>
        </Link>
        <Link href={'/Advance/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/iot.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                Ambient Computing and IoT
                </text>
            </div>
        </div>
        </Link>
        <Link href={'/Advance/5'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/genomics.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                Genomics and Bioinformatics
                </text>
            </div>
        </div>
        </Link>
        <Link href={'/Advance/6'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold'>
            <div>
                <Image src={require('../../../../public/assests/image/automation.jpg')} alt='im1' className='object-cover w-full ' height={300}/>
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <text>
                Network Programmability and Automation
                </text>
            </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Advance;
