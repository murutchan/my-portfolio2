import React from "react";

const Services = () => {
  return (
    <section id="services" className="shadow-blue white-bg padding">
      <h3 className="section-title">My work process</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row process-p">
        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-search icon-simple"></i>
            <h4 className="my-3">Research</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-drafting-compass icon-simple"></i>
            <h4 className="my-3">Sketch</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-palette icon-simple"></i>
            <h4 className="my-3">Design</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-code icon-simple"></i>
            <h4 className="my-3">Development</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-spell-check icon-simple"></i>
            <h4 className="my-3">Test</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-rocket icon-simple"></i>
            <h4 className="my-3">Deploy</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetuer elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
