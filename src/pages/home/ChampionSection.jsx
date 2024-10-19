import React from 'react'
import ChampBG from "/src/assets/home-page/champion-app.png"
import bgImage from "/src/assets/home-page/champion-app-mobile.png"

const ChampionSection = () => {
    return (
        <div
            className="h-[460px] lg:h-[90vh] py-[80px] sm:pt-[160px] sm:pb-[80px] bg-fill lg:bg-cover lg:bg-center bg-no-repeat flex justify-center items-center lg:items-end flex-col gap-10 lg:gap-5"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${ChampBG})` }}
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[45%] p-0 pt-[70px] lg:pt-[0] lg:pl-[50px] gap-5  lg:gap-8' >
                <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
                    Become a Champion. <br></br> Earn money in just<br></br> 3 easy steps.
                </h1>
                <p className='text-[15px] w-[80%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight leading-tight'>
                    Sign up. Refer friends. Earn money.
                </p>
                <img src={bgImage} alt=""
                    className='h-[180px] block lg:hidden'
                />
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