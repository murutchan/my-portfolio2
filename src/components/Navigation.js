import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      <header className="left float-left shadow-dark" id="header">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
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
                <Link to="/" className="active">
                  <i className="fas fa-home icon-home"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fas fa-user icon-user"></i>About
                </Link>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-lightbulb icon-bulb"></i>Process
                </a>
              </li>
              <li>
                <Link to="/experience">
                  <i className="fas fa-user-graduate icon-graduation"></i>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <i className="fas fa-briefcase icon-grid"></i>
                  Works
                </Link>
              </li>

              <li>
                <a href="/contact">
                  <i className="fas fa-phone-alt icon-phone mb-5"></i>Contact
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
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <span className="copyright">© 2021 Askar Talantbek uulu</span>
          </div>
        </div>
      </header>
      <div className="mobile-header py-2 px-3 my-1 sticky-top">
        <span></span>
        <button
          className="menu-icon mr-2"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQG6hbaLDyRkag/profile-displayphoto-shrink_800_800/0/1517810406882?e=1618444800&v=beta&t=qNwKeAH6ClrpxZxrmVN7mfQclb4fLf9GWPuwb1H7GB8"
            alt="portrait "
            className="rounded ml-3"
          />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          Askar Talant
        </Link>
        {showMenu ? <MobileNavigation /> : ""}
      </div>
    </Fragment>
  );
};

export default Navigation;
