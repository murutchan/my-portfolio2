import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      id="home"
      data-image-src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m Askar Talant<span className="dot"></span>
        </h1>
        <p className="mb-4">
          I am a web developer with 3+ years of experience. My expertise are in
          React.js, Javascript, SASS, HTML5 & CSS3, BOOTSTRAP and I am
          comfortable working with Node.js, mongoDB, express.js.
        </p>
        <Link to="/portfolio" className="btn btn-default btn-lg mr-3">
          <i className="fas fa-th-large icon-grid"></i>View Portfolio
        </Link>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <a href="#contact" className="btn btn-border-light btn-lg">
          <i className="fas fa-envelope icon-envelope"></i>Contact me
        </a>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default MainPage;
