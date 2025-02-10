import React from "react";
import "./TopSection.css"; // Import the CSS file

const TopSection = () => {
  const images = [
    { src: "/images/blog1.png", description: "The first day ends with Inno-thon, a 12-hour coding marathon by Code-X Novas, fostering innovation, collaboration, and problem-solving as teams compete for recognition and rewards." },
    { src: "/images/blog2.png", description: "Code-X-Novas, a renowned startup, is dedicated to tech-driven solutions and fostering student innovation. Led by Sambit Pradhan, the team has built impactful projects and spearheaded initiatives like Innothon 2025, making a difference through technology." },
    { src: "/images/blog3.png", description:"sponsors" },
    { src: "/images/blog4.png", description: "Global Recognition: Invited as a sponsor for the Biggest AI Festival in Dubai, showcasing our innovation in artificial intelligence." }
  ];
  return (
    <div className="container">
      <div className="text-first">WHAT IS INNOTHAN?</div>
      <div className="section">
        {images.map((data, index) => (
          <>
          <div className="box" key={index}>
            <div className="box-img">
              <img src={data.src} alt="Image Description" />
              <div className="box-text">Sambit Pradan</div>
            </div>
            <div className="text-main">
              <p>{data.description}</p>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopSection;