import React from "react";

import "./OurMission.css";
import bannerImage from "../../../../images/ai-mentorship-image-1.jpg";

const OurMission: React.FC = () => {
  return (
    <div>
      <main className="our-mission-content">
        <div className="banner-wrapper">
          <div className="banner-image">
            <div className="banner-overlay">
              <div className="banner-title">Our Mission</div>
            </div>
          </div>
        </div>
        <h2>Our Mission</h2>
      </main>
    </div>
  );
};

export default OurMission;
