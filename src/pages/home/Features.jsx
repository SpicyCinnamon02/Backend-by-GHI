import React from 'react'
import canvassMobile from "/src/assets/home-page/canvass-bg-mobile.png"
import digitalMobile from "/src/assets/home-page/digital-card-mobile.png"
import repImage from "/src/assets/home-page/rep-img.png"


export const featuresData = [
    {
        name: 'Biz Card by GHI',
        title: 'Send & Share your\n Digital Business Card',
        subtitle: 'Effortlessly share your professional identity and make lasting connections with customizable digital business cards',
        image: digitalMobile
    },
    {
        name: 'canvassing by ghi',
        title: 'Simplify Canvassing\n with Smart Solutions',
        subtitle: 'Map, track, and manage your canvassing efforts with intuitive tools for maximum outreach efficiency',
        image: canvassMobile
    },
    {
        name: 'rep card by ghi',
        title: 'Discover Rep Cards for\n Ratings and Reviews',
        subtitle: 'View ratings, reviews, and achievements all in one place for a complete reputation overview.',
        image: repImage
    },
]
const Features = () => {
    return (
        <>
            {featuresData.map((data, i) => (
                <div
                    className={`h-[400px] lg:h-[75vh] py-[80px] sm:pt-[100px] sm:pb-[80px] flex justify-center items-center gap-10 ${i === 1 ? 'flex-row-reverse lg:gap-[10%]' : ''}`}
                >
                    <div className='flex justify-center items-center lg:items-start flex-col w-[85%] lg:w-[35%] p-0 pt-[70px] lg:pt-[0] gap-5 lg:gap-0' >
                        <p className='text-[14px] lg:text-[19px] uppercase font-semibold tracking-tight text-center lg:text-left pl-0 lg:pl-1 text-yellow-dark text-shadow-sm'>
                            {data.name}
                        </p>
                        <img src={data.image} alt=""
                            className='h-[180px] block lg:hidden'
                        />
                        <h1 className='text-[25px] lg:text-[50px] font-bold text-green-darker tracking-tight leading-tighter lg:text-left text-center text-shadow-sm '>
                            {data.title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i !== data.title.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className='text-[15px] w-[65%] lg:w-[70%] lg:text-[22px] font-medium text-center lg:text-left text-green-dark tracking-tight pt-0 lg:pt-[20px]'>
                            {data.subtitle}
                        </p>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={data.image} alt="digital-mobile" className='h-[600px]' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Features