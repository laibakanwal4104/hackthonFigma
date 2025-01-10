"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
const Product = () => {
  const [count,setCount]=useState(1)
  const router = useRouter();
  return (

    <div className="w-[1440px] flex h-[759px]">
     
    
        <Image src={"/assests/Product listing 1.png"} alt="chair-image" width={721} height={759} />

       
<div className='mx-[58px] my-[50px]  w-[602px] h-[657px] '>
        <div className='w-[281px]  h-[89px] mx-[40px] '>
          <h1 className='w-[281px] h-[44px] pt-1 text-3xl font-mono'>The Dandy Chair</h1>
          <h1 className='w-[59px] h-[32px] pt-4 text-xl'>£250</h1>
        </div>

        <div className='w-[602px] h-[251px] my-[83px]  '>
          <div className='w-[522px] mx-[40px] my-[80px] h-[188px]'>
          <h1  className='w-[88px]  h-[20px]'>Description</h1>
          <div  className='w-[522px] h-[152px]'>
            <div className='w-[498px] h-[152px]'>
            <p className='w-[498] my-[20px] h-[66px] text-sm'>A timeless design, with premium materials features as one of our most
             popular and iconic pieces. The dandy chair is perfect for any stylish 
             living space with beech legs and lambskin leather upholstery.</p>
            <p className='  text-sm'><li>Premium material</li>
              <li>Handmade upholstery</li> 
               <li>Quality timeless classic</li>
               </p>
            </div>
          </div>
          <div className='w-[602px] h-[134px] my-[20px] '>
          <div className='w-[241px]  h-[99px]'>
            <h1 className='w-[89px] h-[20px]'>Dimensions</h1>
            <div className='w-[241px] h-[51px]  my-[30px]'>
              <div className=' my-[30px] flex space-x-14 '>
              <div className='w-[44px]  h-[51px]'>
                <h3 className='w-[43px] h-[17px]'>
                Height
                </h3>
                <h3 className='w-[44px] my-[12px] h-[22px]'>
                110cm
                </h3>
              </div>

                <div className='w-[40px]  space-y-3 h-[51px] '>
                  <h3  className='w-[40px] h-[17px]'>Width</h3>
                  <h3 className='w-[39px] h-[22px]'>75cm</h3>
                </div>
             
                <div className='w-[43px] space-y-3 h-[51px] '>
                  <h3 className='w-[41px] h-[17px]'>Depth</h3>
                  <h3 className='w-[43px] h-[22px]'>50cm</h3>
                </div>


              </div>
            </div>
          </div>
        </div>
             </div>

        </div>

       
        <div className='w-[602px] h-[115px]  '>
        <div className='w-[209px] h-[46px] flex gap-6   pt-9 mx-[46px]'>
            <h3 className='w-[65px] h-[20px] pt-2  '>Amount:</h3>
            <div className='w-[138px] bg-[#F1F1F1] h-[46px]'>
              <div className='w-[7px]  pt-3 flex h-[40px] mx-[18px]'>
            <button className="    " onClick={()=> setCount(count - 1)}>-</button>
           
            <div className=" mx-[30px]  w-[6px] h-[28px] ">
              <p>{count}</p>
            </div>
            <button  onClick={()=> setCount(count + 1)}>+</button>
           
            </div>
</div>
            </div>
           
          <div className='w-[141px] h-[52px] text-white mb-[30px] bg-[#2a254b] mx-[409px]  '>
            <button className='w-[86px] mx-[30px] my-[15px] h-[24px]' onClick={()=>router.push("/cart")}>Add to cart</button>
            </div>
            
        </div>
        </div>
      </div>

 

  )
}

export default Product



