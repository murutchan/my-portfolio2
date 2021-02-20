import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData });
    setSuccessMessage(true);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="shadow-blue white-bg padding">
      <h3 className="section-title">Get in touch</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="contact-info mb-5">
            <i className="icon-phone"></i>
            <div className="details">
              <h5>Phone</h5>
              <span>+17737990076</span>
            </div>
          </div>
          <div className="contact-info mb-5">
            <i className="icon-envelope"></i>
            <div className="details">
              <h5>Email address</h5>
              <span>murutchan@gmail.com</span>
            </div>
          </div>
          <div className="contact-info">
            <i className="icon-location-pin"></i>
            <div className="details">
              <h5>Location</h5>
              <span>USA</span>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            id="contact-form"
            className="contact-form"
            onSubmit={(e) => onFormSubmit(e)}
          >
            <div className="messages"></div>

            <div className="row">
              <div className="column col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="InputName"
                    placeholder="Your name"
                    required
                    data-error="Name is required."
                    onChange={(e) => onChange(e)}
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="column col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    name="email"
                    placeholder="Email address"
                    required
                    data-error="Email is required."
                    onChange={(e) => onChange(e)}
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="column col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="InputSubject"
                    name="subject"
                    placeholder="Subject"
                    required
                    data-error="Subject is required."
                    onChange={(e) => onChange(e)}
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="column col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="InputMessage"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    required
                    data-error="Message is required."
                    onChange={(e) => onChange(e)}
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              name="submit"
              id="submit"
              value="Submit"
              className={successMessage ? "btn btn-success" : "btn btn-default"}
            >
              <i className="fas fa-paper-plane icon-paper-plane"></i>
              {successMessage ? "Message sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
