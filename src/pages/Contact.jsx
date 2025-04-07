import React, { useState } from "react";


const Contact = () => {
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
  <h1 className="contact-heading text-center">Contact Us</h1>
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

    </>
  );
};

export default Contact;
