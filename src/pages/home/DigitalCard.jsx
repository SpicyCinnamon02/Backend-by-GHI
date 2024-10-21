import React from 'react'
import digitalMobile from "/src/assets/home-page/digital-card-mobile.png"


const DigitalCard = () => {
    return (
        <div
            className="h-[400px] lg:h-[75vh] py-[80px] sm:pt-[100px] sm:pb-[80px] flex justify-center items-center gap-10"
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[35%] p-0 pt-[70px] lg:pt-[0] gap-5 lg:gap-0' >
                <p className='text-[14px] lg:text-[19px] uppercase font-semibold tracking-tight text-center lg:text-left pl-0 lg:pl-1 text-yellow-dark text-shadow-sm'>Biz Card by GHI</p>
                <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center text-shadow-sm'>
                    Send & Share your<br></br> Digital Business Card
                </h1>
                <p className='text-[15px] w-[65%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight pt-[40px]'>
                    Effortlessly share your professional identity and make lasting connections with customizable digital business cards
                </p>
                <img src={digitalMobile} alt=""
                    className='h-[180px] block lg:hidden'
                />
            </div>
            <div className='hidden lg:block'>
                <img src={digitalMobile} alt="digital-mobile" className='h-[600px]' />
            </div>
        </div>
    )
}

export default DigitalCard