import React from 'react'
import { FaCheck, FaPlus } from "react-icons/fa";

export const priceOpt = [
    {
        title: 'Free Trial',
        price: '7 Days',
        description: 'Try our tools and services',
        inclusion: ['Try out all the Standard Tools'],
        button: 'Free',
    },
    {
        title: 'Standard',
        price: '$199',
        description: 'Try our tools and services',
        inclusion: ['Project Management', 'Project Camera', 'Proposal Tools', 'Referral App', 'Digital Business Card', 'Canvassing Tool', 'Reputation Management', 'Appointment Setting', 'Email Marketing'],
        button: 'Subscribe',
    },
    {
        title: 'Pro',
        price: '$299',
        description: 'Try our tools and services',
        inclusion: ['Project Management', 'Project Camera', 'Proposal Tools', 'Referral App', 'Digital Business Card', 'Canvassing Tool', 'Reputation Management', 'Appointment Setting', 'Email Marketing', 'Training Center', 'Marketing Links', 'VA Software', 'GHI Pipelines',],
        button: 'Subscribe',
    },
]

const Prices = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 py-10 bg-gray-50'>
            <div className="flex justify-center items-center flex-col mb-8">
                <p className='text-[18px] uppercase text-green-primary font-semibold'>Pricing</p>
                <h1 className='font-bold text-[20px] lg:text-[30px] text-center text-green-darker'>Check Out Our Pricing Options</h1>
                <h2 className='text-[16px] lg:text-[20px] text-gray-500 text-center w-[80%] lg:w-[100%]'>Flexible, affordable plans tailored to bring your digital vision to life—choose the service level that fits your goals.</h2>
            </div>
            
            <div className='flex flex-row flex-wrap justify-center items-center gap-7 lg:gap-5'>
                {priceOpt.map((prices, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col justify-between items-center lg:items-start shadow-lg ${
                            prices.title === 'Pro' ? 'bg-green-primary text-white' : 'bg-white text-green-darker'
                        } h-[550px] w-[350px] lg:h-[700px] lg:w-[400px] rounded-xl py-5 lg:px-[50px] lg:py-[30px] transform lg:hover:scale-105 transition-all duration-300`}
                    >
                        {prices.title === 'Pro' && (
                            <div className="absolute top-[-20px] right-[-10px] bg-yellow-500 text-white px-4 py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg font-semibold text-[14px] lg:text-[16px] shadow-lg">
                                Most Popular
                            </div>
                        )}
                        <div className='border-b border-gray-300 pb-[20px] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                            <p className={`text-[28px] lg:text-[40px] font-black ${prices.title === 'Pro' ? 'text-white' : 'text-green-darker'}`}>
                                {prices.title}
                            </p>
                            <p className='text-[20px]'>{prices.description}</p>
                        </div>
                        <div className='flex justify-center items-start flex-col lg:gap-2'>
                            {prices.inclusion.map((features, i) => (
                                <div key={i} className='flex items-center'>
                                    {prices.title === 'Pro' && !priceOpt[1].inclusion.includes(features) ? (
                                        <FaPlus className='text-yellow-400 text-[20px] mr-2' />
                                    ) : (
                                        <FaCheck className={`${prices.title === 'Pro' ? 'text-white' : 'text-green-600'} mr-2`} />
                                    )}
                                    <p className={`font-semibold ,${prices.title === 'Pro' ? 'text-white' : 'text-green-darker'}`}>{features}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center flex-col w-full gap-3'>
                            <p className={`text-[28px] font-semibold ${prices.title === 'Pro' ? 'text-yellow-200' : 'text-green-mid'}`}>{prices.price}</p>
                            <button
                                className={`px-3 py-2 lg:px-0 lg:py-2 text-[14px] lg:text-[18px] w-[100px] lg:w-[150px] font-semibold rounded-lg shadow-md ${
                                    prices.title === 'Pro' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-green-light text-white hover:bg-green-darker'
                                } focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300`}
                            >
                                {prices.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Prices
