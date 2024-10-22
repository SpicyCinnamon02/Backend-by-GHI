import React from 'react'
import priceTable from "/src/assets/home-page/price-table.png"

const PriceTable = () => {
    return (
        <div className='flex justify-center items-center pb-10'>
            <img src={priceTable} alt="price-table" 
                className='max-h-[700px]'
            />
        </div>
    )
}

export default PriceTable