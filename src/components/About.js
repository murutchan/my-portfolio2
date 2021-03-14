import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="shadow-blue white-bg padding">
      <h3 className="section-title">About Me</h3>
      <div className="spacer" data-height="80"></div>

      <div className="row">
        <div className="col-md-3">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
            alt="about"
            style={{ width: "150px", borderRadius: "50%" }}
          />
        </div>
        <div className="col-md-9">
          <h2 className="mt-4 mt-md-0 mb-4">Helloou,</h2>
          <p className="mb-0">
            My name is Askar. I was born in a fall of 1991 in an election day of
            our first president. It was the time when USSR collapsed and we
            suddenly became an independent country. I think, my parents were
            really excited about that, they decided to name me after the first
            president Askar Akaev. So the name “Askar” was a good name till
            2005. Because in 2005...
            <Link to="/about" className="text-primary bg-warning">
              <em> read more </em>
            </Link>
          </p>
          <div className="row my-4">
            <div className="col-md-6">
              <p className="mb-2">
                Age: <span className="text-dark">29</span>
              </p>
              <p className="mb-0">
                Married: <span className="text-dark">Yes</span>
              </p>
            </div>
            <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
              <p className="mb-2">
                Hobbies:{" "}
                <span className="text-dark">Soccer, reading, travel</span>
              </p>
              <p className="mb-0">
                Email: <span className="text-dark">murutchan@gmail.com</span>
              </p>
            </div>
          </div>
          <a href="/resume-askar.pdf" download className="btn btn-default mr-3">
            <i className="fas fa-download icon-envelope"></i>Resume
          </a>
          <Link to="/about" className="btn btn-alt mt-2 mt-md-0 mt-xs-2">
            <i className="fas fa-angle-double-right icon-envelope"></i>read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
