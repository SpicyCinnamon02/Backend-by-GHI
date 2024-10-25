import React from 'react'
import priceTable from "/src/assets/home-page/price-comp.png"
import tableMobile from "/src/assets/home-page/price-comp-mobile.png"


const PriceTable = () => {
    return (
        <div className='flex justify-center items-center flex-wrap flex-col-reverse lg:flex-row py-10 bg-green-mid w-full'>
            <img src={priceTable} alt="price-table" 
                className='hidden lg:block lg:h-auto lg:w-auto max-h-[700px] max-w-[800px]'
            />
            <img src={tableMobile} alt="table" 
                className='block lg:hidden h-[450px] w-[350px] pt-[30px]'
            />
            <div className='w-[80%] lg:w-[45%] gap-5 flex justify-center items-center lg:items-start flex-col'>
                <p className='text-yellow-light text-[20px] text-center lg:text-left lg:text-[40px] font-bold w-[90%] tracking-tighter'>Comprehensive Tool & Software<br></br> Pricing Comparison</p>
                <p className='text-[16px] lg:text-[20px] text-justify lg:text-justify lg:w-[75%] text-gray-100 tracking-tight'>Why pay more when you can have it all for less? Compare the combined costs of essential tools and software, priced at $779/month, with the all-in-one solution backend by GHI for only $299/month. From project management to email marketing, GHI provides everything you need, including exclusive features like training centers, marketing links, and access to VA software—all for a fraction of the price. Simplify your business processes and reduce overhead by choosing GHI.</p>
            </div>
        </div>
    )
}

export default PriceTable