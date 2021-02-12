import React from "react";

const Process = () => {
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
              Will research for current trends. Analyze different cases and
              implementations.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-drafting-compass icon-simple"></i>
            <h4 className="my-3">Sketch</h4>
            <p className="mb-0">
              Its a process of brain storming and making initial visualization
              of ideas.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-palette icon-simple"></i>
            <h4 className="my-3">Design</h4>
            <p className="mb-0">
              After sketch, its time to give more details, shapes and colors.
            </p>
          </div>
          <div className="spacer" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-code icon-simple"></i>
            <h4 className="my-3">Development</h4>
            <p className="mb-0">
              Its time to code. Long and creative process. Important to create
              scalable and robust app
            </p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-spell-check icon-simple"></i>
            <h4 className="my-3">Test</h4>
            <p className="mb-0">
              Testing is a crucial part of development. Will test everything
              thoroughly.
            </p>
          </div>
          <div className="spacer d-md-none d-lg-none" data-height="20"></div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-item text-center">
            <i className="fas fa-rocket icon-simple"></i>
            <h4 className="my-3">Deploy</h4>
            <p className="mb-0">
              We know its not the end.Rather Its just the beginning of
              application's life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
