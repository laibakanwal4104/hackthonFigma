import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
   
        <div className=' w-[1440px] h-[380px] py-10 px-20  text-white  bg-[#2a254b]'>
            <div className='mt-[5px] mb-[20px] grid grid-cols-1 md:grid-cols-4 gap-2'>


            <div>
                <h3 className='text-regular font-thin mb-4 '>Menu</h3>
             <ul className='space-y-3 text-sm font-thin'>
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
                </ul> 
            </div>
            
            <div>
                    <h3 className='text-regular font-thin mb-4'>Categories</h3>
                    <ul className='space-y-3 text-sm font-thin'>
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-regular font-thin mb-4'>Our company</h3>
                    <ul className='space-y-3 text-sm font-thin'>
                        <li>About us</li>
                        <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>

                </div>

                <div>
                <h3>
                Join our mailing list
                </h3>
               
               
                <div className='h-[40px] w-[100%] flex '>
                <label>
                    <input type="text" name="" placeholder='your@email.com' className='bg-[#4A4666] pt-3 pb-3 pl-6 pr-0 w-[220px] text-[#FFFF]'>
                    </input><button className='bg-white text-[#2A254B] pt-3 pb-3 pr-3'>Sign up</button>
                    </label>   
                
                </div>
            </div> 
               <div className='w-[1277px] mx-[8px] my-[20px]'>
                <hr/>
                </div>  
            <div >
            
                <div className=' w-[264px] space-x-8 pt-1 h-[24px] mx-[609px] my-[60px] flex '>
                    <div className='w-[24px] h-[24px]'>
                    <FaLinkedin className='w-[18px] h-[18px]' />
                    </div>
                    <div className='w-[24px] h-[24px]'>
                    <FaFacebookSquare className='w-[18px] h-[18px]' />
                    </div>
                    <div className='w-[24px] h-[24px]'>
                    <FaInstagram  className='w-[18px] h-[18px]'/>
                    </div>
                    <div className='w-[24px] h-[24px]'>
                    <FaSkype  className='w-[19px] h-[19px]' />
                    </div>
                    <div className='w-[24px] h-[24px]'>
                    <FaTwitter  className='w-[17px] h-[13px]'/>
                    </div>
                    <div className='w-[24px] h-[24px]'>
                    <FaPinterest  className='w-21px] h-[21px]'/>
                    </div>
               
               
                </div>
            </div>

    </div>

        </div>
        
   
  )
}

export default Footer