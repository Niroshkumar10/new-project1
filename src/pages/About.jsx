import React from "react";
import "../index.css";
import Myimage from "../assets/vision.png";
// import Home from "../pages/Home";
import Image from "../assets/mission.jpeg";
export const About = () => {
  return (
    <>
      {/* <Home/> */}
      <div className="ab">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>
        <div className="about">
          <div className="about-vision">

          </div>

          <div className="about-mission">
            <div className="about-container">
              <h2>About Us</h2>
              <p>
                Welcome to <strong>StartUp Co</strong> – where ideas become
                reality. We are a passionate team of developers, designers, and
                thinkers focused on creating digital solutions that solve
                real-world problems.
              </p>

              <p>
                Our mission is to empower startups and businesses with modern,
                user-friendly, and responsive web applications. Whether you're
                looking to build a brand, launch a product, or scale your
                service, we’re here to bring your vision to life.
              </p>

              <p>
                At StartUp Co, we believe in innovation, collaboration, and
                continuous learning. We're committed to delivering quality,
                transparency, and technology that drives success.
              </p>

              <p>Let’s build something great together.</p>
            </div>
            <div style={{ margin: "20px auto", maxWidth: "800px" }}>
              <h2>Our Location</h2>
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <iframe
                  title="Startup Co Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9279470492333!2d76.95458281480028!3d11.016844392144503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c861d82e0f%3A0x1e9319a521b91a06!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617180507123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
