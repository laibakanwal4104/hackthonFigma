import React from 'react'
import Image from 'next/image'
const Listings3 = () => {
  return (
    <div className='w-[1440px] h-[634px] '>
<div className='mx-[80px] flex space-x-5'>
      
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Card1.png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>TheLucky Lamp</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
      
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Card2.png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>The Silky Vase</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
    
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Card3.png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>TheLucky Lamp</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
        <div className=' w-[305px] h-[462px]'>
        <Image src={"/assests/Card4.png"} alt='card-image' width={305} height={375} />

        <div className='w-[154px] h-[63px]'>
        <h4 className=' w-[154px] h-[28px] pt-6 font-mono text-lg  text-[#494565]'>TheLucky Lamp</h4>
        <h4 className='  w-[44px] h-[27px] pt-6 font-mono text-lg text-[#494565]'>£250</h4>
        </div>

        </div>
      
     
      
      </div> 
      <div className='w-[170px] mx-[640px] my-[40px] h-[56px]'>
      <button className='w-[106px] h-[24px] text-sm mx-[32px] my-[16px]'>View collection</button>
      </div>
    </div>
  )
}

export default Listings3