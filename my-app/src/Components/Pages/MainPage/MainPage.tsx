import React from "react";
import Headline from "./Sections/Headline";
import SiteIntro from "./Sections/SiteIntro";
import Achievements from "./Sections/Achievements";

const MainPage: React.FC = () => {
  return (
    <div>
      <main className="main-content">
        <Headline text="Transforming Lives Through Mentorship: Empowering At-Risk Youth for a Brighter Future" />
        {/* <section className="introduction">
          <p>Introduction paragraphs ...</p>
        </section> */}
        <SiteIntro />
        {/* <section className="stay-up-to-date">
          <h2>Stay Up to Date</h2>
        </section> */}
        {/* <section className="achievement">
          <h2>achievement</h2>
        </section> */}
        <Achievements />
        {/* <section className="social-media">
          <h2>Social media area</h2>
        </section> */}
      </main>

    </div>
  );
};

export default MainPage;
