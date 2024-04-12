import React from 'react';
import "./BeAMentor.css";

const BeAMentor: React.FC = () => {
    return (
        <div>
            <div className="banner-wrapper">
                <div className="banner-image">
                    <div className="banner-title text-black">Consider Becoming a Mentor</div>
                </div>
            </div>
            <main className="be-a-mentor-content">
                <p>One of the most rewarding experiences is becoming a mentor, knowing that you have truly made a difference in the life of a young person. Here at AMF, we are always in search of mentors to become part of our team.</p>
                <br></br><div className="line-with-padding"></div>
                <p>Becoming a mentor entails providing guidance, support, and encouragement to young individuals who are facing challenging circumstances such as poverty, family issues, or academic struggles, putting them at a higher risk of negative outcomes. This role involves being a positive role model, offering emotional support, and helping these youths navigate their challenges while building resilience and confidence. Mentoring is crucial as it significantly impacts the lives of at-risk youth by increasing their chances for success in education, career, and life. It fosters a sense of belonging and self-worth, equipping them with tools to make positive decisions, and opens up opportunities they might not have had otherwise. Through consistent and positive engagement, mentors can help break the cycle of adversity, enabling at-risk youth to envision and work towards a brighter future.</p>
                <br></br><div className="line-with-padding"></div>
                <h2>Mentor Application Form</h2>
                <p>Affinity Mentorship Foundation is always interested in recruiting new mentors. We also have room on our Board of Directors.</p>
                <p>Fill out some information, and we will be in touch shortly! We can't wait to hear from you!</p>
                <form>
                    <label>Name (required)</label>
                    <div className="name-input-container">
                        <div className="name-field">
                            <label htmlFor="firstName">First Name<span>*</span></label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="name-field">
                            <label htmlFor="lastName">Last Name<span>*</span></label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>


                    <label htmlFor="email">Email<span>*</span></label>
                    <input type="email" id="email" name="email" required />
                    <input type="checkbox" id="newsUpdates" name="newsUpdates" />
                    <label htmlFor="addressLine1">Address Line 1<span>*</span></label>
                    <input type="text" id="addressLine1" name="addressLine1" required />
                    <label htmlFor="addressLine2">Address Line 2</label>
                    <input type="text" id="addressLine2" name="addressLine2" />
                    <label htmlFor="city">City<span>*</span></label>
                    <input type="text" id="city" name="city" required />
                    <label htmlFor="province">Province<span>*</span></label>
                    <input type="text" id="province" name="province" required />
                    <label htmlFor="postalCode">Postal Code<span>*</span></label>
                    <input type="text" id="postalCode" name="postalCode" required />
                    <label htmlFor="phoneContact1">Phone Contact #1</label>
                    <input type="tel" id="phoneContact1" name="phoneContact1" />
                    <label htmlFor="phoneContact2">Phone Contact #2</label>
                    <input type="tel" id="phoneContact2" name="phoneContact2" />
                    <div className="input-container">
                        <label className="radio-label">Are you over the age of 20?<span>*</span></label>
                        <div className="radio-container">
                            <input type="radio" id="over20" name="ageGroup" value="over20" required />
                            <label htmlFor="over20">Yes</label>
                        </div>
                        <div className="radio-container">
                            <input type="radio" id="under20" name="ageGroup" value="under20" required />
                            <label htmlFor="under20">No</label>
                        </div>
                    </div>

                    <div className="input-container">
                        <label className="checkbox-label">What services are you interested in?</label>
                        <div className="checkbox-container">
                            <input type="checkbox" id="mentor" name="services" value="mentor" />
                            <label htmlFor="mentor">Mentor</label>
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" id="boardMember" name="services" value="boardMember" />
                            <label htmlFor="boardMember">Board Member</label>
                        </div>
                    </div>


                    <label htmlFor="howHearAbout">How did you hear about AMF Youth Services Volunteering opportunities?<span>*</span></label>
                    <select id="howHearAbout" name="howHearAbout" required>
                        <option value="Select an option" selected>Select an option</option>
                        <option value="radio">Radio</option>
                        <option value="television">Television</option>
                        <option value="newspaper">Newspaper</option>
                        <option value="website">Website</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="friendsFamilyVolunteer">Friends/Family/AMF Youth Services Volunteer</option>
                        <option value="volunteerActionCenter">The Volunteer Action Center</option>
                        <option value="newsletterBrochuresFlyers">AMF Youth Services Newsletter/Brochures/Flyers</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="commentsInfo">If you would like to add any other comments and/or more information (i.e. awards, hobbies etc.), please do so here.</label>
                    <textarea id="commentsInfo" name="commentsInfo"></textarea>
                    <button type="submit">Submit</button>
                </form>

            </main>
        </div>
    );
};

export default BeAMentor;
