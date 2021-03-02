import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section id="resume" className="shadow-blue white-bg padding">
      <h3 className="section-title">Experience & Education</h3>
      <div className="spacer" data-height="80"></div>

      <div className="timeline">
        <div className="entry">
          <div className="title">
            <span>09/2019-present</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Frontend Engineer at Echo</h4>
            <p>
              ⦁ Developed and implemented highly-responsive components using
              React & Redux <br />⦁ Optimized components and reduced pages
              loading time by 15% <br />⦁ Collaborated with back-end team to
              maintain RestAPI rules and reduced HTTP requests
              <br /> ⦁ Implemented client-side pagination & improved performance
              by 23% <br />⦁ Increased unit test coverage by 25%
              <br /> ⦁ Reviewed code and helped new team members Improved
              performance 20% by adding & using reselect (memoize redux
              selector), React.Memo, React.lazy & suspense, gzipping &
              compression <br />⦁ Refactored class based components to
              functional components using Hooks.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <span>10/2017-08/2019</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Frontend engineer at Yurtah</h4>
            <p>
              ⦁ Developed reusable React components <br /> ⦁ Managed application
              state with Redux, implemented Saga <br /> ⦁ Worked with back-end
              team to implement business logic using Node.js, Express.js <br />{" "}
              ⦁ Built dashboard to manage client data using Chart.js <br /> ⦁
              Developed search functionality and improved performance by 20%
              using pagination <br />⦁ Collaborated with design team to
              implement new UI features
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <span>04/2017 - 09/2017</span>
          </div>
          <div className="body">
            <h4 className="mt-0">"General Assembly" coding bootcamp</h4>
            <p>
              I went to this coding bootcamp to change my career. Its intesive
              web development program really helped me to level up my skills and
              gave me a confidence. It changed my life.
            </p>
          </div>
        </div>
        <span className="timeline-line"></span>
        <Link
          to="/experience"
          className="btn btn-alt float-right"
          style={{ marginTop: "35px" }}
        >
          more about experience
          <i className="fas fa-angle-double-right icon-envelope ml-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
