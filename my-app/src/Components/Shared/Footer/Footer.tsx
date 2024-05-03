import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-marian-blue pt-12 w-full">
      <div className="container mx-auto px-5 pb-10 flex flex-col md:flex-row justify-between items-end text-mint-green">
        {/* Contact Info */}
        <div className="md:order-1 md:mr-20 flex flex-col space-y-4">
          <div className="font-bold text-fawn">
            Affinity Mentorship Foundation (AMF)
          </div>
          <div>14058 Richmond Road Calgary, Alberta T3E 7Y7</div>
          <div>403-200-9766</div>
          <div>Charity Registration # 81705 1394 RR0001</div>
        </div>

        {/* Footer Menu */}
        <div className="md:order-2 space-y-10 md:space-y-0 md:flex md:space-x-20 text-xl md:text-base">
          <div className="flex flex-col space-y-3">
            <a href="#about" className="hover:text-fawn">
              About
            </a>
            <a href="#jobs" className="hover:text-fawn">
              Jobs
            </a>
            <a href="#blog" className="hover:text-fawn">
              Blog
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="md:order-3 flex items-center space-x-5 align-middle">
          <div className="text-fawn hover:text-mint-green cursor-pointer">
            <FaFacebook className="w-8 h-8" />
          </div>
          <div className="text-fawn hover:text-mint-green cursor-pointer">
            <FaLinkedinIn className="w-8 h-8" />
          </div>
          <div className="text-fawn hover:text-mint-green cursor-pointer">
            <FaInstagram className="w-8 h-8" />
          </div>
          <div className="text-fawn hover:text-mint-green cursor-pointer">
            <FaYoutube className="w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
