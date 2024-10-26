import React from 'react'


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
            'Facebook',
            'Instagram',
            'Youtube',
            'Twitter'
        ]
    }
]
const Footer = () => {
    return (
        <footer className="bg-[#08291e] text-white py-10 px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {footLinks.map((section) => (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                        {section.links && (
                            <>
                                {section.links.map((link) => (
                                    <p className="mb-2">
                                        {link}
                                    </p>
                                ))}
                            </>
                        )}
                        {section.info && (
                            <>
                                {section.info.map((item) => (
                                    <p className="mb-2 text-sm">
                                        {item}
                                    </p>
                                ))}
                            </>
                        )}
                        {section.icons && (
                            <div className="flex space-x-4 mt-2">
                                {section.icons.map((icon) => (
                                    <span className="cursor-pointer">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </footer>
    )
}

export default Footer