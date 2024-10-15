import React from 'react'
import HeroBG from "/src/assets/home-page/Hero-Bg.png"

const HomeHero = () => {
  return (
    <div
      className="h-[400px] lg:h-[100vh]  lg:py-[80px] sm:pt-[160px] sm:pb-[80px] lg:bg-cover bg-fill lg:bg-center bg-no-repeat flex justify-center items-center lg:items-start flex-col gap-10 lg:gap-5 z-10"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.0)),url(${HeroBG})` }}
    >
      <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[45%] p-0 pt-[70px] lg:pt-[0] lg:pl-[50px] gap-5 lg:gap-7' >
        <h1 className='text-[30px] lg:text-[60px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
          Elevate Your Projects with Powerful Tools
        </h1>
        <p className='text-[15px] w-[80%] lg:w-[70%] lg:text-[25px] font-medium text-center lg:text-left text-green-dark tracking-tight'>
          Manage projects, streamline tasks, and grow your business effortlessly.
        </p>
        <div>
        <button
          className="px-3 py-2 lg:px-4 lg:py-2 text-[16px] bg-green-light text-white font-semibold rounded-lg shadow-md hover:bg-green-darker focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
        >
          Try for free
        </button>
      </div>
      </div>
    </div>
  )
}

export default HomeHero