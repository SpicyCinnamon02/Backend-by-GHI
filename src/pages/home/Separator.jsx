import React from 'react'

const Separator = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[90%] flex justify-center items-center flex-col pt-[40px] lg:py-10 lg:pt-[90px]'>
                <p className='text-[18px] uppercase text-green-primary font-semibold text-center'>App Features</p>
                <h1 className='font-bold text-[24px] lg:text-[30px] text-center'>Smart Tools for Effortless Task Management</h1>
                <h2 className='text-[16px] lg:text-[20px] text-gray-500 text-center w-[80%] lg:w-[100%]'>Discover how our app makes everyday tasks easier and more efficient.</h2>
            </div>
        </div>
    )
}

export default Separator