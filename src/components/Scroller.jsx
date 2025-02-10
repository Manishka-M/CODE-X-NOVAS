import React, { useEffect, useState } from "react";
import "./Scroller.css"; // Import CSS file for styling

const Scroller = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newActiveIndexes = [];
      for (let i = 0; i <= 10; i++) {
        const triggerPoint = windowHeight * (i / 15);
        if (scrollPosition > triggerPoint) {
          newActiveIndexes.push(i);
        }
      }

      setActiveIndexes(newActiveIndexes);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letters = ["C", "O", "D", "E", "-", "X","N", "O", "V", "A", "S"];

  return (
    <div className="main-scroller">
    <div className="scroll-container">
      <div className="animated-text">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`letter ${activeIndexes.includes(index) ? "active" : ""}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Scroller;
