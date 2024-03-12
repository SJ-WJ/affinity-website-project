import React from 'react';
import './Headline.css';
import backgroundImage from '../../../../images/danglingfeetlandscape.jpg'; // Ensure correct path

interface HeadlineProps {
  text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Optionally, add an overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Text Container, aligned to the left but centered vertically */}
      <div className="absolute left-0 top-1/2 w-full transform -translate-y-1/2 p-12">
        <div className="max-w-md ml-auto mr-0"> {/* Adjust margins and max-width as needed */}
          <h1 className="text-4xl font-bold text-white">{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Headline;
