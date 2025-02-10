// import React, { useState } from "react";
// import "./WorkSection.css";

// const images = [
//   { src: "/images/work1.jpg", title: "NATURE ONE", description: "This is the first layer of nature beauty." },
//   { src: "/images/work2.jpg", title: "NATURE TWO", description: "This is the second layer of nature beauty." },
//   { src: "/images/work3.jpg", title: "NATURE THREE", description: "This is the third layer of nature beauty." },
//   { src: "/images/work4.jpg", title: "NATURE FOUR", description: "This is the fourth layer of nature beauty." }
// ];

// const WorkSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleImageClick = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="work-container">
//       <div className="text-section">
//         <h1>OUR WORK</h1>
//         <h2>{images[activeIndex].title}</h2>
//         <p>{images[activeIndex].description}</p>
//       </div>

//       <div className="image-section" onClick={handleImageClick}>
//         {images.map((image, index) => {
//           const layerIndex = (index - activeIndex + images.length) % images.length;
//           return (
//             <img
//               key={index}
//               src={image.src}
//               alt={image.title}
//               className={`image-layer layer-${layerIndex} ${layerIndex === 0 ? "pop-up" : ""}`}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default WorkSection;


import React, { useState } from "react";
import "./WorkSection.css";

const images = [
  { src: "/images/work1.jpg", title: "Companion IIIT App", description: "A student app used by 2000-3000 users, offering selfattendance,announcements, and eventmanagement" },
  { src: "/images/work2.jpg", title: "B-Healthy App", description: "A health-focused application providing fitness tracking,personalised recommendations, and wellness features." },
  { src: "/images/work3.jpg", title: "Web Development Services", description: "Static Websites: Personal portfolios,blogs, business proles,• Dynamic Websites: E-commerce,platforms, event management portals" },
  { src: "/images/work4.jpg", title: "Features Included", description: "Secure user authentication (OTP /Social Login)• Cloud database solutions (Firebase /MongoDB)• In-app purchases and API integrations and data security" }
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="work-container">
      <div className="text-section">
        <h1>OUR WORK</h1>
        <h2>{images[activeIndex].title}</h2>
        <p>{images[activeIndex].description}</p>
      </div>

      <div className="image-section" onClick={handleImageClick}>
        {images.map((image, index) => {
          const layerIndex = (index - activeIndex + images.length) % images.length;
          const rotation = layerIndex * 15; // Rotates each layer by 30° steps

          return (
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className={`image-layer layer-${layerIndex} ${layerIndex === 0 ? "pop-up" : ""}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;
