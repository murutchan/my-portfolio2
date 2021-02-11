import React from "react";
import HomePage from "./HomePage";

const ExperiencePage = () => {
  return (
    <main className="content float-right">
      <section id="resume" class="shadow-blue white-bg padding">
        <h3 class="section-title">Experience</h3>
        <div class="spacer" data-height="80"></div>

        <div class="timeline">
          <div class="entry">
            <div class="title">
              <span>2019 - Present</span>
            </div>
            <div class="body">
              <h4 class="mt-0">Academic Degree</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget dolor aenean massa.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <span>2018 - 2015</span>
            </div>
            <div class="body">
              <h4 class="mt-0">Bachelor’s Degree</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget dolor aenean massa.
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <span>2015 - 2012</span>
            </div>
            <div class="body">
              <h4 class="mt-0">Honours Degree</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget dolor aenean massa.
              </p>
            </div>
          </div>
          <span class="timeline-line"></span>
        </div>
      </section>
    </main>
  );
};

export default ExperiencePage;
