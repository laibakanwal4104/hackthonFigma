import React from 'react'
import Image from 'next/image'
const Listings = () => {
  return (

    <div className='w-[1440px]  h-[510px]'>
      
       <div className='mx-[80px] flex space-x-5'>
      
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Photo.png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>The Dandy Chair</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
      
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Photo (1).png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>The Silky Vase</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
    
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Photo (2).png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>TheLucky Lamp</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Photo (3).png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>TheLucky Lamp</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
      
     
      
      </div> 
      
    </div>
   
   
  )
}

export default Listings