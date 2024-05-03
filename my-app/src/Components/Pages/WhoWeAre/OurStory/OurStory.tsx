import React from 'react';
import heroImage from "../../../../images/ai-mentorship-image-3.jpg";
import './OurStory.css';

const OurStory: React.FC = () => {
    return (
        <div>
            <main className="our-story-content">
                <section className="hero-section">
                    <img src={heroImage} alt="our-story-page-hero" />
                    <div className="hero-text">
                        <h2>Our Story</h2>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default OurStory;
