import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section id="resume" class="shadow-blue white-bg padding">
      <h3 class="section-title">Experience & Education</h3>
      <div class="spacer" data-height="80"></div>

      <div class="timeline">
        <div class="entry">
          <div class="title">
            <span>2018-present</span>
          </div>
          <div class="body">
            <h4 class="mt-0">Software engineer</h4>
            <p>
              I've worked at the company called Dunder Mifflin. It is a paper
              company, where I was maintaining their website.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">
            <span>2017 - 2018</span>
          </div>
          <div class="body">
            <h4 class="mt-0">Coding Bootcamp</h4>
            <p>
              I went to a coding bootcamp. Where I learnt industry technologies
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">
            <span>2016 - 2017</span>
          </div>
          <div class="body">
            <h4 class="mt-0">Personal Banker</h4>
            <p>
              I started working at chase bank as a teller and was promoted to
              personal banker. I learn a lot about customer service, how to be
              careful with confidential information and finance.
            </p>
          </div>
        </div>
        <span class="timeline-line"></span>
        <Link
          to="/experience"
          class="btn btn-alt float-right"
          style={{ marginTop: "35px" }}
        >
          more about experience
          <i class="fas fa-angle-double-right icon-envelope ml-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
