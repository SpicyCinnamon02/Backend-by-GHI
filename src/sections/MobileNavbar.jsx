import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { navLinks } from './Navbar';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <div className="relative block lg:hidden">
            <button
                onClick={toggleMenu}
                className="text-3xl py-2 focus:outline-none transition-all duration-500"
            >
                {isOpen ? <IoMdClose className='text-green-light text-[30px]' /> : <GiHamburgerMenu className='text-green-light' />}
            </button>

            <div
                className={`fixed right-0 w-[250px] bg-white shadow-lg transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-96'
                    }`}
            >
                {navLinks.map((link, i) => (
                        <div className='relative flex justify-center items-center py-2'>
                            <a
                                href={link.path}
                                className="hover:underline px-3 py-2 text-[15px] font-semibold uppercase text-black"
                            >
                                {link.title}
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MobileNavbar;
