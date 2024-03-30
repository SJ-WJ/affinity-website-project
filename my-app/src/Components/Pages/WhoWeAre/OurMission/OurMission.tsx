import React from "react";

import "./OurMission.css";
import bannerImage from "../../../../images/ai-mentorship-image-1.jpg";

const OurMission: React.FC = () => {
  return (
    <div>
      <div className="banner-wrapper">
        <div className="banner-image">
          <div className="banner-overlay">
            <div className="banner-title text-white">Our Mission</div>
          </div>
        </div>
      </div>
      <main className="our-mission-content">
        <div className="grid-group mb-14">
          <h2 className="grid-header">
            INVEST IN YOUTH, ENRICH YOUR COMMUNITY
          </h2>
          <div className="grid-item">
            <strong>Our Vision</strong>
            <p>Thriving youth belonging and contributing to safe communities</p>
          </div>
          <div className="grid-item">
            <strong>Mission</strong>
            <p>
              To empower youth at-risk of justice involvement to participate in
              safe communities through actionable mentorship.
            </p>
          </div>
        </div>
        <div className="grid-group">
          <h2 className="grid-header">VALUES</h2>
          <div className="grid-item">
            <strong>Purpose</strong>
            <p>
              We believe that every young person has a PURPOSE, the potential to
              meaningfully contribute to a healthy community. We hope to shine a
              light on that purpose for each youth in our program and help them
              recognize and embrace it for themselves.
            </p>
          </div>
          <div className="grid-item">
            <strong>Empowerment</strong>
            <p>
              We are determined to provide the foundation to EMPOWER each young
              adult in their quest to achieve their purpose; the more they are
              equipped with the tools and the belief in themselves, the more
              success they will experience.
            </p>
          </div>
          <div className="grid-item">
            <strong>Engagement</strong>
            <p>
              We passionately seek to ENGAGE our youth with opportunities, with
              positive norms, engagement in school and the community, with clear
              expectations for behavior, and with physical or psychological
              safety. Research shows mentorship at an early stage, will result
              in healthy relationships which positively impact social,
              emotional, and academic function for children and youth in care.
            </p>
          </div>
          <div className="grid-item">
            <strong>Community</strong>
            <p>
              We build strong COMMUNITY connections, with our city, with our
              people, with education for the youth, and in so doing, create a
              community that is full and vibrant, and empowering for our youth.
              The desired outcome from participating in AMF is that the youth
              will complete their high school education, find sustainable
              employment, break the cycle of re-offending, and leave the program
              with natural support. We also engage with other community agencies
              in the city that provide various opportunities for the AMF youth.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurMission;
