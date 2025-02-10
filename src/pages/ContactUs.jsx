import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>

      <div className="contact-content">
        {/* Left Section - Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Section - Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509427!2d144.95373631550468!3d-37.81627974202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df2df750d%3A0x5045675218cee40!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1616467449813!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
