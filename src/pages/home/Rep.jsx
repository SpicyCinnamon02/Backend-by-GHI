import React from 'react'
import repImage from "/src/assets/home-page/rep-img.png"

const Rep = () => {
    return (
        <div
            className="h-[400px] lg:h-[70vh] py-[80px] sm:pt-[100px] sm:pb-[80px] flex justify-center items-center gap-10"
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[35%] p-0 pt-[70px] lg:pt-[0] gap-5 lg:gap-7' >
                <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center w-[80%] lg:w-[100%]'>
                    Discover Rep Cards for Effortless Ratings and Reviews
                </h1>
                <p className='text-[15px] w-[65%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight'>
                    View ratings, reviews, and achievements all in one place for a complete reputation overview.
                </p>
                <img src={repImage} alt="canvass-mobile"
                    className='h-[180px] block lg:hidden'
                />
            </div>
            <div className='hidden lg:block'>
                <img src={repImage} alt="canvass-mobile" className='h-[600px]' />
            </div>
        </div>
    )
}

export default Rep