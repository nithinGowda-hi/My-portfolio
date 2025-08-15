import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", method: "email" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.method === "email") {
      // Send via Email
      const mailtoLink = `mailto:gnithin905@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } else if (formData.method === "whatsapp") {
      // Send via WhatsApp
      const whatsappNumber = "919019107141"; // include country code
      const whatsappMessage = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      window.open(whatsappLink, "_blank");
    }

    // Reset form fields
    setFormData({ name: "", email: "", subject: "", message: "", method: "email" });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">📬 Let's Connect</h2>
        <p className="text-center contact-intro">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out — I’ll respond as soon as possible!
        </p>

        <div className="row mt-4">
          {/* Contact Info */}
          <div className="col-md-4 contact-info bg-dark text-white p-4 rounded shadow">
            <h5>Contact Details</h5>
            <p>📍 Bangalore, India</p>
            <p>📞 +91 90191 07141</p>
            <p>📧 gnithin905@gmail.com</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-8 mt-4 mt-md-0">
            <form onSubmit={handleSubmit} className="contact-form p-4 rounded shadow bg-dark text-white">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control bg-secondary text-white" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control bg-secondary text-white" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control bg-secondary text-white" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="form-control bg-secondary text-white" placeholder="Your Message" required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Send via</label>
                <select name="method" value={formData.method} onChange={handleChange} className="form-select bg-secondary text-white">
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <button type="submit" className="btn btn-success w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
