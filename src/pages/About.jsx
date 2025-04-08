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
            <img src={Myimage} alt="image" width={475} height={200} />
            <p>
              To revolutionize the digital world by providing innovative and
              user-friendly technology solutions that enhance efficiency,
              connectivity, and growth for businesses and individuals
              worldwide."
            </p>
          </div>

          <div className="about-mission">
            <img src={Image} alt="Image" width={475} height={200} />
            <p>
              Our mission is to develop cutting-edge software and IT services
              that empower businesses, streamline processes, and create seamless
              digital experiences. We strive to drive innovation, ensure
              quality, and deliver customer-centric solutions that shape the
              future of technology."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

