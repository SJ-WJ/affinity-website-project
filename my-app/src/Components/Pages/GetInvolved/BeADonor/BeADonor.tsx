import React from 'react';
import "./BeADonor.css";

const BeADonor: React.FC = () => {
  return (
    <div className="h-screen p-40">
      <section className="be-a-donor-content flex">
        <div className="text-xl mr-20">
          <div className="mb-10">
            <strong className="text-3xl font-bold">
              <h1 className="">Consider Donating To AMF</h1>
            </strong>
            <i>
              Because we are a registered charity, any donation over $20.00 can
              be used as a dedication on your yearly taxes.
            </i>
          </div>
          <br />
          <div>
            <strong>
              <h2 className="text-xl font-bold">
                Here are the areas your donations will go to help fund:{" "}
              </h2>
            </strong>
            <br />
            <ul className="list-disc ml-14 font-normal">
              <li>New programs for our youths</li>
              <li>resources for our youth</li>
              <li>
                Providing essential supplies/resources to help support youths
                entering the work force
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img alt="place holder" /> 
          {/* Image is needed */}
        </div>
      </section>
    </div>
  );
};

export default BeADonor;
