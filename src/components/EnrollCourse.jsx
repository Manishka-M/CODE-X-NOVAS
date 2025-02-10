import React from "react";
import "./EnrollCourse.css"; // Import the CSS file

const courses = [
  {
    id: 1,
    image: "./images/comming.jpg",
    description: "How to learn data structure and anything you need to learn",
    price: "$53",
    discount: "50% OFF",
  },
  {
    id: 2,
    image: "./images/comming.jpg",
    description: "How to learn data structure and anything you need to learn",
    price: "$53",
    discount: "50% OFF",
  },
  {
    id: 3,
    image: "./images/comming.jpg",
    description: "How to learn data structure and anything you need to learn",
    price: "$53",
    discount: "50% OFF",
  },
];

const EnrollPage = () => {
  return (
    <div className="container">
      <div className="heading-text">OUR WORKSHOP</div>
      <div className="section">
        {courses.map((course, index) => (
          <div className={`box ${index === courses.length - 1 ? "last-box" : ""}`} key={course.id}>
            <div className="img-main">
              <img src={course.image} alt="Course" />
            </div>
            <div className="text">{course.description}</div>
            <div className="offer-text">
              <div className="box-text-left">{course.price}</div>
              <div className="box-text-right">{course.discount}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="enroll-div">
        <button className="enroll-button">ENROLL NOW</button>
      </div>
    </div>
  );
};

export default EnrollPage;
