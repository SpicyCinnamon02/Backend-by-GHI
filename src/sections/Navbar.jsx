import React from 'react'
import Container from '../elements/Container'
import navLogo from '../../src/assets/navbar/backend-logo.png'
import MobileNavbar from './MobileNavbar'

export const navLinks = [
    {
        title: 'Products',
        path: '/products'
    },
    {
        title: 'Pricing',
        path: '/pricing'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
]

const Navbar = () => {
    return (
        <Container className='fixed lg:absolute z-40 w-full flex justify-between items-center lg:items-center py-5 lg:gap-5 gap-0 shadow-lg bg-white'>
            <div className='flex justify-center items-center w-[30%] lg:w-fit'>
                <img src={navLogo} alt="" className='max-h-[60px] lg:h-[50px] h-[30px]' />
            </div>
            <div className='hidden lg:flex justify-between items-center w-[100%]'>
                <div className='flex justify-center items-center'>
                    {navLinks.map((link, i) => (
                        <div className='flex justify-center items-center tracking-wide mx-3'>
                            <a
                                href={link.path}
                                className="hover:underline px-3 py-2 text-[16px] text-black"
                            >
                                {link.title}
                            </a>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <button
                        className="px-3 py-2 lg:px-4 w-auto lg:w-[100px] lg:py-[7px] text-[14px] text-green-light border-2 border-green-light font-semibold rounded-lg shadow-md hover:bg-green-light focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
                    >
                        Log in
                    </button>
                    <button
                        className="px-3 py-2 lg:px-4 lg:py-2 text-[14px] bg-green-light text-white font-semibold rounded-lg shadow-md hover:bg-green-darker focus:outline-none hover:text-white focus:ring-2 focus:ring-opacity-75 transition duration-300"
                    >
                        Try for free
                    </button>
                </div>
            </div>
            <MobileNavbar />
        </Container>
    )
}

export default Navbar