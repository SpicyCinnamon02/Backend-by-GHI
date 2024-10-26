import React from 'react'
import champIMG from "/src/assets/home-page/champion-app-edited.png"
import bgImage from "/src/assets/home-page/champion-app-mobile.png"

const ChampionSection = () => {
    return (
        <div
            className="h-[800px] lg:h-[80vh] py-[80px] sm:pt-[160px] sm:pb-[80px] flex justify-center items-center flex-col lg:flex-row lg:gap-5"
        >
            <img src={champIMG} alt="" 
                className='max-h-[450px] h-[200px] lg:h-auto lg:ml-auto'
            />
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[42%] p-0 pt-[30px] lg:pt-[0] lg:pl-[50px] gap-5 lg:gap-8' >
                <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
                    Become a Champion. <br></br> Earn money in just<br></br> 3 easy steps.
                </h1>
                <p className='text-[15px] w-[80%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight leading-tight'>
                    Sign up. Refer friends. Earn money.
                </p>
                <div>
                    <button
                        className="px-3 py-2 lg:px-4 lg:py-2 text-[16px] bg-green-light text-white font-semibold rounded-lg shadow-md hover:bg-green-darker focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
                    >
                        Download App
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChampionSection