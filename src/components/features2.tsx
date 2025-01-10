import React from 'react'
import Image from 'next/image'
const Features2 = () => {
  return (
    <div className='  w-[1440px] flex h-[603px]'>
    <div className='w-[720px]  my-[72px] mx-[84px] h-[603px]'>
         <div className='   w-[536px] h-[225px]'>
            <h1 className=' text-[#494565] font-mono  w-[514px] h-[68px]'>From a studio in London to a global brand with
            over 400 outlets</h1>
            <p className='  font-mono text-[#505977]'>
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
            </p>
            <br/>
            <p className='  font-mono text-[#505977]'>
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
            <div className='w-[150px] my-[150px] flex justify-center bg-[#F9F9F9] h-[56px] '>
            <button  className= ' w-[96px] pt-4 h-[24px] flex justify-center text-[#494565] '> Get in touch</button>
            </div>
        </div> 
    </div>

    
        <Image src={"/assests/image.png"} alt="image " width={720} height={603}/>
    
    </div>
  )
}

export default Features2