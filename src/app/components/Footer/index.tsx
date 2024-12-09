import Link from 'next/link';
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";

import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram,FaTiktok  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8 px-10 flex justify-around'>
        <div className='mt-10 mb-10 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className=''>
                <h3 className='text-xl font-bold mb-4'>Core Courses</h3>
                <ul className='space-y-2 text-lg '>
                    <Link href={'/'} className='hover:text-main'><li>Programming Fundamentals</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Web2 Using NextJS</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Earn as You Learn</li></Link>
                </ul>
            </div>
            <div className=''>
                <h3 className='text-xl font-bold mb-4'>Advanced Courses</h3>
                <ul className='space-y-2 text-lg'>
                    <Link href={'/'} className='hover:text-main'><li>Web 3 and Metaverse</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Cloud-Native Computing</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Artificial Intelligence (AI) and Deep Learning</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Ambient Computing and IoT</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Genomics and Bioinformatics</li></Link>
                    <Link href={'/'} className='hover:text-main'><li>Network Programmability and Automation</li></Link>

                </ul>
                
            </div>
            <div className=''>
                <h3 className='text-xl font-bold mb-4'>Social Links</h3>
                <div className='flex space-x-4 mb-4 py-1'>
                   <Link href={'/'}><FaFacebookF className='pt-1 pb-1 w-8 h-8 rounded-full bg-blue-600 text-white' /></Link>
                   <Link href={'/'}><FaYoutube className='pt-1 pb-1 w-8 h-8 rounded-full bg-white text-red-600' /></Link>
                   <Link href={'/'}><FaTwitter className='pt-1 pb-1 w-8 h-8 rounded-full bg-blue-400 text-white' /></Link>
                   <Link href={'/'}><FaInstagram  className=' instagram pt-1 pb-1 w-8 h-8 rounded-full text-white' /></Link>
                   <Link href={'/'}><FaTiktok className='pt-1 pb-1 w-8 h-8 rounded-full bg-black text-white' /></Link>
                </div>
                <Link href="mailto:education@governorsindh.com" className='text-blue-600 underline flex items-center gap-2'>
                <AiOutlineMail size={25} />
                education@governorsindh.com</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
