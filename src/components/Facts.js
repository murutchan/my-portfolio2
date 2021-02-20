import React from "react";

const Facts = () => {
  return (
    <section
      id="facts"
      className="shadow-dark color-white background parallax padding-50"
      data-image-src="images/background-1.jpg"
    >
      <div className="row relative z-1">
        <div className="col-md-3 col-sm-6">
          <div className="fact-item text-center">
            <i className="fas fa-thumbs-up icon-circle"></i>
            <h2 className="count">150+</h2>
            <span>Contributions on Github</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="fact-item text-center">
            <i className="fas fa-coffee icon-circle"></i>
            <h2 className="count">2765+</h2>
            <span>Cup of coffee</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="fact-item text-center">
            <i className="fas fa-smile icon-circle"></i>
            <h2 className="count">10+</h2>
            <span>Happy customers</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="fact-item text-center">
            <i className="fas fa-pen-fancy icon-circle"></i>
            <h2 className="count">2+</h2>
            <span>Years of Experience</span>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default Facts;
