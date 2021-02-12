import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      id="home"
      data-image-src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m Askar Talant<span className="dot"></span>
        </h1>
        <p className="mb-4">
          I am a fullstack web developer. My main focus right now is making MERN
          Stack applications. I love REACT.JS very much.
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
