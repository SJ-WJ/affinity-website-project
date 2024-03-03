import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Headline from "./Sections/Headline";
import SiteIntro from "./Sections/SiteIntro";
import StayUpToDate from "./Sections/StayUpToDate";
import Achievements from "./Sections/Achievements";
import SocialMedia from "./Sections/SocialMedia";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Headline text="Transforming Lives Through Mentorship: Empowering At-Risk Youth for a Brighter Future" />
        {/* <section className="introduction">
          <p>Introduction paragraphs ...</p>
        </section> */}
        <SiteIntro />
        {/* <section className="stay-up-to-date">
          <h2>Stay Up to Date</h2>
        </section> */}
        <StayUpToDate />
        {/* <section className="achievement">
          <h2>achievement</h2>
        </section> */}
        <Achievements />
        {/* <section className="social-media">
          <h2>Social media area</h2>
        </section> */}
        <SocialMedia />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
