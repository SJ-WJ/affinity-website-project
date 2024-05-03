import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Shared Components
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";

//Main Home Page
const MainPage = lazy(() => import('./Components/Pages/MainPage/MainPage'));

//Who We Are Menus
const OurStory = lazy(() => import('./Components/Pages/WhoWeAre/OurStory/OurStory'));
const OurMission = lazy(() => import('./Components/Pages/WhoWeAre/OurMission/OurMission'));
const OurImpact = lazy(() => import('./Components/Pages/WhoWeAre/OurImpact/OurImpact'));
const OurFundersAndPartners = lazy(() => import('./Components/Pages/WhoWeAre/OurFundersAndPartners/OurFundersAndPartners'));

//What We Do Menus
const MeetUps = lazy(() => import('./Components/Pages/WhatWedo/MeetUps/MeetUps'));
const Mentorship = lazy(() => import('./Components/Pages/WhatWedo/Mentorship/Mentorship'));
const CommunityEngagement = lazy(() => import('./Components/Pages/WhatWedo/CommunityEngagement/CommunityEngagement'));

//Get Involved Menus
const BeAMentor = lazy(() => import('./Components/Pages/GetInvolved/BeAMentor/BeAMentor'));
const BeAMentee = lazy(() => import('./Components/Pages/GetInvolved/BeAMentee/BeAMentee'));
const BeADonor = lazy(() => import('./Components/Pages/GetInvolved/BeADonor/BeADonor'));
const VolunteerOpportunities = lazy(() => import('./Components/Pages/GetInvolved/VolunteerOpportunities/VolunteerOpportunities'));
const EmploymentOpportunities = lazy(() => import('./Components/Pages/GetInvolved/EmploymentOpportunities/EmploymentOpportunities'));

//Out There Menus
const Calender = lazy(() => import('./Components/Pages/OutThere/Calender/Calender'));
const SocialMedia = lazy(() => import('./Components/Pages/OutThere/SocialMedia/SocialMedia'));
const Blog = lazy(() => import('./Components/Pages/OutThere/Blog/Blog'));

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-impact" element={<OurImpact />} />
            <Route path="/our-funders-partners" element={<OurFundersAndPartners />} />
            <Route path="/meet-ups" element={<MeetUps />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/community-engagement" element={<CommunityEngagement />} />
            <Route path="/be-a-mentor" element={<BeAMentor />} />
            <Route path="/be-a-mentee" element={<BeAMentee />} />
            <Route path="/be-a-donor" element={<BeADonor />} />
            <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
            <Route path="/employment-opportunities" element={<EmploymentOpportunities />} />
            <Route path="/calendar" element={<Calender />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
