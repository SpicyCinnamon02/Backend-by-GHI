import React from 'react'
import CanvassBG from "/src/assets/home-page/canvass-bg.png"
import canvassMobile from "/src/assets/home-page/canvass-bg-mobile.png"

const Canvass = () => {
    return (
        <div
            className="h-[600px] lg:h-[70vh] py-[80px] sm:pt-[100px] sm:pb-[80px] bg-fill lg:bg-cover lg:bg-center bg-no-repeat flex justify-center items-center lg:items-end flex-col gap-10 lg:gap-5"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${CanvassBG})` }}
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[55%] p-0 pt-[70px] lg:pt-[0] lg:pr-[13%] gap-5 lg:gap-7' >
                <h1 className='text-[25px] lg:text-[60px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
                    Simplify Canvassing<br></br> with Smart Solutions
                </h1>
                <p className='text-[15px] w-[65%] lg:w-[70%] lg:text-[25px] font-medium text-center lg:text-left text-green-dark tracking-tight'>
                    Map, track, and organize your canvassing efforts using intuitive tools designed to maximize outreach efficiency, enhance team coordination, and provide real-time insights for better decision-making.
                </p>
                <img src={canvassMobile} alt=""
                    className='h-[180px] block lg:hidden'
                />
                                <div className=''>
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

export default Canvass