import React from 'react';
import './Headline.css';

interface HeadlineProps {
  text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return (
    <div className="headline-container">
      <div className="background-image"></div>
      <div className="headline-text-container">
        <h1 className="headline-text">{text}</h1>
      </div>
    </div>
  );
};

export default Headline;



