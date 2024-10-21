import React from 'react'
import canvassMobile from "/src/assets/home-page/canvass-bg-mobile.png"

const Canvass = () => {
    return (
        <div
            className="h-[400px] lg:h-[75vh] py-[80px] sm:pt-[100px] sm:pb-[80px] flex-row-reverse flex justify-center items-center gap-10 lg:gap-[10%]"
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[35%] p-0 pt-[70px] lg:pt-[0] gap-5 lg:gap-0' >
                <p className='text-[14px] lg:text-[19px] uppercase font-semibold tracking-tight text-center lg:text-left pl-0 lg:pl-1 text-yellow-dark text-shadow-sm'>canvassing by ghi</p>
                <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center text-shadow-sm'>
                    Simplify Canvassing<br></br> with Smart Solutions
                </h1>
                <p className='text-[15px] w-[65%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight pt-[40px]'>
                    Map, track, and manage your canvassing efforts with intuitive tools for maximum outreach efficiency
                </p>
                <img src={canvassMobile} alt="canvass-mobile"
                    className='h-[180px] block lg:hidden'
                />
            </div>
            <div className='hidden lg:block'>
                <img src={canvassMobile} alt="canvass-mobile" className='h-[600px]' />
            </div>
        </div>
    )
}

export default Canvass