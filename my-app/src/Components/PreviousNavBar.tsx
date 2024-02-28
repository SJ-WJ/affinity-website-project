import React, { useState } from 'react';
import DonateButton from './Shared/DonationButton/Donate';

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    return (
        <ul className="relative flex">
            {/* "Who We Are menu" */}
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 text-gray-700 sm:px-2 sm:py-1 sm:text-sm sm:mr-5 md:px-3 md:py-1 md:text-base md:mr-10 lg:px-4 lg:py-1 lg:text-base lg:mr-10 xl:px-4 xl:py-1 xl:text-xl xl:mr-8 2xl:px-5 2xl:py-1 2xl:text-xl 2xl:mr-12 ${activeMenu === 0 ? 'bg-blue-500 text-white' : ''}`}
                onMouseOver={() => setActiveMenu(0)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Who We Are
                {activeMenu === 0 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Our History</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Our Mission</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Our Impact</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Our Donors</a></li>
                    </ul>
                )}
            </li>

            {/* "What We Do menu" */}
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 text-gray-700 sm:px-2 sm:py-1 sm:text-sm sm:mr-5 md:px-3 md:py-1 md:text-base md:mr-10 lg:px-4 lg:py-1 lg:text-base lg:mr-10 xl:px-4 xl:py-1 xl:text-xl xl:mr-8 2xl:px-5 2xl:py-1 2xl:text-xl 2xl:mr-12 ${activeMenu === 1 ? 'bg-blue-500 text-white' : ''}`}
                onMouseOver={() => setActiveMenu(1)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                What We Do
                {activeMenu === 1 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Meet ups</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Mentors Night</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Mentorship</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Community Engagement</a></li>
                    </ul>
                )}
            </li>

            {/* "Get Involve menu" */}
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 text-gray-700 sm:px-2 sm:py-1 sm:text-sm sm:mr-5 md:px-3 md:py-1 md:text-base md:mr-10 lg:px-4 lg:py-1 lg:text-base lg:mr-10 xl:px-4 xl:py-1 xl:text-xl xl:mr-8 2xl:px-5 2xl:py-1 2xl:text-xl 2xl:mr-12 ${activeMenu === 2 ? 'bg-blue-500 text-white' : ''}`}
                onMouseOver={() => setActiveMenu(2)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Get Involved
                {activeMenu === 2 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Be a Mentor</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Be a Mentee</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Be a Donor</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Volunteer Opportunities</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Employment Opportunities</a></li>
                    </ul>
                )}
            </li>

            {/* "Out There menu */}
            <li
                className={`inline-block px-5 py-3 text-2xl font-medium rounded-full mr-20 text-gray-700 sm:px-2 sm:py-1 sm:text-sm sm:mr-5 md:px-3 md:py-1 md:text-base md:mr-10 lg:px-4 lg:py-1 lg:text-base lg:mr-10 xl:px-4 xl:py-1 xl:text-xl xl:mr-8 2xl:px-5 2xl:py-1 2xl:text-xl 2xl:mr-12 ${activeMenu === 3 ? 'bg-blue-500 text-white' : ''}`}
                onMouseOver={() => setActiveMenu(3)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                Out There
                {activeMenu === 3 && (
                    <ul className="absolute mt-1 shadow-md rounded-md text-gray-700 text-lg">
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Blog</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Testimonials</a></li>
                        <li className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-500 hover:text-white sm:px-2 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-base lg:px-4 lg:py-2 lg:text-lg xl:px-5 xl:py-2 xl:text-xl 2xl:px-6 2xl:py-2 2xl:text-lg"><a href="#">Social Media</a></li>
                    </ul>
                )}
            </li>

            {/* Donation Button */}
            <DonateButton />
        </ul>
    );
};

export default Navbar;

