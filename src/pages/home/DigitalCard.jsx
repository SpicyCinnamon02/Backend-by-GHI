import React from 'react'
import digitalCard from "/src/assets/home-page/digital-card.png"
import digitalMobile from "/src/assets/home-page/digital-card-mobile.png"


const DigitalCard = () => {
    return (
        <div
            className="h-[400px] lg:h-[70vh] py-[80px] sm:pt-[160px] sm:pb-[80px] bg-fill lg:bg-cover lg:bg-center bg-no-repeat flex justify-center items-center lg:items-start flex-col gap-10 lg:gap-5"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${digitalCard})` }}
        >
            <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[55%] p-0 pt-[70px] lg:pt-[0] lg:pl-[13%] gap-5 lg:gap-7' >
                <h1 className='text-[25px] lg:text-[60px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center'>
                    Send & Share your<br></br> Digital Business Card
                </h1>
                <p className='text-[15px] w-[80%] lg:w-[90%] lg:text-[25px] font-medium text-center lg:text-left text-green-dark tracking-tight'>
                    Effortlessly share your professional identity and make lasting connections with customizable digital business cards
                </p>
                <img src={digitalMobile} alt=""
                    className='h-[180px] block lg:hidden'
                />
            </div>
        </div>
    )
}

export default DigitalCard