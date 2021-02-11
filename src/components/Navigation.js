import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <header className="left float-left shadow-dark" id="header">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link>
            <img src="https://via.placeholder.com/70x70" alt="Bako Doe" />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            Bako Doe
          </Link>
          <span className="site-slogan">Web Developer</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                <a href="#home" className="active">
                  <i className="icon-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="icon-user"></i>About
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="icon-bulb"></i>Services
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="icon-graduation"></i>Resume
                </a>
              </li>
              <li>
                <a href="#works">
                  <i className="icon-grid"></i>Works
                </a>
              </li>
              <li>
                <a href="#blog">
                  <i className="icon-pencil"></i>Blog
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="icon-phone"></i>Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>

            <span className="copyright">© 2021 webby devvys</span>
          </div>
        </div>
      </header>
      <div class="mobile-header py-2 px-3 mt-4">
        <button class="menu-icon mr-2">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="index.html" class="logo">
          <img src="https://via.placeholder.com/70x70" alt="Bako Doe" />
        </a>
        <a href="index.html" class="site-title dot ml-2">
          Bako Doe
        </a>
      </div>
    </Fragment>
  );
};

export default Navigation;
