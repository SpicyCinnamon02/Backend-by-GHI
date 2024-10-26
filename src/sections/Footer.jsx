import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export const footLinks = [
    {
        title: 'Services',
        links: [
            'Green Home Improvements Plus',
            'GHI Homes',
            'Backend by GHI'
        ]
    },
    {
        title: 'About GHI',
        links: [
            'The Company',
            'Reviews',
            'Blogs'
        ]
    },
    {
        title: 'Contact Us',
        info: [
            '2240 W Woolbright Rd Ste 315 Boynton Beach, FL 33426',
            '561-815-0008',
            'hello@greenhomeimprovements.com'
        ]
    },
    {
        title: 'Socials',
        icons: [
            { component: FaFacebook, link: 'https://facebook.com' },
            { component: FaInstagram, link: 'https://instagram.com' },
            { component: FaYoutube, link: 'https://youtube.com' },
            { component: FaTwitter, link: 'https://twitter.com' }
        ]
    }
]
const Footer = () => {
    return (
        <footer className="bg-[#08291e] text-white py-10 px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {footLinks.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                        <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                        
                        {section.links && (
                            <div>
                                {section.links.map((link, i) => (
                                    <p key={i} className="mb-2 hover:text-gray-300 cursor-pointer">
                                        {link}
                                    </p>
                                ))}
                            </div>
                        )}

                        {section.info && (
                            <div>
                                {section.info.map((item, i) => (
                                    <p key={i} className="mb-2 text-sm cursor-pointer">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}

                        {section.icons && (
                            <div className="flex space-x-4 mt-2">
                                {section.icons.map((iconObj, i) => {
                                    const IconComponent = iconObj.component;
                                    return (
                                        <a
                                            key={i}
                                            href={iconObj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-2xl hover:text-gray-300 cursor-pointer"
                                        >
                                            <IconComponent />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Green Home Improvements. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer