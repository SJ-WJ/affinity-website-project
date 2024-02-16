import React, { useState } from 'react';
import DonateButton from './Donate'
import { FiChevronDown } from "react-icons/fi"

interface MenuItem {
    title: string;
    subItems: Array<{ name: string; url: string }>;
}

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const menuItems = [
        {
            title: "Who We Are",
            subItems: [
                { name: "Our History", url: "#" },
                { name: "Our Mission", url: "#" },
                { name: "Our Impact", url: "#" },
                { name: "Our Donors", url: "#" },
            ],
        },
        {
            title: "What We Do",
            subItems: [
                { name: "Meet ups", url: "#" },
                { name: "Mentors Night", url: "#" },
                { name: "Mentorship", url: "#" },
                { name: "Community Engagement", url: "#" },
            ],
        },
        {
            title: "Get Involved",
            subItems: [
                { name: "Be a Mentor", url: "#" },
                { name: "Be a Mentee", url: "#" },
                { name: "Be a Donor", url: "#" },
                { name: "Volunteer Opportunities", url: "#" },
                { name: "Employment Opportunities", url: "#" },
            ],
        },
        {
            title: "Out There",
            subItems: [
                { name: "Blog", url: "#" },
                { name: "Testimonials", url: "#" },
                { name: "Social Media", url: "#" },
            ],
        }
    ];
    return (
        <ul className="relative flex">
            {menuItems.map((item, index) => (
                //text-lg, text-xl, text-2xl
                <li
                    key={index}
                    className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 ${activeMenu === index ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                    onMouseOver={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    
                    {item.title}
                    {activeMenu === index && (
                        <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                            {item.subItems.map(subItem => (
                                <li key={subItem.name} className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md">
                                    <a href={subItem.url}>{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            <DonateButton/>
        </ul>
    );
};


export default Navbar;