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
    <section id="skills" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" data-height="80"></div>
      <p className="mb-0">
        I am passionate about creating websites that help businesses, make
        people's life easier and find creative solutions for problems &
        challenges.
      </p>
      <div className="row mt-5">
        {skills.map((skill) => (
          <div className="col-sm-4" key={skill}>
            <div className="skill-item">
              <div className="skill-info clearfix ">
                <h4 className="mb-3 mt-0">
                  <i
                    className="far fa-dot-circle float-left mr-1"
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
