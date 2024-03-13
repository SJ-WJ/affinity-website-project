import React from "react";

const achievementsData = [
  { percentage: "100%", description: "felt their mentor's care" },
  { percentage: "92%", description: "follow their mentor’s advice" },
  { percentage: "100%", description: "look forward to mentoring time" },
];

const Achievements: React.FC = () => {
  return (
    <div className="bg-dutch-wine p-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marian-blue text-center mb-6">
        Affinity Mentorship Achievements
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center text-rose-taupe text-center">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="mb-4 md:mb-0">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold">{achievement.percentage}</p>
            <p className="text-xl md:text-2xl">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
