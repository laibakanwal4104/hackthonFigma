import React from 'react'

const SignUp = () => {
  return (
 
    <div className='  w-[1440px] bg-[#F1F1F1]  h-[481px]'>
        
      
        <div className='  pt-20   ' >

          <div className=' mx-[480px] pt-20px w-[571px] h-[114px] items-center font-mono text-[#2A254B]'>
            <h1 className='w-[571px] my-[4px] text-2xl h-[50px]'>Join the club and get the benefits</h1>
            <p className='  w-[470px] h-[48px]'>Sign up for our newsletter and receive exclusive offers on new
                          ranges, sales, pop up stores and more</p>
          </div>
          <div className='mx-[480px] pt-20 w-[472px] h-[56px] flex '>
            <label>
              <input type="text" name="" placeholder='your@email.com' className='bg-[#FFFF] pt-3 pb-3 pl-6 pr-0 w-[354px] h-[56px] text-[#FFFF]'>
              </input><button className='bg-[#2A254B] w-[118px] h-[56px] text-white  pt-3 pb-3 pr-3'>Sign up</button>
            </label>

          </div>
        </div>
     
      </div>
    

  )
}

export default SignUp