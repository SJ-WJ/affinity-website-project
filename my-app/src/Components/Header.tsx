import React from "react";
import Navbar from "./Navbar";
import Logo from '../images/AFIINITY+LOGOtransparent.png';

const Header: React.FC = () => {
  return (
    <header className="relative container mx-auto p-6 bg-slate-300 max-w-full">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-40">
        <img src={Logo} alt="Logo" className="sm:w-48 md:w-120" />
        {/* sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px) */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
