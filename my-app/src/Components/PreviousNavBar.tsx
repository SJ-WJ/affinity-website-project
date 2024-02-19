import React, { useState } from 'react';
import DonateButton from './Donate'
import { FiChevronDown } from "react-icons/fi"

interface MenuItem {
    title: string;
    subItems: Array<{ name: string; url: string }>;
}

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    return (
        <ul className="relative flex">
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 ${activeMenu === 0 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                onMouseOver={() => setActiveMenu(0)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Who We Are
                {activeMenu === 0 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Our History</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Our Mission</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Our Impact</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Our Donors</a></li>
                    </ul>
                )}
            </li>
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 ${activeMenu === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                onMouseOver={() => setActiveMenu(1)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                What We Do
                {activeMenu === 1 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Meet ups</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Mentors Night</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Mentorship</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Community Engagement</a></li>
                    </ul>
                )}
            </li>
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 ${activeMenu === 2 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                onMouseOver={() => setActiveMenu(2)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Get Involved
                {activeMenu === 2 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Be a Mentor</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Be a Mentee</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Be a Donor</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Volunteer Opportunities</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Employment Opportunities</a></li>
                    </ul>
                )}
            </li>
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 ${activeMenu === 3 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                onMouseOver={() => setActiveMenu(3)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Out There
                {activeMenu === 3 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Blog</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Testimonials</a></li>
                        <li className="px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md"><a href="#">Social Media</a></li>
                    </ul>
                )}
            </li>
            <DonateButton/>
        </ul>
    );
};
