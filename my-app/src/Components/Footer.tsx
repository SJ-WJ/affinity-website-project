import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-300 text-black pt-12 bottom-0 w-full">
      <div className="container mx-auto px-5 pb-10 flex flex-col md:flex-row justify-between flex-grow items-start">
        
        {/* Contact Info */}
        <div className="md:order-1 md:mr-20 flex flex-col space-y-4 flex-grow">
          <div className="font-bold">Affinity Mentorship</div>
          <div>14058 Richmond Road Calgary, Alberta T3E 7Y7</div>
          <div>403-200-9766</div>
          <div>Charity Registration # 81705 1394 RR0001</div>
        </div>

        {/* Footer Menu */}
        <div className="md:order-2 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 text-xl md:text-base flex-grow">
          <div className="flex flex-col space-y-3">
            <a href="#about">About</a>
            <a href="#jobs">Jobs</a>
            <a href="#press">Press</a>
            <a href="#blog">Blog</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;