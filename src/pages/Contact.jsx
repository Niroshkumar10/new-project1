import React, { useState,useEffect } from "react";



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
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
<div class="form-card1">
  <div class="form-card2">
    <form class="form ">
      <p class="form-heading">Get In Touch</p>

      <div class="form-field">
        <input required="" placeholder="Name" class="input-field" type="text" />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Email"
          class="input-field"
          type="email"
        />
      </div>

      <div class="form-field">
        <input
          required=""
          placeholder="Subject"
          class="input-field"
          type="text"
        />
      </div>

      <div class="form-field">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          class="input-field"
        ></textarea>
      </div>

      <button class="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>
<button className="button" onClick={scrollToTop}>
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 
              160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 
              0L160 141.2V448c0 17.7 14.3 32 32 
              32s32-14.3 32-32V141.2L329.4 
              246.6c12.5 12.5 32.8 12.5 45.3 
              0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>

    </>
  );
};

export default Contact;
