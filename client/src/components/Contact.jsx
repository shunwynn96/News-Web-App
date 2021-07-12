import React from "react";

function Contact() {
  return (
    <section className="container contact-us">
      <h2 className="text-dark font-weight-normal text-center">CONTACT<span className="text-danger"> US</span></h2>
      <i className="fas fa-phone contact-icon"></i>
      <i className="fab fa-whatsapp contact-icon"></i>
      <div className="phone-container">
        <p className="phone-num">(+1) 0123456789</p>
        <p className="phone-num">(+1) 2354132512</p>
      </div>
        <span className="text-danger fw-bold">Made By</span> <span className="text-dark">Shun Wynn Kok</span>
    </section>
  );
}

export default Contact;