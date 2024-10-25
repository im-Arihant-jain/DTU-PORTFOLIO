import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='left-0 top-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg' alt='/'/>
        
        {/* Overlay */}
        <div className='bg-black/25 absolute top-0 left-0 w-full h-screen z-10'></div>
        
        {/* Text Container */}
        <div className='absolute top-0 w-full h-full text-white flex flex-col justify-center z-20'>
            <div className='md:left-10 max-w-[1100px] m-auto absolute p-4'>
                <p className='text-lg'>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl '>Uncover Your Path</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Find your next destination here.</p>
                {/* <button className='bg-white text-black hover:bg-black hover:text-white py-2 px-4 mt-4'>Book now</button> */}
            </div>
        </div>
    </div>
  )
}

export default Hero
