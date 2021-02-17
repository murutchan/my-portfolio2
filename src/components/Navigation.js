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
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            Askar
          </Link>
          <span className="site-slogan">Web developer</span>

          <nav>
            <ul
              className="vertical-menu scrollspy"
              style={{ fontSize: "17px" }}
            >
              <li>
                <a href="#home" className="active">
                  <i class="fas fa-home icon-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i class="fas fa-user icon-user"></i>About
                </a>
              </li>
              <li>
                <a href="#services">
                  <i class="fas fa-lightbulb icon-bulb"></i>Process
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i class="fas fa-user-graduate icon-graduation"></i>Experience
                </a>
              </li>
              <li>
                <a href="#works">
                  <i class="fas fa-briefcase icon-grid"></i>
                  Works
                </a>
              </li>
              <li>
                <a href="#blog">
                  <i class="fas fa-pencil-alt icon-pencil"></i>Blog
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fas fa-phone-alt icon-phone mb-5"></i>Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/murutchan" target="blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com" target="blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>

            <span className="copyright">© 2021 webby devvys</span>
          </div>
        </div>
      </header>
      <div class="mobile-header py-2 px-3 mt-4">
        <button
          class="menu-icon mr-2"
          onClick={() => (
            <Fragment>
              <a>Link</a>
            </Fragment>
          )}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" class="logo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
            alt="portrait "
            className="rounded ml-3"
          />
        </Link>
        <Link to="/" class="site-title dot ml-2">
          Askar Talant
        </Link>
      </div>
    </Fragment>
  );
};

export default Navigation;
