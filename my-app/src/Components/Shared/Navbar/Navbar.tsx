import React, { useState } from 'react';
import DonateButton from '../DonationButton/Donate';
import { FiChevronDown } from "react-icons/fi";
import { menuItems } from './MenuItems';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    return (
        <ul className="relative flex cursor-pointer">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className={`navbar-item ${activeMenu === index ? "navbar-item-active" : "navbar-item-inactive"}`}
                    onMouseOver={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    {item.title}<FiChevronDown/>
                    {activeMenu === index && (
                        <ul className="absolute mt-1 shadow-md rounded-md z-10">
                            {item.subItems.map(subItem => (
                                <li key={subItem.name} className="submenu-item">
                                    <a href={subItem.url}>{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

            ))}
            <DonateButton />
        </ul>
    );
};

export default Navbar;
