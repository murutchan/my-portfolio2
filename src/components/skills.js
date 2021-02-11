import React from "react";

const Skills = () => {
  const skills = [
    "CSS3/HTML5",
    "JAVASCRIPT",
    "REACT.JS",
    "BOOTSTRAP",
    "NODE.JS",
    "MONGODB",
    "SASS",
    "EXPRESS.JS",
    "AWS",
  ];
  return (
    <section id="skills" class="shadow-blue white-bg padding">
      <h3 class="section-title">My skills</h3>
      <div class="spacer" data-height="80"></div>
      <p class="mb-0">
        I am passionate about creating a websites that help businesses, make
        people's life easier and find creative solutions for problems &
        challenges.
      </p>
      <div class="row mt-5">
        {skills.map((skill) => (
          <div class="col-sm-4">
            <div class="skill-item">
              <div class="skill-info clearfix">
                <h4 class="mb-3 mt-0">
                  <i
                    class="far fa-dot-circle float-left mr-1"
                    style={{
                      fontSize: "20px",
                      color: "#FF5959",
                      marginTop: "-2px",
                    }}
                  ></i>
                  {skill}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
