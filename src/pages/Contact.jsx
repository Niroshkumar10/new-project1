import React, { useState, useEffect } from "react";

const Contact = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h1 className="contact-heading text-center ">Contact Us</h1>
      <div className="container"  data-aos="fade-up">
        <div className="form-cd1">
          <img
            className="fs1"
            src="./src/assets/Svg/email-svgrepo-com.svg"
            alt="image"
            width={80}
            height={80}
          />
          <h3>Mail Here</h3>
          <p>helpdesk@startup.com</p>
          <p>startupco@gmail.com</p>
        </div>
        <div className="form-cd1">
          <img
            className="fs1"
            src="./src/assets/Svg/location-pin-alt-1-svgrepo-com.svg"
            alt="image"
            width={80}
            height={80}
          />
          <h3>Visit Here</h3>
          <p>
            #450/3, Anna Nagar Thamaraikulam,Kinathukadavu
            Post,Coimbatore-634001. Tamil Nadu.India.
          </p>
        </div>
        <div className="form-cd1">
          <img
            className="fs1"
            src="./src/assets/Svg/phone-call-svgrepo-com.svg"
            alt="image"
            width={80}
            height={80}
          />
          <h3>Call Here</h3>
          <p>7845637889</p>
          <p>9089657382</p>
        </div>
      </div>
      <div className="form"  data-aos="fade-up">
        <div className="fo-img">
          <img src="./src/assets/cntct.png" alt="" width={400} height={400} />
        </div>
        <div className="fo-form">
          <form className="form-1">
            <div className="flex">
              <label>
                <input required placeholder="first name" type="text" className="input" /><br />
              
              </label>

              <label>
                <input required placeholder="last name" type="text" className="input" />
               
              </label>
            </div>

            <label>
              <input required placeholder=" email" type="email" className="input" />
              
            </label>

            <label>
              <input required type="tel" placeholder="contact number" className="input" />
              
            </label>

            <label>
              <textarea
                required
                rows="3"
                cols={35}
                placeholder="message"
                className="input01"
              ></textarea>
              
            </label>

            <button className="fancy" type="submit">
              <span className="top-key"></span>
              <span className="text">submit</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </form>
        </div>
      </div>
      <div style={{ margin: "20px auto", maxWidth: "800px" }}>
        <div style={{ borderRadius: "12px", overflow: "hidden" }}></div>
      </div>
      <iframe
        title="Startup Co Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9279470492333!2d76.95458281480028!3d11.016844392144503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c861d82e0f%3A0x1e9319a521b91a06!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1617180507123!5m2!1sen!2sin"
        class="map-iframe"
         data-aos="fade-up"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 
              160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 
              0L160 141.2V448c0 17.7 14.3 32 32 
              32s32-14.3 32-32V141.2L329.4 
              246.6c12.5 12.5 32.8 12.5 45.3 
              0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
      </button>
    </>
  );
};

export default Contact;
