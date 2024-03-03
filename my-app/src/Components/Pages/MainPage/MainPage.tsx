import React from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Headline from "./Sections/Headline";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        {/* <section className="head-line">
          <h1>Headline with some nice background image</h1>
        </section> */}
        <Headline text="Transforming Lives Through Mentorship: Empowering At-Risk Youth for a Brighter Future" />
        <section className="introduction">
          <p>Introduction paragraphs ...</p>
        </section>
        <section className="stay-up-to-date">
          <h2>Stay Up to Date</h2>
        </section>
        <section className="achievement">
          <h2>achievement</h2>
        </section>
        <section className="social-media">
          <h2>Social media area</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
