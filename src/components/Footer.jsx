import React from "react";
import "./Footer.css"; // Ensure you have a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="#">Our team</a></li>
              <li><a href="#">Rules</a></li>
              <li><a href="#">Why Odia Ashmita</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>EVENTS</h4>
            <ul>
              <li><a href="#">Baliyatra</a></li>
              <li><a href="#">EXPO</a></li>
              <li><a href="#">Krishi Utsav</a></li>
              <li><a href="#">Kala Utsav</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>INFORMATION</h4>
            <ul>
              <li><a href="#">History of Baleswar</a></li>
              <li><a href="#">History of Bhubaneswar</a></li>
              <li><a href="#">Blog on Crafts</a></li>
              <li><a href="#">Latest News</a></li>
            </ul>
          </div>
        </div>

        <div className="rights">
          <hr />
          <div className="rights-container">
            <div className="first-text">Privacy Policy | Cookie Policy | Terms</div>
            <div className="last-text">Made with ❤ by Code X Novas</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
