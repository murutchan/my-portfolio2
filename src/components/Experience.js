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
            <span>2018-present</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Software engineer</h4>
            <p>
              I've worked at the company called Dunder Mifflin. It is a paper
              company, where I was maintaining their website.
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <span>2017 - 2018</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Coding Bootcamp</h4>
            <p>
              I went to a coding bootcamp. Where I learnt industry technologies
            </p>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <span>2016 - 2017</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Personal Banker</h4>
            <p>
              I started working at chase bank as a teller and was promoted to
              personal banker. I learn a lot about customer service, how to be
              careful with confidential information and finance.
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
