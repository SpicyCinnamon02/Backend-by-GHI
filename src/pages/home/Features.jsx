import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import canvassMobile from "/src/assets/home-page/canvass-bg-mobile.png";
import digitalMobile from "/src/assets/home-page/digital-card-mobile.png";
import repImage from "/src/assets/home-page/rep-img.png";
import Separator from './Separator';

export const featuresData = [
    {
        name: 'Biz Card by GHI',
        title: 'Send & Share your\n Digital Business Card',
        subtitle: 'Effortlessly share your professional identity and make lasting connections with customizable digital business cards',
        image: digitalMobile
    },
    {
        name: 'Canvassing by GHI',
        title: 'Simplify Canvassing\n with Smart Solutions',
        subtitle: 'Map, track, and manage your canvassing efforts with intuitive tools for maximum outreach efficiency',
        image: canvassMobile
    },
    {
        name: 'Rep Card by GHI',
        title: 'Discover Rep Cards for\n Ratings and Reviews',
        subtitle: 'View ratings, reviews, and achievements all in one place for a complete reputation overview.',
        image: repImage
    },
];

const Features = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className="relative gap-5">
            <Separator />
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={false}
                speed={900}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="h-[450px] lg:h-[auto] py-[80px] lg:w-[60%]"
                onSlideChange={handleSlideChange}
            >
                {featuresData.map((data, i) => (
                    <SwiperSlide key={i}>
                        <div className='flex justify-center items-center flex-col gap-10 pt-[20px] pb-[10px] lg:pb-[20px]'>
                            <div className=" bg-white rounded-xl shadow-lg border p-6 border-gray-300 flex justify-center items-center flex-col w-[85%] lg:w-[600px] lg:h-[650px]lg:pt-[0] gap-5 lg:gap-0">
                                <p className="text-[14px] lg:text-[19px] uppercase font-semibold tracking-tight text-center text-yellow-dark text-shadow-sm">
                                    {data.name}
                                </p>
                                <img src={data.image} alt="" className="h-[180px] lg:h-[400px]" />
                                <h1 className="text-[22px] lg:text-[30px] font-bold text-green-darker text-center tracking-tight leading-tighter text-shadow-sm">
                                    {data.title.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index !== data.title.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h1>
                                <p className="text-[15px] lg:text-[18px] font-medium text-center text-green-dark leading-tight tracking-tight pt-0 lg:pt-[20px] lg:w-[85%]">
                                    {data.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex justify-center items-center gap-[100px]'>
                <button
                    className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                    &#10094;
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10">
                    {featuresData.map((_, i) => (
                        <button
                            key={i}
                            className={`w-3 h-3 rounded-full transition duration-200 ${i === activeIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-500'}`}
                            onClick={() => {
                                swiperRef.current.swiper.slideTo(i);
                                setActiveIndex(i);
                            }}
                        ></button>
                    ))}
                </div>

                <button
                    className="bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Features;
