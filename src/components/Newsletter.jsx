import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 mny-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p className=''>Sign up to our newsletter and stay up to date. </p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your E-mail'/>
              <button className='bg-[#11ff00] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[#ffffff]'>Notify me</button>
            </div>
            <p>We care bout the protection of your data. Read our <span className='text-[#79ff36]'>Privacy Policy.</span></p>
          </div>
        </div>      
    </div>
  )
}

export default Newsletter