import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
    <div className='text-white'>
       <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justfy-center'>
        <p className='text-[#45ff45] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast,flexble financing for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB','BTC','SASS']} 
            typeSpeed={400}
            backSpeed={200}
            loop
            />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>Monter your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>

        <button className='bg-[#56ff30] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[black]'>Get started</button>
       </div>
    </div>
    </div>
  )
}

export default Hero;
