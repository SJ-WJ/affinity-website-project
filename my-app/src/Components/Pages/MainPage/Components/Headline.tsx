import React from 'react';
import './Headline.css'; // Import the CSS file

interface HeadlineProps {
  text: string;
  // backgroundImageUrl: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <div
      className="headline-container"
      // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="headline-text">{text}</h1>
    </div>
  );
};

export default Headline;


