import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="footer"  data-aos="fade-up">
      <div className="foer">
      <div className="footer-s1">
        <h2 className="fo-head">Links</h2>
        <ul className="footer-li">
          <p><li><a className="f-li" href="">Home</a></li></p>
          <p><li><a className="f-li" href="">About</a></li></p>
          <p><li><a className="f-li" href="">Service</a></li></p>
          <p><li><a className="f-li" href="">Contact</a></li></p>
        </ul>
      </div>
      <div className="footer-s1">
        <h2 className="fo-head">Get in Touch</h2>
        <p><i class="fa-solid fa-envelope fo-em"></i>stratupdeo@gmail.com</p>
        <p><i class="fa-solid fa-square-phone fo-em"></i>7859546378</p>
        <p><i class="fa-solid fa-location-dot fo-em"></i>#450/3, Anna Nagar Thamaraikulam,Kinathukadavu Post,Coimbatore-634001. Tamil Nadu.India.</p>
      </div>
      <div className="footer-s1">
      <h2 className="fo-head">Our Services</h2>
      <p>Design</p>
      <p>Development</p>
      <p>Consultancy</p>
      <p>Contant Creater</p>
      <p>Business</p>
      <p>Technology</p>
      </div>
      <div className="footer-s1">
      <h2 className="fo-head">Get Diretion</h2>
      <iframe
        title="Startup Co Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9279470492333!2d76.95458281480028!3d11.016844392144503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c861d82e0f%3A0x1e9319a521b91a06!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617180507123!5m2!1sen!2sin"
        class=" fo-map-iframe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>     
      </div>
     
    </footer>
    <div className="foer-1">
        <p>Copyright@2025|Developed By StartupCo</p>
      </div>
    </>
  );
};

export default Footer;
