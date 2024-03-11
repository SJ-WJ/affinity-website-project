import React from "react";
import Gallery from "./Gallery";

const SiteIntro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-4 md:space-y-0 md:space-x-4 bg-dutch-wine text-marian-blue">
      <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-4">
        <p className="text-lg sm:text-xl font-semibold max-w-2xl">
          Empowering Calgary's youth at-risk through impactful mentorship, the Affinity Mentorship Foundation fosters positive change, supports continuous education, and builds a foundation for a brighter future.
        </p>
        <button className="bg-marian-blue text-white text-sm sm:text-base py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="w-full max-w-4xl">
        {/* Placeholder for Slideshow */}
        <Gallery />
      </div>
    </div>
  );
};

export default SiteIntro;
