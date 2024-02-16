import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi"

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

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
                <li
                    key={index}
                    className="inline-block container"
                    onMouseOver={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <span className="mr-1">{item.title}</span>
                    {activeMenu === index && (
                        <ul className="absolute bg-white shadow-md mt-0">
                            {item.subItems.map(subItem => (
                                <li key={subItem.name} className="hover:bg-gray-100">
                                    <a href={subItem.url}>{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};


export default Navbar;