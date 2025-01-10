"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Popular = () => {
  const router = useRouter();
  return (
   
    <div className=' w-[1440px] h-[744px]'>

       
            <h2 className=' mx-[80px] w-[330px] h-[45px] text-[#2A254B]'>
            Our popular products
            </h2>
        <div className='flex mx-[80px] space-x-3'>
 <div className='   w-[630px] h-[462px] '>
   <Image src={"/assests/sofaLarge.png"} alt='chair-image' width={630} height={375} />
   
   <div className='w-[209px] h-[63px]'>
    <h4 className='pt-8 font-mono text-[#494565] w-[209px] h-[28px]'>The Poplar suede sofa</h4>
    <h4 className='pt-7 font-mono text-[#494565] w-[46px] h-[27px]'>£980</h4>
   </div>
   </div>

 <div className='  w-[305px] h-[462px]'>
   <Image src={"/assests/chairblue.png"} alt='chair-image' width={305} height={375} />
   
   <div className='w-[154px] h-[63px]'>
    <h4 className=' pt-8 font-mono text-[#494565] w-[154px] h-[28px]'>The Dandy chair</h4>
    <h4 className='pt-7 font-mono text-[#494565] w-[44px] h-[27px]'>£250</h4>
   </div>
   
   </div>
   <div className=' w-[305px] h-[462px]'>
  <Image src={"/assests/blackchair.png"} alt='chair-image' width={305} height={375} />
  
  <div className=' w-[154px] h-[63px]'>
    <h4 className='pt-8 font-mono text-[#494565] w-[154px] h-[28px]'>The Dandy chair</h4>
    <h4 className='pt-7 font-mono text-[#494565] w-[44px] h-[27px]'>£250</h4>
   </div>
  
  </div> 
  </div>
        <div className='mx-[635px] mt-[20px] w-[170px] h-[56px]  bg-[#F9F9F9]'>
  <button className=' mx-[32px] my-[16px] w-[110px] h-[24px]' onClick={()=>router.push("/products")}>View collection</button>
</div>

    </div>
  )
}

export default Popular