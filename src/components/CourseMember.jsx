import React from "react";
import "./CourseMember.css"; // Import the CSS file

// Sample Data for Team Members
const members = [
  {
    id: 1,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Sambit Pradhan",
    role: "CEO",
    skills: ["Front End", "Back End"],
    image: "./images/member1.jpg",
    hoverImage: "./images/hover.jpg",
    instagram: "#",
    linkedin: "#",
  },
];

const CourseMembers = () => {
  return (
    <div className="page">
      {/* <h1>
        OUR <br />
        IPSUM?
      </h1> */}
      {/* <p>quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est</p> */}

      <div className="profile-container">
        {members.map((member) => (
          <div className="profile-card" key={member.id}>
            <div className="profile-image">
              <img src={member.image} alt={member.name} className="default-img" />
              <img src={member.hoverImage} alt={member.name} className="hover-img" />
            </div>
            <div className="profile-info">
              <h2>{member.role}</h2>
              <h3>{member.name}</h3>
              {member.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMembers;
