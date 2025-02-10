import React from "react";
import "./OurTeam.css"; // Import CSS file

const teamMembers = [
  { id: 1, name: "Sambit Pradhan", role: "CEO", image: "./images/sambit.jpg" },
  { id: 2, name: "Akash Biswal", role: "CFO/HR", image: "./images/akash.jpg" },
  { id: 3, name: "Satish Kumar Meher", role: "BACKEND LEAD", image: "./images/satish.jpg" },
  { id: 4, name: "Krishna Koushik Barik", role: "UI/UX DEVELOPER", image: "./images/krishna.jpg" },
  { id: 5, name: "Abhishek Bairagi", role: "OPERATION MANAGER", image: "./images/member1.jpg" },
  { id: 6, name: "Nigam Prasad Panda", role: "UI/UX AND VIDEO EDITOR", image: "./images/nigam.jpg" },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>OUR TEAM</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={member.id} className={`team-card ${index === 4 ? "highlight" : ""}`}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <p className="role">{member.role}</p>
              <p className="name">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
