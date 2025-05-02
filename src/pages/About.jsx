import React from "react";
import "../index.css";
export const About = () => {
  return (
    <>
      {/* <Home/> */}
      <div className="ab"  data-aos="fade-up">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>
        <div className="about-mission" >
          <div className="about-container">
            <p>
              Welcome to <strong>StartUp Co</strong> – where ideas become
              reality. We are a passionate team of developers, designers, and
              thinkers focused on creating digital solutions that solve
              real-world problems. Our mission is to empower startups and
              businesses with modern, user-friendly, and responsive web
              applications. Whether you're looking to build a brand, launch a
              product, or scale your service, we’re here to bring your vision to
              life. At StartUp Co, we believe in innovation, collaboration, and
              continuous learning. We're committed to delivering quality,
              transparency, and technology that drives success.
            </p>
          </div>
        </div>
        <div className="about" data-aos="fade-left">   
            <div class="card1">
              <h2>Our Mission</h2>
              <p>
                At our mission is to provide comprehensive IT solutions that
                meet the unique needs of our clients. We strive to bridge the
                gap between technology and business, ensuring that our clients
                can leverage the power of IT to achieve their goals.
              </p>
            </div>

            <div class="card1">
              <div class="values-section">
                <h2>Our Values</h2>
                <p>At our core, we value innovation, integrity, and customer-centricity. Innovation drives us to explore new ideas and solutions, ensuring that we remain at the forefront of our industry. Integrity is the foundation of our relationships, guiding us to act honestly and ethically in all our dealings.</p>
              </div>
            </div>

            <div class="card1">
              <h2>Our Story</h2>
              <p>
                StartUp Co was born out of a passion for technology and a desire
                to help businesses thrive in a digital world. Our founders, we
                set out to provide solutions that not only address these
                challenges but also empower businesses to innovate and grow.
              </p>
            </div>

            <div class="card1">
              <h2>Join Us on Our Journey</h2>
              <p>
                As we continue to evolve and expand our offerings, we invite you
                to join us on this StartUp Cojourney. Whether you are a small
                startup or a large enterprise, is here to support you with the
                IT solutions you need to succeed.
              </p>
            </div>
        </div>
        <div className="about-image" data-aos="fade-left">
         <div className="contents-abt">
          <h1>Who We Are</h1>
          <p><b>Introduction</b></p>
          <p> The first paragraph introduces the organization and its mission, emphasizing the commitment to innovation and client success.</p>
          <p><b>Background </b></p>
          <p> The second paragraph provides a brief history of the organization, including its founding year and reputation in the industry.</p>
          <p><b>Core Values</b></p>
          <p> The third paragraph highlights the core values that guide the organization, reinforcing the commitment to collaboration and continuous improvement.</p>
         </div>
         <div className="image-abt">
          <img src="./src/assets/abt2.png" alt="" width={400} height={400}/>
         </div>
        </div>
      </div>
    </>
  );
};

export default About;
