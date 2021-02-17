import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <Fragment>
      <nav className="mt-2">
        <ul className="vertical-menu scrollspy" style={{ fontSize: "17px" }}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Process</a>
          </li>
          <li>
            <a href="#resume">Experience</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default MobileNavigation;
