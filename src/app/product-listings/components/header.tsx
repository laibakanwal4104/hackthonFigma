import React from 'react'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-[1440px]  h-[80px]"> 
    
    
        <h3 className='w-[65px] text-2xl mx-[80px] pt-[25px]  h-[30px]'>Avion</h3>
       
        <div className='h-[22px] w-[675px] '>
<ul className="space-x-12 text-lg text-[#726E8D] flex mx-[297px] ">

<li><Link href="/#">Plant </Link></li>
<li><Link href="/#">Ceramics</Link></li>
<li><Link href="/#">Tables</Link></li>
<li><Link href="/#">Chairs</Link></li>
<li><Link href="/#">Crockery</Link></li>
<li><Link href="/#">Tableware</Link></li>
<li><Link href="/#">Cutlery</Link></li>
</ul>
      </div> 
       
          <div className='w-[108px] h-[16px] flex mx-[1280px] '>
 <div className='w-[16px]  h-[16px]'>
 <IoSearch className=' w-[14px] h-[14px]' />
 </div>
 <div className='w-[16px] mx-[32px] h-[16px]'>
 <MdOutlineShoppingCart  className=' w-[15px] h-[14px]' />
 </div>
 <div className='w-[16px] mx-[6] h-[16px]'>
 <FaRegCircleUser className='w-[14px] h-[14px]' />
 </div>
  
      </div>
       
  
   


      
</div>
  )
}

export default Header


