"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Hero = () => {
  const router = useRouter();
  return (
    
    <div className=' w-[1440px] bg-white h-[704px]  '>
      <div className='  mx-[auto] w-[1280px] h-[584px] bg-[#2A254B] flex items-center justify-evenly text-white text-2xl'>
        
        <div className=' mx-[60px] w-[513px] h-[187px]'>
        <h2 className='  w-[513px] h-[90px]'>The furniture brand for the<br/> future,
          with timeless designs</h2>
          <br/>
        <div className='   w-[170px] h-[56px]'>
           <button className='my-[16px] mx-[32px] w-[206px] h-[54px] bg-[#494565]' onClick={()=>router.push("/products")}>View collection</button>
           </div>
           </div>
        
           <p className='my-[443px] w-[802px] h-[81px]'> 
</p> 
          

      
        <Image src={"/assests/hero.png"} alt='hero-image' width={520} height={584} />
      


        </div>
    </div>


  )
}

export default Hero